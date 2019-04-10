import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, AppState } from '@app/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'anms-page',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(
    private store: Store<AppState>,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
     
  }
  ngOnInit() {
  }
 
}
