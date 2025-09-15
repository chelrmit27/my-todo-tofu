// Read API base URL from Vite env var only (configure in Vercel)
export const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

if (!BASE_URL) {
  // Surface a clear error in case the env var is missing at build time
  // eslint-disable-next-line no-console
  console.error(
    "VITE_API_BASE_URL is not defined. Set it in Vercel Environment Variables.",
  );
}
