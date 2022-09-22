import path from "path";
import fs from "fs";
import fm from "front-matter";
import remark from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const fileNames = fs.readdirSync(postsDirectory);

// mdファイルの全記事データを取得
export function getPostsData() {
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名
    const id = fileName.replace(/\.md$/, "");

    // mdのメタデータを取得
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterContents = fm(fileContents);

    return { id, ...matterContents };
  });
  return allPostsData;
}

// mdファイルの特定の記事データを取得
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterContents = fm(fileContents);

  const blogContents = await remark().use(html).process(matterContents);

  return { id, blogContents, ...matterContents };
}

// getStaticPaths で利用するpathデータを取得
export function getAllPostPaths() {
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
