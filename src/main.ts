import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { ListaEstoriaComponent } from './app/lista-estoria.component';

/*
const appRoutes: Routes = [
    {path: '', redirectTo:'estorias', pathMatch:'full'},
    {path: 'estorias', component: ListaEstoriaComponent},
    ];*/
@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [ AppComponent, ListaEstoriaComponent ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);