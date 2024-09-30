import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next(); // works the same way as that of next() in express, now modify this and return it and we can move to other middleware or handler
    const themePreference = request.cookies.get("theme");
    if(!themePreference) {
        response.cookies.set("theme", "dark");
    }
    return response;
    //if(request.nextUrl.pathname === "/profile") {
    //   return NextResponse.rewrite(new URL("/hello", request.url));
    //}
    //return NextResponse.redirect(new URL("/", request.url));
}

//export const config = {
//    matcher: "/profile",
//}