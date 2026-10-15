export default function Home() {
  const version = process.env.npm_package_version ?? "1.0.0";

  return (
    <main style={{ padding: "48px", fontFamily: "Arial" }}>
      <h1>Next.js CI/CD Demo 1.0.0</h1>

      <p>My application is running successfully.</p>

      <p>
        Version: <strong>{version}</strong>
      </p>

      <p>Deployment pipeline: GitHub Actions → Vercel</p>
    </main>
  );
}
