import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.scss',
})
export class PageTwoComponent {
  menuVisible: boolean = false;

  onMenuToggle() {
    this.menuVisible = !this.menuVisible;
  }
}
