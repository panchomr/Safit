import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { BeneficiosPage } from "../pages/beneficios/beneficios";
import { TabsPage } from "../pages/tabs/tabs";
import { RegistroPage } from '../pages/registro/registro';
import { MiHogarPage } from '../pages/mi-hogar/mi-hogar';
import { SeguridadPage } from '../pages/seguridad/seguridad';
import { EspaciosComunesPage } from '../pages/espacios-comunes/espacios-comunes';
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
  admin: Boolean=false;
  residente :Boolean=false;
  conserje:Boolean=false;
  pages :any[]=[];

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.nombre = window.localStorage.getItem('Nombre');
    this.perfil = window.localStorage.getItem('idPerfil');

    if (this.perfil =='3') {
      this.residente = true;
    }
    
    if (this.perfil =='1') {
      this.admin = true;
    }
    
    if (this.perfil =='2') {
      this.conserje = true;
    }
    this.pages =[
      {title:'Menú Principal', component:HomePage,visible:true},
      {title:'Mi Perfil', component:RegistroPage,visible:true},
      {title:'Mi Hogar', component:MiHogarPage,visible:this.residente},
      {title:'Seguridad', component:SeguridadPage,visible:this.residente || this.conserje},
      {title:'Espacios Comunes', component:EspaciosComunesPage,visible:true},
      {title:'Beneficios y Descuentos', component:BeneficiosPage,visible:this.residente},
    ];
    
    window.localStorage.clear();
  
  }

 
  abrirarPagina( pagina: any){

    this.nav.setRoot(pagina.component);
    this.menuCtrl.close();

  }
}

