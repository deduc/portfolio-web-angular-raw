import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ConocimientosBackendComponent } from './components/conocimientos-backend/conocimientos-backend.component';
import { ConocimientosFrontendComponent } from './components/conocimientos-frontend/conocimientos-frontend.component';
import { ConocimientosOtrosComponent } from './components/conocimientos-otros/conocimientos-otros.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { HomeComponent } from './home.component';
import { ImagenYContactosComponent } from './components/imagen-y-contactos/imagen-y-contactos.component';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos.component';
import { MisTecnologiasComponent } from './components/mis-tecnologias/mis-tecnologias.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';


@NgModule({
    declarations: [
        ConocimientosBackendComponent,
        ConocimientosFrontendComponent,
        ConocimientosOtrosComponent,
        EstudiosComponent,
        ExperienciaLaboralComponent,
        HomeComponent,
        ImagenYContactosComponent,
        MisProyectosComponent,
        MisTecnologiasComponent,
        SobreMiComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
