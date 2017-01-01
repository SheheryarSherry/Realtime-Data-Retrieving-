import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
const firebaseConfig = {
 apiKey: "AIzaSyAxik2SYOYkTyq5dOqK0x2Aq9J9tPUReic",
    authDomain: "list-fetch.firebaseapp.com",
    databaseURL: "https://list-fetch.firebaseio.com",
    storageBucket: "list-fetch.appspot.com",
    messagingSenderId: "646108505042"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
