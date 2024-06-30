import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PruebasService {
    private listaObjetos = new BehaviorSubject<any[]>([]);
    public listaObjetos$ = this.listaObjetos.asObservable();

    private apiUrl: string = "https://rickandmortyapi.com/api/character";

    constructor(private httpClient: HttpClient) {}

    public getData(): Observable<any> {
        return this.getFromAPI(this.apiUrl).pipe(
            tap((res: any) => {
                this.listaObjetos.next(res.results);
            })
        );
    }

    private getFromAPI(url: string): Observable<any> {
        return this.httpClient.get(url);
    }
}
