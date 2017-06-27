import { Component, Input } from '@angular/core';
import { Tarefa } from './tarefa';
import { Estoria } from './estoria';

@Component({
    selector: 'tarefa',
    templateUrl: 'app/tarefa.component.html'
})
export class TarefaComponent {
    @Input() tarefa: Tarefa;
    @Input() estoria: Estoria;

    removeTask(): void {
        this.estoria.tarefas = this.estoria.tarefas.filter(tarefa => this.tarefa.id !== tarefa.id);
    }
}