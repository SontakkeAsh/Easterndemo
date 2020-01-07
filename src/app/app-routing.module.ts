import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './employees/add/add.component';
import { EditComponent } from './employees/edit/edit.component';

const routes: Routes = [
    // {path: '', component: HomeComponent},
    // {path: '**', redirectTo: '/home', pathMatch: 'full'},

    { path: '', redirectTo: '/employee', pathMatch: 'full' },
    { path: 'employee', component: EmployeesComponent, children: [
      { path: 'add', component: AddComponent },
      { path: ':id/edit', component: EditComponent }
    ]
  },
    {path: 'home', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
