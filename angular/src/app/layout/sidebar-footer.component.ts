import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';

@Component({
    templateUrl: './sidebar-footer.component.html',
    selector: 'sidebar-footer',
    styleUrls: [
        './sidebar-footer.component.less'
    ],
    encapsulation: ViewEncapsulation.None
})
export class SideBarFooterComponent extends AppComponentBase {

    versionText: string;
    currentYear: number;
    constructor(
        injector: Injector,
        private _authService: AppAuthService
    ) {
        super(injector);

        this.currentYear = new Date().getFullYear();
        this.versionText = this.appSession.application.version + ' [' + this.appSession.application.releaseDate.format('YYYYDDMM') + ']';
    }
    logout(): void {
        this._authService.logout();
    }
}