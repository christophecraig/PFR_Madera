import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

import { AuthService } from './auth.service';
import { EnvService } from 'src/env/env.service';

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly envService: EnvService,
    ) {
        envService.isProd();
    }

    @Post('/login')
    async login(@Req() req: Request, @Body() data: { email: string, password: string }, @Res() res: Response): Promise<Response> {
        const ip = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'][0];
        const { response, jwt } = await this.authService.login(data, ip);
        res.cookie('jwt', jwt, {
            httpOnly: true,
            sameSite: true,
            signed: true,
            secure: this.envService.isProd(),
            expires: false,
        });
        return res.status(response.status).json({ ...response, jwt });
    }

    @Post('/logout')
    async logout(@Res() res: Response): Promise<Response> {
        res.clearCookie('jwt');
        return res.json({ loggedOut: true });
    }

    @Post('/logged')
    logged(@Req() req: Request, @Body() body: { jwt: string }, @Res() res: Response): Response {
        const jwt = body && body.jwt;
        const cookieJwt = req && req.signedCookies && req.signedCookies.jwt;
        return res.json({
            jwt: jwt === cookieJwt ? cookieJwt : null,
        });
    }
}
