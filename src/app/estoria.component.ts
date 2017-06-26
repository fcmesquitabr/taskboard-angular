import { Component, Input } from '@angular/core';
import { Estoria } from './estoria';

@Component({
    selector: 'estoria',
    templateUrl: 'app/estoria.component.html'
})
export class EstoriaComponent {
    @Input() estoria: Estoria;
}