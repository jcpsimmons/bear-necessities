import type { NextPage } from "next";
import fs from "fs";
import { getSinglePostData } from "../utils/post";
import { Post } from "../types";
import md from "markdown-it";

interface Props {
  postData: Post;
}

interface StaticProps {
  params: {
    post: string;
  };
}

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <article className="prose md:prose-xl lg:prose-2xl dark:prose-invert mx-auto pt-2 px-4 prose-img:rounded-md prose-img:mx-auto prose-a:text-blue-600">
      <div className="text-center pb-10">
        <small className="italic text-gray-500">
          {postData.frontmatter.date}
        </small>
        <h1>{postData.frontmatter.title}</h1>
      </div>
      {postData?.content && (
        <div
          dangerouslySetInnerHTML={{ __html: md().render(postData.content) }}
        />
      )}
    </article>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      post: fileName.split(".")[0].replace(/ /g, "-").toLowerCase(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { post } }: StaticProps) {
  const postData = getSinglePostData(post);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
