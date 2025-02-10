import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vacina } from '../../../Vacina';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-vacina',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-vacina.component.html',
  styleUrl: './add-vacina.component.css'
})
export class AddVacinaComponent {

  @Output() onAddVacina = new EventEmitter<Vacina>();

  vacina: string = "";
  protecao: string = "";
  estoque: boolean = false;
  quantidade: number = 0; // Corrigido: valor numérico em vez de string
  mostrarAddVacina: boolean = true;


  AlteraVisualizacao(valor: boolean){
    this.mostrarAddVacina = valor;
  }


  onSubmit() {

    if (!this.vacina) {
      alert('Adicione uma Vacina!')
      return;
    }
    //console.log(this.vacina, this.protecao);

    const novaVacina = {
      vacina: this.vacina,
      protecao: this.protecao,
      estoque: this.estoque,
      quantidade: this.quantidade

    }

    this.onAddVacina.emit(novaVacina);

    this.vacina = '';
    this.protecao = '';
    this.estoque = false;
    this.quantidade = 0;
  }
}