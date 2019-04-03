import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: User): Promise<User> {
        return this.userService.upsertOne(data);
    }
}
