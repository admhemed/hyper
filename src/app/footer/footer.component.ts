import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectThemeColor } from '../state/color.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  themeColor$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.themeColor$ = this.store.select(selectThemeColor);
  }
}
