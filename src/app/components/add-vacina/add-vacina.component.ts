import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vacina } from '../../../Vacina';

@Component({
  selector: 'app-add-vacina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-vacina.component.html',
  styleUrl: './add-vacina.component.css'
})
export class AddVacinaComponent {

  @Output() onAddVacina = new EventEmitter<Vacina>();

  vacina: string = "";
  protecao: string = "";


  onSubmit() {

    if (!this.vacina) {
      alert('Adicione uma Vacina!')
      return;
    }
    //console.log(this.vacina, this.protecao);

    const novaVacina = {
      vacina: this.vacina,
      protecao: this.protecao,
    }

    //this.onAddVacina.emit(novaVacina);

    this.vacina = '';
    this.protecao = '';

  }
}