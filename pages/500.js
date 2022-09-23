import Link from "next/link";
import Layout from "../components/Layout/layout";

export default function Page500() {
  return (
    <Layout>
      <div>
        <h1>
          サーバーエラーです。しばらく経ってから再度アクセスしてください。
        </h1>
        <Link href="/">ホームへ戻る</Link>
      </div>
    </Layout>
  );
}
