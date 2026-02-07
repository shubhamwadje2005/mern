export const APP_URL = process.env.NEXT_PUBLIC_BACKEND_URL === "production"
    ? process.env.NEXT_PUBLIC_API_LIVE
    : process.env.NEXT_PUBLIC_API_LOCAL