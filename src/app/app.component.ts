import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workshop!';
  i = 1;
  foo = true
  constructor(){
    // setInterval(()=>{
    //   this.i++;
    //   this.title = 'angular-workshop!' + this.i
    // },1500)
  }

  pong(e:string){
    console.log(e);
    
  }
}
