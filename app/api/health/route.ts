export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "nextjs-cicd-demo",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  );
}
