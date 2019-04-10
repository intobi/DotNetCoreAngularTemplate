import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Validators, FormBuilder, Form } from '@angular/forms';
import { Store, select, State } from '@ngrx/store';
import { filter, debounceTime, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from '@app/core';


import { ActionFormUpdate, ActionFormReset } from '../form.actions';
import { selectFormState } from '../form.selectors';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'anms-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
        routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
        form = this.fb.group({
          autosave: false,
          username: ['', [Validators.required]],
          password: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          description: [
            '',
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(1000)
            ]
          ],
          requestGift: [''],
          birthday: ['', [Validators.required]],
          rating: [0, Validators.required]
        });
      
        formValueChanges$: Observable<Form>;
        key: string;
        param2: string;
        loginform: boolean = true;
        constructor(
          private fb: FormBuilder,
          private translate: TranslateService,
          private notificationService: NotificationService,
          private route: ActivatedRoute
          
        ) {
            if ( this.route.snapshot.queryParamMap.get('RTR') != null) {
                console.log('true');
                this.loginform = false; 
                this.key = this.route.snapshot.queryParamMap.get('RTR');
            } else {
                console.log('false');
            }
        }
        ngOnInit() {
          this.formValueChanges$ = this.form.valueChanges.pipe(
            debounceTime(500),
          );
        }
        submit() {
         
      
        }
      }