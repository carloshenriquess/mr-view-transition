import { NgOptimizedImage } from '@angular/common';
import { Component, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '../util';

@Component({
  selector: 'mr-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [NgOptimizedImage],
})
export class HomeComponent {
  router = inject(Router);
  ngZone = inject(NgZone);

  onClickImage() {
    if (!DOCUMENT.startViewTransition) return;
    DOCUMENT.startViewTransition(() =>
      this.ngZone.run(() => this.router.navigate(['/detail'])),
    );
  }
}
