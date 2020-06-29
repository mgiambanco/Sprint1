import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardModule } from './board/board.module';


const routes: Routes = [
  { path: "board", loadChildren: () => import('./board/board.module').then(m => m.BoardModule) },
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: '**', redirectTo: '/board', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
