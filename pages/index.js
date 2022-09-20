import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import styles from "../styles/Home.module.css";
import utilityStyles from "../styles/utility.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tokuyama Blog</title>
        <meta
          name="description"
          content="Next.jsで作成されたTokuyamaのブログです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilityStyles.headingMd}>
        <p>
          サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。サンプルテキストが入ります。
        </p>
      </section>

      <section
        className={`${utilityStyles.headingMd} ${utilityStyles.padding1px}`}
      >
        <h2 className={utilityStyles.headingLg}>Tokuyamaの記事一覧</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/posts/firstPost">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                alt="記事1"
              />
            </Link>
            <Link href="/posts/firstPost">
              <p>記事1のタイトル</p>
            </Link>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail02.jpg"
                className={styles.thumbnailImage}
                alt="記事2"
              />
            </Link>
            <Link href="/">
              <p>記事2のタイトル</p>
            </Link>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail03.jpeg"
                className={styles.thumbnailImage}
                alt="記事3"
              />
            </Link>
            <Link href="/">
              <p>記事3のタイトル</p>
            </Link>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail04.jpg"
                className={styles.thumbnailImage}
                alt="記事4"
              />
            </Link>
            <Link href="/">
              <p>記事4のタイトル</p>
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
