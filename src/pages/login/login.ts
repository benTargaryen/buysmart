import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {ForgotPasswordPage} from "../forgot-password/forgot-password";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string
  public password: string;
  public message:string = "welcome";
  constructor(public nav: NavController, private auth: AuthService, private toastCtrl:ToastController ) {
  }


  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }


  // go to register page
  register() {
    this.nav.push(RegisterPage);
  }

  // go to home page
  login() {
		
    //this.presentToast("User not found please try again")
		let credentials = {
			email: this.email,
			password: this.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.nav.setRoot(HomePage),
				error => this.message = "User not found please try again"
      );
      
      this.presentToast(this.message);
	}
  
  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }
}
