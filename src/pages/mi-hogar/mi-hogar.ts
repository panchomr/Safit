import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the MiHogarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-hogar',
  templateUrl: 'mi-hogar.html',
})
export class MiHogarPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiHogarPage');
  }

  private createMyForm(){
    return this.formBuilder.group({
      name: ['Global Baion Soporte', Validators.required],
      precio: ['$15.000', Validators.required],
      email: ['soporte.globalbaion@gmail.com', Validators.required],
      fechaSolicitud: ["05-11-2018", Validators.required],
      estado:['Solicitud Cliente',Validators.required],
      habilidad:['Reparación de cerraduras o cerrojo', Validators.required]
      
    });
  }

  onSubmit(value:any){
    if (this.myForm.valid) {
      console.log(value);
      
    }
  }

}
