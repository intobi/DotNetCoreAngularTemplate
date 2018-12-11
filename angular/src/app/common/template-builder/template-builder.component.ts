import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateTenantComponent } from '@app/tenants/create-tenant/create-tenant.component';

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.less']
})
export class TemplateBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('createTenantModal') createTenantModal: CreateTenantComponent;
  
  createTenant(): void {
         
          this.createTenantModal.show();
      }
}
