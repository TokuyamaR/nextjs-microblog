import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import styles from "../styles/Home.module.css";
import utilityStyles from "../styles/utility.module.css";
import { getPostsData } from "../lib/getPost";

// SSGの場合のデータ取得
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合のデータ取得
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // 取得したデータのprops
//     }
//   };
// }

export default function Home({ allPostsData }) {
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
          {allPostsData.map(({ id, title, date, thumbnail }) => {
            return (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img
                    src={thumbnail}
                    className={styles.thumbnailImage}
                    alt="記事1"
                  />
                </Link>
                <Link href={`/posts/${id}`}>
                  <p>{title}</p>
                </Link>
                <small className={utilityStyles.lightText}>{date}</small>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
