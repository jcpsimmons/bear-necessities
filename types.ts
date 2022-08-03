export type Post = {
  slug: string;
  frontmatter: { title: string; preview: string; date: string };
  content?: string;
};
