import { Component } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { ItemsListComponent } from '../items/items-list/items-list.component'  ;
import { ConsentListPage } from '../consents/consent-list/consent-list'  ;
import { SpeakerListPage } from '../speaker-list/speaker-list';




@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  
  tab5Root: any = ConsentListPage;
  tab6Root: any = ItemsListComponent;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
