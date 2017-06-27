import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Estoria } from './estoria';
import { Tarefa } from './tarefa';
import { EstoriaService } from './estoria.service';

@Component({
    selector: 'estoria-detalhe',
    templateUrl: 'app/estoria-detalhe.component.html'
})
export class EstoriaDetalheComponent implements OnInit {
    estoria: Estoria;
    tarefa: Tarefa = new Tarefa();
    isEmptyTask: boolean = true;

    constructor(
        private estoriaService: EstoriaService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.estoriaService.getEstoria(+params['id']))
            .subscribe(estoria => this.estoria = estoria);
    }

    save(): void {
        this.estoriaService.alterar(this.estoria)
            .subscribe(estoria => this.goBack());
    }

    addTask(): void {
        this.tarefa.id = this.nextTaskId();
        this.estoria.tarefas.push(this.tarefa);
        this.tarefa = new Tarefa();
        this.isEmptyTask = true;
    }

    private nextTaskId(): number {
        let id = this.estoria.tarefas.length + 1;

        this.estoria.tarefas.forEach(tarefa => {
            if (tarefa.id >= id) {
                id = tarefa.id + 1;
            }
        });

        return id;
    }

    checkEmptyTask(): void {
        this.isEmptyTask = (this.tarefa === null || this.tarefa.descricao === null || this.tarefa.descricao === "");
    }

    goBack(): void {
        this.location.back();
    }
}