// Chargeur dynamique de @google/model-viewer (web component ~250 Ko).
// Import dynamique UNIQUEMENT : jamais d'import statique, jamais dans
// manualChunks de Vite — le but est un chunk séparé, chargé à la demande.
// Promise mémoïsée au niveau du module (StrictMode appelle 2× les effets).

let loader: Promise<unknown> | null = null

export function loadModelViewer(): Promise<unknown> {
  if (!loader) {
    loader = import('@google/model-viewer')
  }
  return loader
}