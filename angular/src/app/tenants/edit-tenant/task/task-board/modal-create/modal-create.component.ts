import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { TenantServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent implements OnInit {
  ngOnInit(): void {
    
  }

    @ViewChild('createTenantModal') modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;

   
    active: boolean = false;
    saving: boolean = false;
   
  

    

    onShown(): void {
        $.AdminBSB.input.activate($(this.modalContent.nativeElement));
    }

   
    close(): void {
        this.active = false;
        this.modal.hide();
    }
}

