/**
 * Envoi d'un formulaire vers un endpoint compatible Formspree (POST FormData).
 * Ne jamais définir manuellement le header Content-Type : le navigateur
 * doit générer le boundary multipart lui-même.
 */
export async function submitForm(
  endpoint: string,
  data: Record<string, string>,
  files?: FileList | null,
): Promise<void> {
  const fd = new FormData()
  for (const [key, value] of Object.entries(data)) {
    fd.append(key, value)
  }
  // Champ honeypot anti-spam (ignoré s'il est rempli par un bot)
  fd.append('_gotcha', '')
  if (files) {
    for (const file of Array.from(files)) {
      fd.append('files', file)
    }
  }
  const res = await fetch(endpoint, { method: 'POST', body: fd })
  if (!res.ok) {
    throw new Error(`Formulaire : réponse ${res.status}`)
  }
}