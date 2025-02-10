import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vacina } from '../../../Vacina';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacina-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './vacina-item.component.html',
  styleUrl: './vacina-item.component.css'
})

export class VacinaItemComponent {
  @Input() vacina!:Vacina;
  @Output() onDeleteVacina = new EventEmitter<Vacina>();
  @Output() onToggleEstoque = new EventEmitter<Vacina>();
  
  faTrash = faTrash
    
  onDelete(vacina: Vacina){
    this.onDeleteVacina.emit(vacina);
  }
  
  onToggle(vacina: Vacina){
    this.onToggleEstoque.emit(vacina);
  }
}

