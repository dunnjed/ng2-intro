import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
describe('App', () => {
  beforeEachProviders(() => [
    AppComponent,
    HeroService
  ]);
  it ('should work', inject([AppComponent], (app: AppComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
