import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, 
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

  openBanner(banner) {

  }

  autoPlay() {

  }

  forwardTo(section) {
    this.app.getRootNavs()[0].push('BrowserPage', {
      title: `${section.name}VIP`,
      url: section.link,
    });
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
      link: 'http://m.iqiyi.com/dianying/'
    },
    {
      name: '优酷视频',
      icon: 'icon_youku.jpg',
      link: 'http://movie.youku.com/?spm=a2htv.20009910.mheader_navbox.1~3!5~A'
    },
    {
      name: '腾讯视频',
      icon: 'icon_qqtv.jpg',
      link: 'http://film.qq.com/weixin/all.html'
    },
    {
      name: '乐视视频',
      icon: 'icon_letv.png',
      link: 'http://m.le.com/movie/'
    },
    {
      name: '芒果TV',
      icon: 'icon_mgtv.png',
      link: 'https://m.mgtv.com/channel/show/'
    },
    {
      name: 'PPTV',
      icon: 'icon_pptv.png',
      link: 'http://m.pptv.com/?location=m_channel_tv'
    },
  ];

}
