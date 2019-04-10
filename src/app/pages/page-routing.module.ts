import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { TestComponent } from './test/test.component';
import { AuthGuardService } from '@app/core';


@NgModule({
  imports: [
      RouterModule.forChild([
          {
              path: 'page',
              component: PageComponent,
              children: [
                  { path: 'home', component: TestComponent, canActivate: [AuthGuardService] },
              ]
          }
      ])
  ],
  exports: [RouterModule]
})
export class PageRoutingModule {}
