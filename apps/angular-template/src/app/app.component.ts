import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'mr-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgOptimizedImage],
})
export class AppComponent {}
