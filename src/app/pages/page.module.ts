import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [PageComponent, TestComponent],
  imports: [SharedModule, PageRoutingModule]
})
export class PageModule {}
