import fs from "fs";
import { Post } from "../types";
import { titleCase } from "title-case";
import { format, parse } from "date-fns";

export const getSinglePostData = (slug: string): Post => {
  const fileName = slug + ".md";
  const content = fs.readFileSync(`posts/${fileName}`, "utf8");
  const [title, date] = getTitleAndDate(fileName);

  const frontmatter = {
    preview: content.slice(0, 10),
    title,
    date,
  };
  return { slug, frontmatter, content };
};

export const getAllPostData = (): Post[] => {
  const files = fs.readdirSync("posts");
  const sortedFiles = files.reverse();

  const posts = sortedFiles.map((filename) => {
    const filenameNoExtension = filename.split(".")[0];
    const slug = filenameNoExtension;
    const readFile = fs.readFileSync(`posts/${filename}`, "utf8");
    const [title, date] = getTitleAndDate(filenameNoExtension);
    const frontmatter = {
      preview: readFile.slice(0, 10),
      title,
      date,
    };
    return { slug, frontmatter };
  });

  return posts;
};

const getTitleAndDate = (rawFilename: string): string[] => {
  const extensionStripped = rawFilename.replace(".md", "");
  const [rawDateString, rawTitle] = extensionStripped.split("_");
  const title = titleCase(rawTitle.replace(/-/g, " "));
  const parsed = parse(rawDateString, "yyyyMMdd", new Date());
  const formattedDate = format(parsed, "MMMM dd, yyyy");
  return [title, formattedDate];
};
