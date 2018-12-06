import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
    
    templateUrl: './topbar.component.html',
    selector: 'top-bar',
    styleUrls: [
        './topbar.component.less'
    ],
    encapsulation: ViewEncapsulation.None,
    animations: [appModuleAnimation()]
})
export class TopBarComponent extends AppComponentBase {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }
}