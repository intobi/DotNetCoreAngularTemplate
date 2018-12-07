import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [BlogComponent, 
    ContentComponent, HomeComponent
  ]
})
export class ContentModule { }
