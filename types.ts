export type Post = {
  slug: string;
  frontmatter: { title: string; preview: string };
  content?: string;
};
