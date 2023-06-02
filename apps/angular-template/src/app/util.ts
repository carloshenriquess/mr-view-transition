import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
interface ModernDocument extends Document {
  startViewTransition?: (callback?: () => unknown) => unknown;
}

export const DOCUMENT: ModernDocument = document;

export const navigationStart = () => {
  const router = inject(Router);

  return router.events.pipe(
    takeUntilDestroyed(),
    filter(event => event instanceof NavigationStart),
  );
};

export const navigationEnd = () => {
  const router = inject(Router);

  return router.events.pipe(
    takeUntilDestroyed(),
    filter(event => event instanceof NavigationEnd),
  );
};
