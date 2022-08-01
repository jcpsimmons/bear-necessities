import fs from "fs";
import { Post } from "../types";
import { titleCase } from "./string";

export const getSinglePostData = (slug: string): Post => {
  const fileName = slug.replace(/-/g, " ") + ".md";
  const filenameNoExtension = fileName.split(".")[0];
  const content = fs.readFileSync(`posts/${fileName}`, "utf8");
  const frontmatter = {
    preview: content.slice(0, 10),
    title: titleCase(filenameNoExtension),
  };
  return { slug, frontmatter, content };
};

export const getAllPostData = (): Post[] => {
  const files = fs.readdirSync("posts");

  let filesSortedByDate = files.sort((a, b) => {
    let aStat = fs.statSync(`posts/${a}`),
      bStat = fs.statSync(`posts/${b}`);

    return (
      new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime()
    );
  });

  const posts = filesSortedByDate.map((filename) => {
    const filenameNoExtension = filename.split(".")[0];
    const slug = filenameNoExtension.replace(/ /g, "-");
    const readFile = fs.readFileSync(`posts/${filename}`, "utf8");
    const frontmatter = {
      preview: readFile.slice(0, 10),
      title: titleCase(filenameNoExtension),
    };
    return { slug, frontmatter };
  });

  return posts;
};
