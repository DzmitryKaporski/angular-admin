import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './layouts/login/login.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "admin",
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    loadChildren: () => import("./layouts/admin/admin.module").then((m) => m.AdminModule)
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
