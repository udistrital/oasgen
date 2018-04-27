import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from '../agenda/agenda-view/agenda-view.component';
import { AgendaNewComponent } from '../agenda/agenda-new/agenda-new.component';
import { AgendaEditComponent } from '../agenda/agenda-edit/agenda-edit.component';
import { PersonaComponent } from '../persona/persona-view/persona-view.component';
import { PersonaNewComponent } from '../persona/persona-new/persona-new.component';
import { PersonaEditComponent } from '../persona/persona-edit/persona-edit.component';

const routes: Routes = [
  { path: 'agenda', component: AgendaComponent },
  { path: 'agenda/new', component: AgendaNewComponent },
  { path: 'agenda/edit/:id', component: AgendaEditComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'persona/new', component: PersonaNewComponent },
  { path: 'persona/edit/:id', component: PersonaEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }