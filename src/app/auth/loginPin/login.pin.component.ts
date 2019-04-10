import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Validators, FormBuilder, Form } from '@angular/forms';
import { filter, debounceTime, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from '@app/core';


@Component({
  selector: 'anms-login-pin',
  templateUrl: './login.pin.component.html',
  styleUrls: ['../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPinComponent implements OnInit {
        routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
        formValueChanges$: Observable<Form>;
        constructor(
          private fb: FormBuilder,
          private translate: TranslateService,
          private notificationService: NotificationService,
        ) {
        }
        ngOnInit() {
        
        }
      
      }