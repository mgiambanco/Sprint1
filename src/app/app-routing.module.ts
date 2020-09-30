import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: "board", loadChildren: () => import('./board/board.module').then(m => m.BoardModule), canActivate: [AuthGuard] },
  { path: "settings", loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuard] },
  { path: "login", loadChildren: () => import('./login/auth.module').then(m => m.AuthModule) },
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
