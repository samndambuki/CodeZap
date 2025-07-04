import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: {
        baseUrl: 'https://unpkg.com/monaco-editor@0.43.0/min/vs',
        defaultOptions: { scrollBeyondLastLine: false, automaticLayout: true, minimap: { enabled: false }, theme: 'vs-dark' }
      }
    }
  ]
};
