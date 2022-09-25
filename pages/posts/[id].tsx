import Head from "next/head";
import { Layout } from "../../components/Layout/layout";
import utilityStyles from "../../styles/utility.module.css";
import { getPostData, getAllPostPaths } from "../../lib/getPost";
import sanitize from "sanitize-html";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

type PostDataType = {
  postData: {
    title: string;
    date: string;
    thumbnail: string;
    htmlContents: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData((params as ParsedUrlQuery).id as string);

  return {
    props: {
      postData,
    },
  };
};

export default function post({ postData }: PostDataType) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          name="description"
          content={`${postData.title} についての記事です。`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <h1 className={utilityStyles.headingXl}>{postData.title}</h1>
        <div className={utilityStyles.lightText}>{postData.date}</div>
        <div
          dangerouslySetInnerHTML={{ __html: sanitize(postData.htmlContents) }}
        />
      </article>
    </Layout>
  );
}
