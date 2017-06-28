import { Component, Input } from '@angular/core';
import { Estoria } from './estoria';
import { EstoriaService } from './estoria.service';

@Component({
    selector: 'estoria',
    templateUrl: 'app/estoria.component.html'
})
export class EstoriaComponent {
    @Input() estoria: Estoria;

    constructor(private estoriaService: EstoriaService) { }

    toggleFinihed(): void {
        this.estoria.finalizada = !this.estoria.finalizada;
        this.estoriaService.alterar(this.estoria).subscribe(estoria => alert("Estória \"" + this.estoria.nome + "\" " + (this.estoria.finalizada ? "finalizada" : "reativada") + " com sucesso."));
    }
}