import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PruebasComponent } from "./pages/pruebas/pruebas.component";


const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "home", component: HomeComponent, pathMatch: "full" },
    { path: "pruebas", component: PruebasComponent, pathMatch: "full" },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
