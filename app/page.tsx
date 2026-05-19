import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase.from("bowlers").select("*");

  return (
    <main style={{ padding: 20 }}>
      <h1>🎳 4 the 10 Pin</h1>

      <h2>Bowlers (Database Test)</h2>

      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </main>
  );
}