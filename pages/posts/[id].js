import Layout from "../../components/Layout/layout";
import utilityStyles from "../../styles/utility.module.css";
import { getPostData, getAllPostPaths } from "../../lib/getPost";
import sanitize from "sanitize-html";

export async function getStaticPaths() {
  return {
    paths: getAllPostPaths(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function post({ postData }) {
  return (
    <Layout>
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
