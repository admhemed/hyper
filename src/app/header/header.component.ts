import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectThemeColor } from '../state/color.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  themeColor$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.themeColor$ = this.store.select(selectThemeColor);
  }

  @Output() menuToggle = new EventEmitter<void>();
  toggleMenu() {
    this.menuToggle.emit();
  }
}
