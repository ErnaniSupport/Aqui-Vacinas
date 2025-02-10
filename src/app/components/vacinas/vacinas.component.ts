import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../services/vacinas.service';
import { Vacina } from '../../../Vacina';
import { CommonModule } from '@angular/common';
import { VacinaItemComponent } from '../vacina-item/vacina-item.component';
import { AddVacinaComponent } from '../add-vacina/add-vacina.component';

@Component({
  selector: 'app-vacinas',
  standalone: true,
  imports: [CommonModule, VacinaItemComponent, AddVacinaComponent],
  templateUrl: './vacinas.component.html',
  styleUrl: './vacinas.component.css'
})
export class VacinasComponent implements OnInit {

  // Lista de Vacinas (Tarefas)
  vacinas: Vacina[] = [];
  

  constructor(private vacinaService: VacinasService) { }

  ngOnInit(): void {

    this.vacinaService.getVacinas().subscribe((dado) => {
      this.vacinas = dado;
      console.log(dado);
    });
  }

  AddVacina(vacina: Vacina){
    this.vacinaService.addVacina(vacina).subscribe((vacina) => {
      this.vacinas.push(vacina);
    });
  }
  
    
  deleteVacina(vacina: Vacina) {
    this.vacinaService.deleteVacina(vacina).subscribe(() =>
      (this.vacinas = this.vacinas.filter((v) => v.id !== vacina.id)));
  }

  toggleEstoque(vacina: Vacina) {
    vacina.estoque = !vacina.estoque;
    this.vacinaService.updateVacina(vacina).subscribe();
  }

}
