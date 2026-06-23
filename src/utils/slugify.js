/**
 * Generate a URL-friendly slug from a project title.
 * Shared utility used by both Projects.jsx and ProjectDetail.jsx.
 *
 * @param {string} title - The project title
 * @returns {string} URL-safe slug
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
