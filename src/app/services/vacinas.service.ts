import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacina } from '../../Vacina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {
  
  //URL da API 
  private apiUrl = 'http://localhost:3000/vacinas';

  constructor(private http: HttpClient) { }

  //Retorna todas as vacinas
  getVacinas(): Observable<Vacina[]> {
    return this.http.get<Vacina[]>(this.apiUrl);
  }
  deleteVacina(vacina: Vacina): Observable<Vacina> {
    return this.http.delete<Vacina>(`${this.apiUrl}/${vacina.id}`);
  }

  updateVacina(vacina: Vacina): Observable<Vacina> {
    return this.http.put<Vacina>(`${this.apiUrl}/${vacina.id}`, vacina);
  }
  addVacina(vacina: Vacina) : Observable<Vacina>{
    return this.http.post<Vacina>(`${this.apiUrl}`, vacina);
  }
}
    

