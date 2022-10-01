import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }
  @Input() childMessage:string = "";
  
  message: string = "Button Clicked";
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
  
}
