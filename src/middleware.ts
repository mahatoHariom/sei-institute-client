import { NextRequest, NextResponse } from "next/server";

// Define a User type for better type safety when dealing with user information
interface User {
  isVerified: boolean;
}

// Utility function to decode and parse the user cookie
const getUserFromCookie = (cookieValue: string | undefined): User | null => {
  if (!cookieValue) return null;
  try {
    return JSON.parse(decodeURIComponent(cookieValue)) as User;
  } catch (error) {
    console.error("Failed to parse user cookie:", error);
    return null;
  }
};

// Utility function to check if the path is restricted to unauthenticated users
const isPublicPage = (path: string): boolean =>
  ["/login", "/register"].includes(path);

// Utility function to redirect to a specific path
const redirectTo = (path: string, request: NextRequest): NextResponse =>
  NextResponse.redirect(new URL(path, request.url));

// Middleware function to handle request redirection logic
export function middleware(request: NextRequest): NextResponse {
  const user = getUserFromCookie(request.cookies.get("seiUser")?.value);
  const { pathname } = request.nextUrl;

  // 1. Redirect unauthenticated users trying to access protected routes
  if (!user && !isPublicPage(pathname)) {
    return redirectTo("/login", request);
  }

  // 2. Redirect verified users away from the "/complete" page
  if (user?.isVerified && pathname === "/complete") {
    return redirectTo("/", request);
  }

  // 3. Redirect unverified users trying to access the home page to "/complete"
  if (user && !user.isVerified && pathname === "/") {
    return redirectTo("/complete", request);
  }

  // 4. Redirect authenticated users away from public pages like login or register
  if (user && isPublicPage(pathname)) {
    return redirectTo("/", request);
  }

  // Allow the request to proceed if no redirection conditions were met
  return NextResponse.next();
}

// Configuration to apply middleware to specific routes
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
