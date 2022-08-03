# A SIMPLE BAREBONES MARKDOWN-TO-BLOG TEMPLATE BUILT IN NEXTJS

## Live Demo: [🔗https://bear-necessities.vercel.app/](https://bear-necessities.vercel.app/)

I maintain a blog now that's pretty easy but there's a bunch of steps to get from my notetaking app (Bear) to a blog post. I wondered - what if I could just shit out a markdown file, come up with a title, and just push the repo? **That is what bear-necessities does**.

Can you use it with markdown from other apps? Sure - I don't care - but I won't be, I just want to do my writing in Bear and minimal teching before I publish something - it facilitates the development of my foot-in-mouth disease.

## Run it Locally

- fork repo
- `yarn`
- `yarn dev` to start it locally
- put markdown files into the `/posts` folder - give them a dash separated filename - this will be title cased, needless to say you can't have titles that intentionally have dashes.

## Send it.

- create an account on Vercel
- in terminal navigate to the root of the project
- run `yarn makesite`
- follow the prompts
- your site is now live on Vercel at the URL printed in the terminal

## Need images in your posts? Are you sure - could you just write a bit better instead? OK FINE

Put your images wherever-the-fuck you want them (could use `/public` could use an S3 bucket, who cares, toss 'em somewhere). Use the markdown image syntax and it'll work on the page:

```
![alt text](/path/to/image.jpg)
```

**But Josh - what about site speed are these images optimized?** NOPE. Too much work and I don't really use a bunch of images in my posts. Again, maybe you could just write better? A picture says a thousand words, but an essay is _at least_ 1000 words so that's equivalent to one image already...

## Features, issues, etc.

If it's broken, open a PR, if it's a feature add, fork it, add it, and don't tell me about it.
