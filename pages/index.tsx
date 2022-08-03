import type { NextPage } from "next";
import Link from "next/link";
import { Post } from "../types";
import { getAllPostData } from "../utils/post";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="prose lg:prose-xl dark:prose-invert text-center mx-auto px-4">
      {posts.map((post: Post) => {
        return (
          <>
            <small className="italic text-gray-500">
              {post.frontmatter.date}
            </small>
            <Link href={post.slug} key={post.slug}>
              <a className="no-underline ">
                <h1 className="hover:text-red-400 transition-colors">
                  {post.frontmatter.title}
                </h1>
              </a>
            </Link>
          </>
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
