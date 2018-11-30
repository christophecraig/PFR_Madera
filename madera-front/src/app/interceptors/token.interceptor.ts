import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
// import { AuthService } from '../service/auth.service'
import { Observable, of } from 'rxjs'
import { Router } from "@angular/router"
import { catchError } from "rxjs/internal/operators"
import { AlertController } from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  defaultErrorMessage: string = 'Une erreur inconnue s\'est produite'

  constructor(
    // public auth: AuthService,
    private router: Router,
    private alertController: AlertController) {}


  /**
   * intercept all XHR request
   * @param request
   * @param next
   * @returns {Observable<A>}
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (localStorage.getItem('jwtToken')) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ` + localStorage.getItem('jwtToken')
    //     }
    //   });
    // }

    /**
     * continues request execution
     */
    return next.handle(request).pipe(catchError((error, caught) => {
      //intercept the respons error and displace it to the console
      console.log(error);
      this.handleError(error);
      return of(error);
    }) as any);
  }


  /**
   * manage errors
   * @param err
   * @returns {any}
   */
  private handleError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 0) {
      console.log('0 http error')
      this.showErrorAlert('no internet')
    } else if(err.status === 401) {
      console.log('401 http error')
      //navigate /delete cookies or whatever
      console.log('handled error ' + err.status);
      // this.router.navigate([`/login`]);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    } else if(err.status === 403) {
      console.log('403 http error')
    }
    throw err;
  }

  async showErrorAlert(cause: String) {
    let currentAlert = await this.alertController.getTop()
    
    if(currentAlert) {
      currentAlert.onWillDismiss().then(async () => {
        await this.showAlert(cause)
      })
    } else {
      await this.showAlert(cause)
    }
  }

  getMessageByCause(cause: String): string {
    let msg = ''
    if(cause === 'no internet') {
      msg = 'La connexion au service MaderApp a échoué. Vérifiez votre connexion et réessayez.'
    } else {
      msg = this.defaultErrorMessage
    }
    return msg
  }

  async showAlert(cause: String): Promise<void> {
    let header = 'Erreur'
    let subHeader = 'Un problème est survenu !'
    let buttons = ['OK']

    let alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: this.getMessageByCause(cause),
      buttons: buttons
    })
    return await alert.present()
  }
}