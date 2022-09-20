import path from "path";
import fs from "fs";
import fm from "front-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取得
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名
    const id = fileName.replace(/\.md$/, "");

    // mdのメタデータを取得
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterContents = fm(fileContents);

    return { id, ...matterContents };
  });
}
