import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, AppState } from '@app/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { ActionSettingsChangeLanguage, selectSettingsLanguage } from '@app/settings';
import { Observable,  } from 'rxjs';
import { Rater, Error} from './rater.model';
import { RaterSrvice } from './rater.service';


@Component({
  selector: 'anms-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  language$: Observable<string>;
  rtr: string;
  rater: Rater = new Rater();
  errors: Error[] = [];
  loginform: boolean = true;

  
  
  constructor(
    // private store: Store<AppState>,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private raterService: RaterSrvice,
  ) 
  {  
    if ( this.route.snapshot.queryParamMap.get('RTR') != null) {
      console.log('true');
      this.loginform = false; 
      this.rtr = this.route.snapshot.queryParamMap.get('RTR')  
      this.getRtr()

  } else {
      console.log('false');
  }

  }
 
  ngOnInit() {
    // this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }
  getRtr(): void {
   this.raterService.getRater(this.rtr)
    .subscribe(resp => {
      console.log(resp)
        this.rater = resp.Rater[0];
        this.errors = resp.Errors;
        localStorage.setItem('RATER_ITEMS', JSON.stringify(resp));
        console.log(this.rater);
    }
    )
   }

  // onLanguageSelect({ value: language,  }) {
  //   this.store.dispatch(new ActionSettingsChangeLanguage({language}));
  // }
  
}
