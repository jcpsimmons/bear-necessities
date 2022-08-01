import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import styles from "../styles/Home.module.css";
import { titleCase } from "../utils/string";

type Post = {
  slug: string;
  frontmatter: { title: string; preview: string };
};

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts.map((post: Post) => {
        return (
          <div key={post.slug}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.preview}</p>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  let filesSortedByDate = files.sort((a, b) => {
    let aStat = fs.statSync(`${posts}/${a}`),
      bStat = fs.statSync(`${posts}/${b}`);

    return (
      new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime()
    );
  });

  const posts = filesSortedByDate.map((filename) => {
    const filenameNoExtension = filename.split(".")[0];
    const slug = filenameNoExtension.replace(/ /g, "-").toLowerCase();
    const readFile = fs.readFileSync(`posts/${filename}`, "utf8");
    const frontmatter = {
      preview: readFile.slice(0, 10),
      title: titleCase(filenameNoExtension),
    };
    return { slug, frontmatter };
  });

  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export default Home;
