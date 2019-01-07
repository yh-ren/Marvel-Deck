import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { CharactersPage } from '../pages/characters/characters';
import { CharacterPage } from '../pages/character/character';
import { ComicsPage } from '../pages/comics/comics';
import { ComicPage } from '../pages/comic/comic';

import { HttpModule } from '@angular/http'

import { DataService } from '../services/data'


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    CharactersPage,
    CharacterPage,
    ComicsPage,
    ComicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    CharactersPage,
    CharacterPage,
    ComicsPage,
    ComicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
