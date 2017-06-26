"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var estoria_service_1 = require('./estoria.service');
var EstoriaDetalheComponent = (function () {
    function EstoriaDetalheComponent(estoriaService, route, location) {
        this.estoriaService = estoriaService;
        this.route = route;
        this.location = location;
    }
    EstoriaDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.estoriaService.getEstoria(+params['id']); })
            .subscribe(function (estoria) { return _this.estoria = estoria; });
    };
    EstoriaDetalheComponent.prototype.goBack = function () {
        this.location.back();
    };
    EstoriaDetalheComponent = __decorate([
        core_1.Component({
            selector: 'estoria-detalhe',
            templateUrl: 'app/estoria-detalhe.component.html'
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaService, router_1.ActivatedRoute, common_1.Location])
    ], EstoriaDetalheComponent);
    return EstoriaDetalheComponent;
}());
exports.EstoriaDetalheComponent = EstoriaDetalheComponent;
//# sourceMappingURL=estoria-detalhe.component.js.map