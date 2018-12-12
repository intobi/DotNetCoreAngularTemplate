import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from '@app/home/home.component';
import { UsersComponent } from '@app/users/users.component';
import { CreateUserComponent } from '@app/users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleComponent } from '@app/roles/create-role/create-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantComponent } from './tenants/create-tenant/create-tenant.component';
import { EditTenantComponent } from './tenants/edit-tenant/edit-tenant.component';
import { TopBarComponent } from '@app/layout/topbar.component';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';
import { SideBarUserAreaComponent } from '@app/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@app/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@app/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@app/layout/right-sidebar.component';
import { TenantsListComponent } from './tenants/tenants-list/tenants-list.component';
import { TenantsSettingComponent } from './tenants/tenants-setting/tenants-setting.component';
import { SecurityComponent } from './tenants/edit-tenant/security/security.component';
import { TaskComponent } from './tenants/edit-tenant/task/task.component';
import { InfoComponent } from './tenants/edit-tenant/info/info.component';
import { ProjectControlComponent } from './tenants/edit-tenant/security/project-control/project-control.component';
import { TaskControlComponent } from './tenants/edit-tenant/security/task-control/task-control.component';
import { GlobalControlComponent } from './tenants/edit-tenant/security/global-control/global-control.component';
import { TaskEditorComponent } from './tenants/edit-tenant/task/task-editor/task-editor.component';
import { TaskBoardComponent } from './tenants/edit-tenant/task/task-board/task-board.component';
import { TemplateBuilderComponent } from './common/template-builder/template-builder.component';
import { TemplatePreviewComponent } from './common/template-builder/template-preview/template-preview.component';
import { ButtonTbcComponent } from './common/template-builder/components/button-tbc/button-tbc.component';
import { ImageTbcComponent } from './common/template-builder/components/image-tbc/image-tbc.component';
import { TextTbcComponent } from './common/template-builder/components/text-tbc/text-tbc.component';
import { VideoTbcComponent } from './common/template-builder/components/video-tbc/video-tbc.component';
import { ModalCreateComponent } from './tenants/edit-tenant/task/task-board/modal-create/modal-create.component';
import { TaskLogsComponent } from './tenants/edit-tenant/task/task-logs/task-logs.component';









@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TenantsComponent,
		CreateTenantComponent,
		EditTenantComponent,
        UsersComponent,
		CreateUserComponent,
		EditUserComponent,
      	RolesComponent,        
		CreateRoleComponent,
		EditRoleComponent,
        TopBarComponent,
        TopBarLanguageSwitchComponent,
        SideBarUserAreaComponent,
        SideBarNavComponent,
        SideBarFooterComponent,
        RightSideBarComponent,
        TenantsListComponent,
        TenantsSettingComponent,
        SecurityComponent,
        TaskComponent,
        InfoComponent,
        ProjectControlComponent,
        TaskControlComponent,
        GlobalControlComponent,

        TaskLogsComponent,
        TaskEditorComponent,
        TaskBoardComponent,
        TemplateBuilderComponent,
        TemplatePreviewComponent,
        ButtonTbcComponent,
        ImageTbcComponent,
        TextTbcComponent,
        VideoTbcComponent,
        ModalCreateComponent,
    
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        JsonpModule,
        ModalModule.forRoot(),
        AbpModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
      
    ],
    providers: [

    ]
})
export class AppModule { }
