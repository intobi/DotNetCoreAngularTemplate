import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing-module';
import { LoginComponent } from './login/login.component';
import { LoginPinComponent } from './loginPin/login.pin.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/examples/examples.state';

@NgModule({
  
  imports: [SharedModule, AuthRoutingModule, HttpClientModule,
    // StoreModule.forRoot(reducers)
    
  ],
  declarations: [AuthComponent, LoginComponent,LoginPinComponent,],

})
export class AuthModule {}
