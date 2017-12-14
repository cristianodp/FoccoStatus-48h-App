import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  
  
  public details = {
    id:0,
    title:"",
    subtitle:"",
    color:"",
    total:0,
    list:[]}
    
  private itemId

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.itemId= 1;
    this.getList();
    
  }

  getList(){

    this.details = {
      id:20,
      title:"Pendentes",
      subtitle:"Alguma coisa",
      color:"red",
      total:27,
      list:[{
        id: 56,
        title: "João da Silva",
        subtitle: 100027,
        color:"red",
        total:500.35},
        { id: 58,
          title: "Rodrigo da Silva",
          subtitle: 100028,
          color:"red",
          total:500.35},
        { id: 59,
            title: "Maria",
            subtitle: 100025,
            color:"red",
            total:5005.35},
        ]}

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    
  }

}
