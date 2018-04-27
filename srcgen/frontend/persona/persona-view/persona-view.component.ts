import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';
import { Router} from '@angular/router';
import { GlobalsComponent } from '../../globals/globals.component';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-persona',
  templateUrl: './persona-view.component.html',
  styleUrls: []
})
export class PersonaComponent implements OnInit {

  personas: Persona[];
  persona: Persona;

  constructor(private personaService: PersonaService,
      private router: Router, private globals: GlobalsComponent,
      private confirmationService: ConfirmationService) {
      this.globals = globals;
  }

  ngOnInit(): void {
    this.personaService.getPersonas().then(personas => this.personas = personas);
  }

  newPersona(): void {

    this.router.navigate(['/persona/new']).then(() => null);
    this.globals.currentModule = 'Persona';
  }

  editar(persona: Persona): void {
    this.persona = persona;
    this.router.navigate(['/persona/edit', this.persona._id ]);
  }

  borrar(persona: Persona): void {
    this.confirmationService.confirm({
      message: 'Esta seguro que quiere borrar persona?',
      accept: () => {
        this.personaService.delete(persona._id)
          .then(response => this.personaService.getPersonas().then(personas => this.personas = personas));
      }
    });
  }
}