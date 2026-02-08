export async function onRequest({ params, env }) {
  const fileUrl = new URL(`trees/${params.name}.ttl`, "https://shapetrees.hackers4peace.net/");
  const res = await env.ASSETS.fetch(fileUrl);
  if (!res.ok) return new Response("Not found", { status: 404 });
  return new Response(res.body, {
    headers: {
      "Content-Type": "text/turtle",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
