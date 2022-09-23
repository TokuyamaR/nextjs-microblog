import Layout from "../../components/Layout/layout";
import { getPostData, getAllPostPaths } from "../../lib/getPost";

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
      {postData.title}
      <br />
      {postData.date}
      <br />
      {postData.htmlContents}
    </Layout>
  );
}
