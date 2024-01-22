import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link className="text-xl bg-lime-700 p-40" href={'/formulary'} >FORMULARIO</Link>
    </main>
  );
}
