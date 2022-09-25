import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout/layout";
import styles from "../styles/Home.module.css";
import utilityStyles from "../styles/utility.module.css";
import { getPostsData } from "../lib/getPost";
import { GetStaticProps } from "next";

type AllPostsDataType = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
  }[];
};

// SSGの場合のデータ取得
export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

// SSRの場合のデータ取得
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // 取得したデータのprops
//     }
//   };
// }

export default function Home({ allPostsData }: AllPostsDataType) {
  return (
    <Layout home>
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
          フロントエンドエンジニアであるTokuyamaのミニブログです。このブログはNext.jsにて作成しています。
        </p>
      </section>

      <section
        className={`${utilityStyles.headingMd} ${utilityStyles.padding1px}`}
      >
        <h2 className={utilityStyles.headingLg}>Tokuyamaの記事一覧</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={thumbnail}
                  className={styles.thumbnailImage}
                  alt={title}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <p>{title}</p>
              </Link>
              <small className={utilityStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
