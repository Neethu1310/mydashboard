import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
 
  }
  //userdefined event(toggle)
  //child to parent communication
  @Output() toggle=new EventEmitter();

  menuiconclicked(){
   this.toggle.emit()
  }
}

