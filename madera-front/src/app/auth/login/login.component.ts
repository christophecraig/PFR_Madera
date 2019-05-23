import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalStorage, SharedStorage } from 'ngx-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @LocalStorage() @SharedStorage()
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

  async login() {
    this.isLoggedIn = true;
    await this.router.navigate(['/']);
  }

  logout() {
    this.authService.logout();
  }

}
