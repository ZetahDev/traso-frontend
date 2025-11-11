/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Declaraciones de módulos para archivos CSS
declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}

declare module '*.sass' {
  const content: string;
  export default content;
}

declare module '*.less' {
  const content: string;
  export default content;
}

// Extender el objeto Window para funciones globales
declare global {
  interface Window {
    showMessage: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
  }
}

export {};