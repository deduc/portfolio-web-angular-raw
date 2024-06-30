import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { HomeModule } from './home/home.module';

// componentes
import { PruebasModule } from './pruebas/pruebas.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserModule,
        HomeModule,
        PruebasModule,
    ]
})
export class PagesModule { }
