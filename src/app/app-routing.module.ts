import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)
  },
  {
    path:'',
    loadChildren:()=>import('./frond-end/frond-end.module').then((m)=>m.FrondEndModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
