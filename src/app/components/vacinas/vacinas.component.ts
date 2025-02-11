import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../services/vacinas.service';
import { Vacina } from '../../../Vacina';
import { CommonModule } from '@angular/common';
import { VacinaItemComponent } from '../vacina-item/vacina-item.component';
import { AddVacinaComponent } from '../add-vacina/add-vacina.component';
import { FormsModule } from '@angular/forms';

// ✅ Tipo definido FORA da classe
type VacinaComQuantidade = Vacina & { novaQuantidade?: number };

@Component({
  selector: 'app-vacinas',
  standalone: true,
  imports: [CommonModule, VacinaItemComponent, AddVacinaComponent, FormsModule],
  templateUrl: './vacinas.component.html',
  styleUrl: './vacinas.component.css'
})
export class VacinasComponent implements OnInit {

  // ✅ Agora a lista usa o tipo correto
  vacinas: VacinaComQuantidade[] = [];

  constructor(private vacinaService: VacinasService) { }

  ngOnInit(): void {
    this.vacinaService.getVacinas().subscribe((dado) => {
      this.vacinas = dado.map(vacina => ({
        ...vacina,
        novaQuantidade: vacina.quantidade ?? 0 // Se for undefined, define como 0
      }));
    });
  }

  AddVacina(vacina: Vacina) {
    this.vacinaService.addVacina(vacina).subscribe((novaVacina) => {
      this.vacinas.push({ ...novaVacina, novaQuantidade: novaVacina.quantidade ?? 0 });
    });
  }


  deleteVacina(vacina: Vacina) {
    this.vacinaService.deleteVacina(vacina).subscribe(() =>
      (this.vacinas = this.vacinas.filter((v) => v.id !== vacina.id))
    );
  }

  toggleEstoque(vacina: Vacina) {
    vacina.estoque = !vacina.estoque;
    this.vacinaService.updateVacina(vacina).subscribe();
  }

  updateQuantidade(vacina: VacinaComQuantidade, novaQuantidade: number) {
    if (novaQuantidade == null || novaQuantidade <= 0) {
      novaQuantidade = 0; // Previne valores inválidos
    }
  
    const vacinaAtualizada = { ...vacina, quantidade: novaQuantidade, novaQuantidade };
  
    this.vacinaService.updateVacina(vacinaAtualizada).subscribe((vacinaAtualizada) => {
      this.vacinas = this.vacinas.map((v) => 
        v.id === vacinaAtualizada.id ? { ...vacinaAtualizada, novaQuantidade } : v
      );
    });
  }


  validarQuantidade(vacina: VacinaComQuantidade) {
    if (vacina.novaQuantidade == null || vacina.novaQuantidade < 0) {
      vacina.novaQuantidade = 0; // Garante um valor padrão
    }
  }
}

