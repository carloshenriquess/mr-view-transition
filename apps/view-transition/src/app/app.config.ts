import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { component: HomeComponent, path: '' },
      { component: ImageDetailComponent, path: 'detail' },
    ]),
  ],
};
