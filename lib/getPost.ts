import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

type FileContentsType = {
  title: string;
  date: string;
  thumbnail: string;
};

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
    const matterContents = matter(fileContents);

    return { id, ...(matterContents.data as FileContentsType) };
  });
  return allPostsData;
}

// mdファイルの特定の記事データを取得
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterContents = matter(fileContents);

  const blogContents = await remark()
    .use(remarkHtml)
    .process(matterContents.content);
  const htmlContents = blogContents.toString();

  return {
    id,
    htmlContents,
    ...(matterContents.data as FileContentsType),
  };
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
