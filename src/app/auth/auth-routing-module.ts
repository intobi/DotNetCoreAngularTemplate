import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '@app/core';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    data: { title: 'auth' },
    // canActivate: [AuthGuardService],
    children: [
        { path: 'login', component: LoginComponent,
        pathMatch: 'full',
    },
    // {
    //     path: '**',
    //     redirectTo: 'login'
    //   }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
