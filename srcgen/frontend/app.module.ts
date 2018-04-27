import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgendaComponent } from './agenda/agenda-view/agenda-view.component';
import { AgendaNewComponent } from './agenda/agenda-new/agenda-new.component';
import { AgendaEditComponent } from './agenda/agenda-edit/agenda-edit.component';
import { AgendaService } from './services/agenda.service';
import { PersonaComponent } from './persona/persona-view/persona-view.component';
import { PersonaNewComponent } from './persona/persona-new/persona-new.component';
import { PersonaEditComponent } from './persona/persona-edit/persona-edit.component';
import { PersonaService } from './services/persona.service';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PieComponent } from './pie/pie.component';
import { MigaComponent } from './miga/miga.component';

import { FormsModule } from '@angular/forms'; // Needed to use ngmodel
import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';


// Primeng Modules
import { ButtonModule} from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalsComponent } from './globals/globals.component';


import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

// Others
import { DatePickerModule } from 'bizoru-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavegacionComponent,
    ContenidoComponent,
    PieComponent,
    MigaComponent,
    AgendaComponent,
    AgendaNewComponent,
    AgendaEditComponent,
    PersonaComponent,
    PersonaNewComponent,
    PersonaEditComponent,
    ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    FormsModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DialogModule,
    DatePickerModule
  ],
  providers: [
  GlobalsComponent,
  ConfirmationService,
  AgendaService,
  PersonaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }