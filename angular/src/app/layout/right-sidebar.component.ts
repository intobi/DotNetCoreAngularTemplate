import { Component, Injector, ViewEncapsulation, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { ConfigurationServiceProxy, ChangeUiThemeInput } from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './right-sidebar.component.html',
    selector: 'right-sidebar',
    encapsulation: ViewEncapsulation.None
})
export class RightSideBarComponent extends AppComponentBase implements OnInit {
    constructor(
        injector: Injector,
        private _configurationService: ConfigurationServiceProxy
    ) {
        super(injector);
    }

    ngOnInit(): void {
     
    }
}
   

