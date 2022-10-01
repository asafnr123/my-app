import { Component, Input } from '@angular/core';
import { concatWith } from 'rxjs';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';  
  messageFromParent: string = "This is from the parent";

  messageFromChild: string = "";

  receiveMessage($event:string) {
    alert(this.messageFromChild = $event);
  }

}

