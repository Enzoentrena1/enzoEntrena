export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard"] };
export const config = { matcher: ["/products/:path*","/auth/register","/admin","/Admin","/new"] };
