import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { BeneficiosPage } from "../pages/beneficios/beneficios";
import { TabsPage } from "../pages/tabs/tabs";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  beneficios = BeneficiosPage;
  tab = TabsPage;
  home = HomePage;
  perfil : any;
  nombre : any;
  admin: any;
  residente :any;
  conserje:any;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.nombre = window.localStorage.getItem('Nombre');
    this.perfil = window.localStorage.getItem('idPerfil');

    if (this.perfil =='3') {
      this.residente = this.perfil;
    }
    
    if (this.perfil =='1') {
      this.admin = this.perfil;
    }
    
    if (this.perfil =='2') {
      this.conserje = this.perfil;
    }
  }


  abrirarPagina( pagina: any){

    this.nav.setRoot(pagina);
    this.menuCtrl.close();

  }
}

