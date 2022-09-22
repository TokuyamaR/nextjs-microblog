import Layout from "../../components/Layout/layout";
import { getAllPostPaths } from "../../lib/getPost";

export async function getStaticPaths() {
  return {
    paths: getAllPostPaths(),
    fallback: false,
  };
}

export default function post() {
  return <Layout>動的なルーティング設定によるページ</Layout>;
}
