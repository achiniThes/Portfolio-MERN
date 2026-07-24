const configuredApiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

// Keep the existing local-development experience, but require an explicitly
// deployed API for production builds such as GitHub Pages.
export const API_URL = configuredApiUrl || (
  import.meta.env.DEV ? "http://localhost:5000/api" : null
);

export function projectsEndpoint(id = "") {
  if (!API_URL) {
    throw new Error("The portfolio API has not been configured for this deployment.");
  }

  return `${API_URL}/projects${id ? `/${id}` : ""}`;
}
