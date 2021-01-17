import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component'
import { TodosComponent } from './todos/todos.component'

const routes: Routes = [
  {
    path: 'session',
    component: SessionComponent
  },
  {
    path: 'todo',
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
