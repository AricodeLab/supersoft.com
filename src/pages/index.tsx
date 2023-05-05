import Head from "next/head";

import * as S from "@components/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Supersoft</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo Supersoft.svg" />
      </Head>
      <main>
        <S.Header />
        <S.MainSection />
        <S.AboutSection />
        <S.AutomationSection />
        <S.InfoSection />
        <S.Footer />
      </main>
    </>
  );
}
