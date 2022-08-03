import type { NextPage } from "next";
import Link from "next/link";
import { Post } from "../types";
import { getAllPostData } from "../utils/post";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="prose lg:prose-xl dark:prose-invert text-center mx-auto">
      {posts.map((post: Post) => {
        return (
          <Link href={post.slug} key={post.slug}>
            <a className="no-underline hover:underline underline-offset-2">
              <h1>{post.frontmatter.title}</h1>
            </a>
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
