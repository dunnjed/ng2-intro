import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
describe('App', () => {
  beforeEachProviders(() => [
    HeroesComponent,
    HeroService
  ]);
  it ('should work', inject([HeroesComponent], (app: HeroesComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
