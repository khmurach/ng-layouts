import { NotfoundComponent } from './notfound/notfound.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // app routes
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  // auth routes
  {
    path: 'auth',
    component: BlankLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  // 404
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
