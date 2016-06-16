import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {Router} from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  template: require('./heroes.component.html'),
  styles: [require('./heroes.component.css')],
  directives: [],
  providers: []
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes';
  selectedHero: Hero;

  public heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) {

    }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }


}

