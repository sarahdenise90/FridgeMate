import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { NewItemPage } from '../pages/NewItem/NewItem';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ListService} from '../providers';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    NewItemPage,
    HomePage,
    TabsPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    NewItemPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
