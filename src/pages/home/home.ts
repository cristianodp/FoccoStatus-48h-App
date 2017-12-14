import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details'
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public status = []

  constructor(public navCtrl: NavController,
              public navParams:NavParams,
              public platform:Platform) {
    this.getStatus();
  }

  ionViewDidLoad() {
    this.getStatus();
  }

  toggleStatus(item){
    const arrow = document.getElementById(`icon_arrow_${item}`)
    const container = document.getElementById(`container_list_${item}`)
    
    if (arrow.className.search("dropdown") > 0) {
      arrow.className = arrow.className.replace("dropdown","dropright")
      container.hidden = true
  
    }else{
      arrow.className = arrow.className.replace("dropright","dropdown")
      container.hidden = false
    }
    
    
  }

  callDetail(item){
    this.navCtrl.push(DetailsPage,{item})

  }

  getStatus(){
   
    this.status =  [{"status":"Pedidos","total":"102","color":"red","id":1,"itens":[{"id":20,"title":"Pendentes","color":"red","total":27},{"id":21,"title":"Faturados","color":"red","total":28},{"id":22,"title":"Expedidos","color":"red","total":40},{"id":23,"title":"Cancelados","color":"red","total":7}]},{"status":"Ordens","total":"102","color":"orange","id":2,"itens":[{"id":20,"title":"Planejadas","color":"red","total":27},{"id":21,"title":"Liberadas","color":"orange","total":28},{"id":22,"title":"Em Producao","total":40},{"id":23,"title":"Finalizadas","color":"orange","total":7}]},{"status":"Cargas","total":"102","color":"rgb(0, 255, 157)","id":3,"itens":[{"id":20,"title":"Pendentes","color":"orange","total":27},{"id":21,"title":"Faturados","color":"orange","total":28},{"id":22,"title":"Expedidos","color":"orange","total":40},{"id":23,"title":"Cancelados","color":"orange","total":7}]}]

  }

  sair(){
    //this.platform.exitApp
    localStorage.setItem('userId', null);
    this.navCtrl.setRoot(LoginPage)
  }

}
