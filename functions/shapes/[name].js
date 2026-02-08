export async function onRequest({ params, env }) {
  const fileUrl = new URL(`shapes/${params.name}.shex`, "https://shapetrees.hackers4peace.net/");
  const res = await env.ASSETS.fetch(fileUrl);
  if (!res.ok) return new Response("Not found", { status: 404 });
  return new Response(res.body, {
    headers: {
      "Content-Type": "text/shex",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
