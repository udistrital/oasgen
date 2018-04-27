import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { Agenda } from '../../models/agenda';
import { Router} from '@angular/router';
import { GlobalsComponent } from '../../globals/globals.component';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda-view.component.html',
  styleUrls: []
})
export class AgendaComponent implements OnInit {

  agendas: Agenda[];
  agenda: Agenda;

  constructor(private agendaService: AgendaService,
      private router: Router, private globals: GlobalsComponent,
      private confirmationService: ConfirmationService) {
      this.globals = globals;
  }

  ngOnInit(): void {
    this.agendaService.getAgendas().then(agendas => this.agendas = agendas);
  }

  newAgenda(): void {

    this.router.navigate(['/agenda/new']).then(() => null);
    this.globals.currentModule = 'Agenda';
  }

  editar(agenda: Agenda): void {
    this.agenda = agenda;
    this.router.navigate(['/agenda/edit', this.agenda._id ]);
  }

  borrar(agenda: Agenda): void {
    this.confirmationService.confirm({
      message: 'Esta seguro que quiere borrar agenda?',
      accept: () => {
        this.agendaService.delete(agenda._id)
          .then(response => this.agendaService.getAgendas().then(agendas => this.agendas = agendas));
      }
    });
  }
}