import { Injectable } from '@angular/core';
import { Hero } from './hero-interface';
import { Heroes } from './hero-list';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return Heroes;
  }
}
