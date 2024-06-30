import { Component, OnInit } from '@angular/core';
import { PruebasService } from './pruebas.service';


@Component({
    selector: 'app-pruebas',
    templateUrl: './pruebas.component.html',
    styleUrls: ['./pruebas.component.css'],
})
export class PruebasComponent implements OnInit {
    public listaObjetos: any[] = [{ name: "lala" }];

    constructor(private pruebasService: PruebasService) {
        // Llamar a getData para obtener los datos iniciales
        this.pruebasService.getData().subscribe(() => { });
    }

    ngOnInit() {
        this.pruebasService.listaObjetos$.subscribe(
            (objetos: any[]) => {
                this.listaObjetos = objetos;
                console.log(this.listaObjetos);
            }
        )
    }

}
