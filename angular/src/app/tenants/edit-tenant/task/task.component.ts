import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
 
  constructor() { }
  activeTabs: string[] = ['TaskBoard'];
  ngOnInit() {
  }

  tabClick(name) {
    if (this.activeTabs.indexOf(name) == -1) {
        this.activeTabs = [];
        this.activeTabs.push(name)
    }
}
}
