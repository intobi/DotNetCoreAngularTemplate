import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ContentComponent,
                children: [
                    { path: 'blog', component: BlogComponent },
                    { path: 'home', component: HomeComponent },
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class ContentRoutingModule { }
