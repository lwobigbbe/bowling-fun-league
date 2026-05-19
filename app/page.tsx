export default async function Home() {
  const result = await supabase.from("bowlers").select("*");

  return (
    <pre>{JSON.stringify(result, null, 2)}</pre>
  );
}