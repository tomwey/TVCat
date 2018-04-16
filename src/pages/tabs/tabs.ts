import { Component } from '@angular/core';
// import { HomePage } from '../home/home';
import { MediaPage } from '../media/media';
import { ExplorePage } from '../explore/explore';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MediaPage;
  // tab2Root = NearbyPage;
  tab2Root = ExplorePage;
  // tab3Root = CardPage;
  tab3Root = SettingPage;

  // cardBadges: string = "";

  constructor() {

  }
}
