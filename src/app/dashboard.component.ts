import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.component.html')
})
export class DashboardComponent { }
