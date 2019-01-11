import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EspaciosComunesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espacios-comunes',
  templateUrl: 'espacios-comunes.html',
})
export class EspaciosComunesPage {
  zone : any;
  modeKeys:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.zone = {
      kind: '-Seleccione-'
    }
    this.modeKeys = [
      'Salón de Eventos',
      'Quincho N°1',
      'Quincho N°2',
      'Quincho N°3',
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspaciosComunesPage');
  }

}
