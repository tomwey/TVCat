import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

  openBanner(banner) {

  }

  autoPlay() {

  }

  bannersData: any = [
    {
      cover: 'assets/imgs/banner1.jpg',
    }
  ];

  sectionsData: any = [
    {
      name: '爱奇艺',
      icon: 'icon_iqiyi.png',
      link: 'http://'
    },
    {
      name: '优酷视频',
      icon: 'icon_youku.jpg',
      link: 'http://'
    },
    {
      name: '腾讯视频',
      icon: 'icon_qqtv.jpg',
      link: 'http://'
    },
    {
      name: '乐视视频',
      icon: 'icon_letv.png',
      link: 'http://'
    },
    {
      name: '芒果TV',
      icon: 'icon_mgtv.png',
      link: 'http://'
    },
    {
      name: 'PPTV',
      icon: 'icon_pptv.png',
      link: 'http://'
    },
  ];

}
