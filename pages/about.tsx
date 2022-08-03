import type { NextPage } from "next";
import fs from "fs";
import { getSinglePostData } from "../utils/post";
import { Post } from "../types";
import md from "markdown-it";

const pageContent = `
This is the about page.

Put literally whatever the fuck you want here.

Maybe a nice......

photo of you standing in front of the ocean?
`;

const About: NextPage = () => {
  return (
    <article className="prose md:prose-xl lg:prose-2xl dark:prose-invert mx-auto pt-10 px-4 prose-img:rounded-md prose-img:mx-auto prose-a:text-blue-600">
      <h1 className="text-center pb-10">About</h1>

      <div dangerouslySetInnerHTML={{ __html: md().render(pageContent) }} />
    </article>
  );
};

export default About;
