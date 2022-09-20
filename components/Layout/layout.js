import Head from "next/head";
import Image from "next/image";

const name = "Tokuyama Code"
const Layout = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header>
        <Image src="/images/profile.jpeg" alt="プロフィール画像" />
        <h1>{name}</h1>
      </header>
    </div>
  );
}

export default Layout;