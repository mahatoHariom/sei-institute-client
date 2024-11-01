import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

interface User {
  isVerified: boolean;
}

const getUserFromToken = (token: string | undefined): User | null => {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token) as User;
    // console.log("deco", decoded);
    return decoded;
  } catch (error) {
    console.error("Failed to verify access token:", error);
    return null;
  }
};

const isPublicPage = (path: string): boolean =>
  ["/login", "/register"].includes(path);

const redirectTo = (path: string, request: NextRequest): NextResponse =>
  NextResponse.redirect(new URL(path, request.url));

export function middleware(request: NextRequest): NextResponse {
  const accessToken = request.cookies.get("accessToken")?.value;
  const user = getUserFromToken(accessToken);

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
