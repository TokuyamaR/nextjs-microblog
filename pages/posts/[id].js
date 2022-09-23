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

export default function post() {
  return <Layout>{postData.id}</Layout>;
}
