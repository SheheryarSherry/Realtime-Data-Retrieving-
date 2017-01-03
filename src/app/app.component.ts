import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  StatusList:FirebaseListObservable<any[]>;
  newStatus:string='';
  constructor(af:AngularFire){

this.StatusList=af.database.list('/items');
  }
  add(){
    this.StatusList.push(this.newStatus);
    this.newStatus='';
 
 }
  
}
