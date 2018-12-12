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
//   name = 'Angular 6';
//   dataSource = []; 
//   dataSourcec = [];   

//   onAddData() {
//     this.rows.push(new row());
//    this.dataSource.push(this.dataSource.length);
//  }
//  onAddDatad(row) {
//    row.cols.push(new col())
//   this.dataSourcec.push(this.dataSourcec.length);
//   }
 
// }
// export class col {

// }
// export class row {
//   cols:col = [];
private fieldArray: Array<any> = [];
private newAttribute: any = {};

addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}
  dataSourcec = [];   
  onAddDatad() {
  this.dataSourcec.push(this.dataSourcec.length);
  }
}