import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { Http, RequestOptions,Headers } from '@angular/http';
//import { AdminProvider } from "../../provider/admin";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
 // providers: [AdminProvider]
})
export class LoginPage {
  public user = "";
  public passwd = "";
  constructor(public navCtrl: NavController
      , public navParams: NavParams
      , public alertCtrl: AlertController
      , public http: Http
      //, public adminProvider: AdminProvider
    ) {

      this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    const userId = localStorage.getItem('userId');
    if (userId != undefined && parseInt(userId) > 0){
      this.navCtrl.setRoot(HomePage)
    }

  }


  login(){
  
    if (this.user == "" || this.passwd  == ""){
      this.showAlert("Atenção","Usuário e senha devem ser informados.")
      return
    }
    


    const URL_TO_FETCH = 'http://192.168.232.1:3100/api/login';
    
    var payload = JSON.stringify({
      login: this.user,
      passwd: this.passwd
    });
    
    var headers = new Headers();
    headers.append("Accept", 'application/json; charset=utf-8');
    headers.append('Content-Type', 'application/json; charset=utf-8' );
    let options = new RequestOptions({ headers: headers });

    
    this.http.post(URL_TO_FETCH, payload,options)
    .subscribe(data => {
       
      const obj = JSON.parse(data['_body'])
      const userId = obj['ret']
      if (userId > 0){

        localStorage.setItem('userId', userId);
        this.navCtrl.setRoot(HomePage)

      }else{
        this.showAlert("Atenção","Usuário ou senha incorretos.")  
        return
      }
      
      console.log(data)
    }, error => {
      this.showAlert("Atenção","Usuário ou senha incorretos.")
      return
    });
/*
    this.adminProvider.login(this.user,this.passwd).subscribe(
      data=>{
          console.log (data);
       
      }, error => {
          console.log(error);
      }
    )*/
     
  }

  callHome(userId){
    this.navCtrl.setRoot(HomePage,{userId})

  }

  showAlert(title,msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
