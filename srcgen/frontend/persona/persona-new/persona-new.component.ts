import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-persona-new',
  templateUrl: './persona-new.component.html',
  styleUrls: []
})
export class PersonaNewComponent implements OnInit {

  persona: Persona;
  display = false;
  isNaN: Function = Number.isNaN;
  constructor(private personaService: PersonaService, private location: Location) { }

  ngOnInit() {
    this.persona = new Persona();
  }

  guardar(persona: Persona): void {

    this.personaService.create(persona);
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