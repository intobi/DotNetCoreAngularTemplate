import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { TenantServiceProxy, TenantDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-tenant-modal',
  templateUrl: './edit-tenant.component.html',
  styleUrls: [
      './edit-tenant.component.less'
  ]
})
export class EditTenantComponent extends AppComponentBase{
  

    @ViewChild('editTenantModal') modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;
    @ViewChild('content') content: ElementRef;
    activeTabs: string[] = ['TestOne'];
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    active: boolean = false;
    saving: boolean = false;
    tenant: TenantDto = null;
    id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    constructor(
        injector: Injector,
        private _tenantService: TenantServiceProxy,
        private route: ActivatedRoute
    ) {
        super(injector);
        this._tenantService.get(this.id)
        .subscribe((result: TenantDto)=>{
            this.tenant = result;
        });

    
    }
    onShown(): void {
        $.AdminBSB.input.activate($(this.modalContent.nativeElement));
    }

    save(): void {
        this.saving = true;
        this._tenantService.update(this.tenant)
            .pipe(finalize(() => { this.saving = false; }))
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(null);
            });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }


  
    
  
  
    

    
  
  
    
    tabClick(name) {
        if (this.activeTabs.indexOf(name) == -1) {
            this.activeTabs = [];
            this.activeTabs.push(name)
        }
    }
  }
    

// show(id:number): void {
	// 	this._tenantService.get(id)
	// 	    .pipe(finalize(() => {
	// 	        this.active = true;
	// 	        this.modal.show();
	// 	    }))
	// 		.subscribe((result: TenantDto)=>{
	// 			this.tenant = result;
	// 		});
    // }