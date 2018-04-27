import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../models/agenda';
import { AgendaService } from '../../services/agenda.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: []
})
export class AgendaEditComponent implements OnInit {

  agenda: Agenda = new Agenda();
  display = false;
  id: string;
  test = new Date('2016-01-05T09:05:05.035Z');

  constructor(private route: ActivatedRoute, private location: Location, private agendaService: AgendaService) {

  }

  actualizar(agenda: Agenda): void {
    this.agendaService.update(agenda).then(() => this.display = true);
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.agendaService.getAgenda(params['id']))
      .subscribe(agenda => this.agenda = agenda);
  }

  regresar(): void {
    this.location.back();
  }

  cerrarDialogo(): void {
    this.display = false;
    this.location.back();
  }
}