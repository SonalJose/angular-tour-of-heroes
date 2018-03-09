import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
  // this.messageService.add('HeroService: fetched heroes');     //  if this is commented, the message option won't be displayed in the page
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
  //  this.messageService.add(`HeroService: fetched hero id=${id}`);     //  if this is commented, the message option won't be displayed in the page
    return of(HEROES.find(hero => hero.id === id));
  }
}