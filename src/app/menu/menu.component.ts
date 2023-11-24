import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as ColorActions from '../state/color.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private store: Store<AppState>) {}

  changeTheme(color: string) {
    this.store.dispatch(ColorActions.changeColorTheme({ color }));
  }
}
