import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{myname}}
            </h2>

            <h2>
              <input [(ngModel)]="name" type="text">
              {{name}}
            </h2>

            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)"> LOG </button>
            
            <h2>
            <button (click)="onClick()">Greet </button>
            <button (click) = "greetings = 'welcome Quadri'"> Greet </button>
            {{greetings}}
            </h2>

           
            <h2>{{myname.length}}</h2>
            <h2>{{greetUser()}}</h2>
            <input [id]="myId" type= "text" value = "Quadri">
            <input [disabled]="isDisabled" id="{{myId}}" type= "text" value = "Quadri">

            


            <h2 class ="text-success"> QUADRI </h2>
            <h2 [class]="successClass"> AYOMIIDEY </h2>
            <h2 [class.text-danger] = "hasError"> ERROR!!!</h2>

            <h2 [ngClass]="messageClass">HelloWorld</h2>
            <h2 [style.color] = "'orange'"> Style Binding</h2>
            <h2 [style.color] = "hasError ? 'red' : 'green'"> Style Binding</h2>
            <h2 [style.color]= "highlightColor"> Style Binding 2 </h2>
            <h2 [ngStyle] = "titleStyles"> Style Binding 3  </h2>

            
            `, 

            
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    `]
})
export class TestComponent implements OnInit {

    public myname = "Quadri";
    public myId = "TestId";
    public isDisabled = true;
    public successClass = "text-success";
    public hasError = true;
    public isSpecial = true;
    public highlightColor = "brown"
    public messageClass = {
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special": this.isSpecial
    }
    public titleStyles = {
      color: "blue",
      fontStyle: "italic"
    }
    public greetings ="";
    public name = "";
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " + this.myname;
  }
  onClick(){
    console.log("welcome to code evolution")
    this.greetings = "Welcome to this site"
  }
  logMessage(value){
    console.log(value)
  }
}
 