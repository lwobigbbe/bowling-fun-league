import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data: bowlers, error } = await supabase
    .from("bowlers")
    .select("*");

  return (
    <main style={{ padding: 24 }}>
      <h1>🎳 4 the 10 Pin</h1>

      <h2>Bowlers (Database Test)</h2>

      <pre>{JSON.stringify(bowlers, null, 2)}</pre>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </main>
  );
}