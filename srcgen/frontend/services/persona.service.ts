import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Persona } from '../models/persona';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PersonaService {

  private serviceURL = 'http://localhost:8081/v1/persona';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getPersonas(): Promise<Persona[]> {
    return this.http.get(this.serviceURL)
      .toPromise()
      .then(response => response.json() as Persona[])
      .catch(this.handleError)

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPersona(id: string): Promise<Persona> {
    const url = `${this.serviceURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json()[0] as Persona)
      .catch(this.handleError);
  }


  update(persona: Persona): Promise<Persona> {
    const url = `${this.serviceURL}/${ persona._id}`;
    return this.http
      .put(url, JSON.stringify(persona), {headers: this.headers})
      .toPromise()
      .then(() => persona)
      .catch(this.handleError);
  }


  create(persona: Persona): Promise<Persona> {
    return this.http
      .post(this.serviceURL, JSON.stringify(persona), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Persona)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.serviceURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}