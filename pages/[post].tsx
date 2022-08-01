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
    <div>
      {postData?.content && (
        <div
          dangerouslySetInnerHTML={{ __html: md().render(postData.content) }}
        />
      )}
    </div>
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
