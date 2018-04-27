import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Agenda } from '../models/agenda';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AgendaService {

  private serviceURL = 'http://localhost:8081/v1/agenda';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getAgendas(): Promise<Agenda[]> {
    return this.http.get(this.serviceURL)
      .toPromise()
      .then(response => response.json() as Agenda[])
      .catch(this.handleError)

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAgenda(id: string): Promise<Agenda> {
    const url = `${this.serviceURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json()[0] as Agenda)
      .catch(this.handleError);
  }


  update(agenda: Agenda): Promise<Agenda> {
    const url = `${this.serviceURL}/${ agenda._id}`;
    return this.http
      .put(url, JSON.stringify(agenda), {headers: this.headers})
      .toPromise()
      .then(() => agenda)
      .catch(this.handleError);
  }


  create(agenda: Agenda): Promise<Agenda> {
    return this.http
      .post(this.serviceURL, JSON.stringify(agenda), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Agenda)
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