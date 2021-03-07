import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [
  {path:'',component:PostlistComponent},
  {path:'details/:id',component:PostdetailComponent},
  {path:'**',component:PostlistComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
