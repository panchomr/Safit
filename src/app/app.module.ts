import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { BeneficiosPage } from "../pages/beneficios/beneficios";
import { TabsPage } from "../pages/tabs/tabs";
import { RegistroPage } from '../pages/registro/registro';
import { MiHogarPage } from '../pages/mi-hogar/mi-hogar';
import { SeguridadPage } from '../pages/seguridad/seguridad';
import { EspaciosComunesPage } from '../pages/espacios-comunes/espacios-comunes';
import { GastosComunesPage } from "../pages/gastos-comunes/gastos-comunes";

// Providers
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BeneficiosPage,
    TabsPage,
    RegistroPage,
    MiHogarPage,
    SeguridadPage,
    EspaciosComunesPage,
    GastosComunesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BeneficiosPage,
    TabsPage,
    RegistroPage,
    MiHogarPage,
    SeguridadPage,
    EspaciosComunesPage,
    GastosComunesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
