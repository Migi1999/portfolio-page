import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [

    {path: 'about', component: AboutComponent },
    {path: '', component: HomeComponent },
    {path: 'contact', component: ContactComponent},
    {path: 'more', component: MoreComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
