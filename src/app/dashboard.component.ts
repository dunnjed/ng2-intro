import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router-deprecated';

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router) {

  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', {id: hero.id}];
    this.router.navigate(link);
  }
}
