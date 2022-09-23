import styles from "./layout.module.css";
import utilityStyles from "../../styles/utility.module.css";
import Head from "next/head";
import Link from "next/link";

const name = "Tokuyama Blog";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpeg"
              alt="プロフィール画像"
              className={`${styles.headerHomeImage} ${utilityStyles.borderCircle}`}
            />
            <h1 className={utilityStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.jpeg"
              alt="プロフィール画像"
              className={`${styles.headerImage} ${utilityStyles.borderCircle}`}
            />
            <h1 className={utilityStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <Link href="/" className={styles.backToHome}>
         ← ホームへ戻る
        </Link>
      )}
    </div>
  );
};

export default Layout;
