import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 


    @ViewChild('content') content: ElementRef;

    
    activeTabs: string[] = ['TenantsList'];

    
    ngOnInit(): void {
     
    }
    


    
    tabClick(name) {
        if (this.activeTabs.indexOf(name) == -1) {
            this.activeTabs = [];
            this.activeTabs.push(name)
        }
    }
    
}
