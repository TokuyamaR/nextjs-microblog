import styles from "./layout.module.css";
import utilityStyles from "../../styles/utility.module.css";
import Head from "next/head";

const name = "Tokuyama Blog";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.jpeg"
          alt="プロフィール画像"
          className={`${styles.headerHomeImage} ${utilityStyles.borderCircle}`}
        />
        <h1 className={utilityStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
