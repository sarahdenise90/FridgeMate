import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, NavController, List } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { NewItemPage } from '../pages/NewItem/NewItem';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HTTPResponse, HTTP } from '@ionic-native/http'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListService } from '../providers';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    NewItemPage,
    HomePage,
    TabsPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  	HttpClientModule
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
    HTTP,
            {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
