import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Estoria } from './estoria';
import { EstoriaService } from './estoria.service';

@Component({
    selector: 'estoria-detalhe',
    templateUrl: 'app/estoria-detalhe.component.html'
})
export class EstoriaDetalheComponent implements OnInit {
    estoria: Estoria;

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

    goBack(): void {
        this.location.back();
    }
}