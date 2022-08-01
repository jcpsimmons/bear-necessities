import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import styles from "../styles/Home.module.css";
import { titleCase } from "../utils/string";
import Link from "next/link";
import { Post } from "../types";
import { getAllPostData } from "../utils/post";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts.map((post: Post) => {
        return (
          <Link href={post.slug} key={post.slug}>
            <div>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.preview}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPostData();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
