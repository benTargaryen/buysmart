import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import services
import {CategoryService} from '../services/category-service';
import {ItemService} from '../services/item-service';
import {UserService} from '../services/user-service';
import {StoreService} from '../services/store-service';
import {CartService} from '../services/cart-service';
import {OrderService} from '../services/order-service';
import {NewsService} from '../services/news-service';
// end import services
// end import services

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// import pages
import {CartPage} from '../pages/cart/cart';
import {CategoriesPage} from '../pages/categories/categories';
import {CategoryPage} from '../pages/category/category';
import {ChangePasswordPage} from '../pages/change-password/change-password';
import {CurrencyConverterPage} from '../pages/currency-converter/currency-converter';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {GeoPage} from '../pages/geolocation/geo'
import {HomePage} from '../pages/home/home';
import {ItemPage} from '../pages/item/item';
import {LoginPage} from '../pages/login/login';
import {ModalFilterPage} from '../pages/modal-filter/modal-filter';
import {ModalItemOptionPage} from '../pages/modal-item-option/modal-item-option';
import {MyAccountPage} from '../pages/my-account/my-account';
import {MyOrderPage} from '../pages/my-order/my-order';
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm';
import {RegisterPage} from '../pages/register/register';
import {SearchPage} from '../pages/search/search';
import {SettingsPage} from '../pages/settings/settings';
import {StorePage} from '../pages/store/store';
import {TabAttributePage} from '../pages/tab-attribute/tab-attribute';
import {TabFilterPage} from '../pages/tab-filter/tab-filter';
import {WelcomePage} from '../pages/welcome/welcome';
import {WishListPage} from '../pages/wish-list/wish-list';
import { AuthService } from '../services/auth.service';
import { Geolocation } from '@ionic-native/geolocation';
// end import pages

var firebaseConfig = {
  apiKey: "AIzaSyAEgLtZpGzUCfY9lq8-joTl9VHS3FVO3vg",
  authDomain: "bin4ry-81521.firebaseapp.com",
  databaseURL: "https://bin4ry-81521.firebaseio.com",
  projectId: "bin4ry-81521",
  storageBucket: "bin4ry-81521.appspot.com",
  messagingSenderId: "17455940365"
};

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    HomePage,
    ItemPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage,
    GeoPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    HomePage,
    ItemPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage,
    GeoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    ItemService,
    UserService,
    StoreService,
    CartService,
    OrderService,
    NewsService,
    AngularFireAuth,
    AuthService,
    Geolocation
    /* import services */
  ]
})
export class AppModule {
}
