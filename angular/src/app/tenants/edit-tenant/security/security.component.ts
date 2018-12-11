import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.less']
})
export class SecurityComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
 
  constructor() { }
  activeTabs: string[] = ['TaskControl'];
  ngOnInit() {
    console.log(this.activeTabs);
  
  }

  tabClick(name) {
    if (this.activeTabs.indexOf(name) == -1) {
        this.activeTabs = [];
        this.activeTabs.push(name)
    console.log(this.activeTabs);

    }
}
}
