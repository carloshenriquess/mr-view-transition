import { Component, NgZone, inject } from '@angular/core';
import { DOCUMENT } from '../util';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'mr-image-detail',
  templateUrl: './image-detail.component.html',
  standalone: true,
  imports: [NgOptimizedImage],
})
export class ImageDetailComponent {
  router = inject(Router);
  ngZone = inject(NgZone);

  onClickImage() {
    if (!DOCUMENT.startViewTransition) return;
    DOCUMENT.startViewTransition(() => this.ngZone.run(() => this.router.navigate(['/'])));
  }
}
