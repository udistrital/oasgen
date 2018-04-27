import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../models/agenda';
import { AgendaService } from '../../services/agenda.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-agenda-new',
  templateUrl: './agenda-new.component.html',
  styleUrls: []
})
export class AgendaNewComponent implements OnInit {

  agenda: Agenda;
  display = false;
  isNaN: Function = Number.isNaN;
  constructor(private agendaService: AgendaService, private location: Location) { }

  ngOnInit() {
    this.agenda = new Agenda();
  }

  guardar(agenda: Agenda): void {

    this.agendaService.create(agenda);
    this.display = true;

  }

  isNumber(n){

    if(n){
      if(isNaN(parseInt(n))){
        return false;
      }
      return true;
    }
    return false;
  }


  regresar(): void {
    this.location.back();
  }

  cerrarDialogo(): void {
    this.display = false;
    this.location.back();
  }
}