import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    //const requestHeaders = request.headers;
    //or
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));
    //method 2 for headers
    const headerList = headers(); // read only
    console.log(headerList.get("Authorization"));

    cookies().set("resultsPerPage", "20");
    console.log(cookies().get("resultsPerPage"));
    console.log(request.cookies.get("theme"));
    return new Response("<h1>Profile API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        }
    });
}