import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { TabsPage } from "../tabs/tabs";
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';

/**
 
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rut: AbstractControl;
  loginForm: FormGroup;
  condoro = ''; 
  usuario : any;
  nombre: any;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private menuCtrl:MenuController,
              private auth:AuthProvider,
              public toastCtrl: ToastController,) {

    this.loginForm = formBuilder.group({
      rut:['',Validators.compose([Validators.required])]
    })              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }

  onSubmit(value:any){
    if(this.loginForm.valid) {
      
      

      this.auth.validarUsuario(value.rut)
        //.pipe(first())
        .subscribe(data =>{
          this.usuario = data;
          this.navCtrl.setRoot(TabsPage);
          this.nombre = this.usuario[0].nombre;
          window.localStorage.setItem('idPerfil', this.usuario[0].idPerfil);
          window.localStorage.setItem('Nombre', this.nombre);
          console.log(this.usuario);
        },
        error =>{
          this.condoro = error.error;
          //alert(this.condoro);
          this.showToast(this.condoro);
        });

    }
  }

  showToast(error: string){
    let toast = this.toastCtrl.create({
      message:error,
      duration:2000,
      position:'middle'
    });

    toast.present(toast);
  }

  

}