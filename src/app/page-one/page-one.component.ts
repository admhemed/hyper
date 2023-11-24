import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.scss',
})
export class PageOneComponent {
  menuVisible: boolean = false;

  onMenuToggle() {
    this.menuVisible = !this.menuVisible;
  }
}
