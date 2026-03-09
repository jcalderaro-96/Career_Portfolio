import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Career Portfolio</title>
        <meta name="description" content="My developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10">
        <h1 className="text-6xl font-mont font-bold">Home</h1>
        <p className="mt-4 text-xl font-mont">Testing Montserrat font</p>
      </main>
    </>
  );
}
