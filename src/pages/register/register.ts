import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
import { AuthService } from '../../services/auth.service';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  email:string;
  password: string;
  firstname: string;
  lastname: string;
  message: string = "";

  constructor(public nav: NavController, private auth: AuthService, private toastCtrl: ToastController) {
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  // go to home page
  register() {
     let credentials = {
			email: this.email,
      password: this.password,
      lastname: this.lastname,
			firstname: this.firstname
		};
		this.auth.signUp(credentials).then(
			() => this.nav.setRoot(HomePage),
			error => this.message = "User not found please try again"
    );
    
    this.presentToast(this.message);
    this.auth.getLoggedInUser();
  }
}
