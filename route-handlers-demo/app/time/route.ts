export const dynamic = "force-dynamic"; // to avoid default caching

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}