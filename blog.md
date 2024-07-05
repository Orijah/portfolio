# Personal website

## Tech

I have always wanted to write my own portfolio website, mostly as a place to publish blog posts, encouraging myself to document the process as I work on side projects. I've dabbled here and there learning JavaScript and I've tried of the more common web frameworks such as [React](https://react.dev/) and [Svelte](https://svelte.dev/) but have only every approached it from that angle and it has been very superficial.

In some of my other projects, I have been using large development environments that have a reasonable amount of complexity and abstraction to them, for good reason. It reminded me of my first experience of web dev, and while the inner workings behind `npx create-react-app` aren't too daunting, I was always attracted to the simplicity of the trio of index files; .html, .css and .js. It is definitely nice having layers to hide complexity and provide a simpler user experience but sometimes, especially when things break, I find it often is much harder to debug.

With all that in mind, I wanted to rebuild a portfolio application I started some time ago. It first began as pure html as a learning project but morhped into a React project when I started putting more things together. I would like this application to be quite simple, displaying sections from markdown files including blog posts. I don't anticipate the number of posts to be very large so I don't think anything complicated for managing the content is needed either.

To begin with, I started looking at options for static site generators. With a small bit of React experience, [Gatsby](https://www.gatsbyjs.com/) was looking like an appealing option. Another alternative that got a lot of praise was [Hugo](https://gohugo.io/). While I have wanted to learn Go for some time, the templating language for Hugo was holding me back from picking it up immediately for my application and at this stage I had almost decided to run with vanilla JavaScript. I kept cycling through these three options, Gatsby because I actually quite like React, more specifically JSX. Hugo because of the buzz and that I wanted to learn Go. And vanilla because it felt like the smaller, simpler option. At this point I came across [Preact](https://preactjs.com/), an alternative to React using JSX. After reading the docs I was pleasantly surprised to see the use of an alternative to JSX, [HTM](https://github.com/developit/htm), that works with standard JavaScript using a CDN.

```html
<script type="module">
  import { h, render } from 'https://esm.sh/preact';
  import htm from 'https://esm.sh/htm';

  // Single-import Preact version:
  // import { html, render } from 'https://esm.sh/htm/preact/standalone'

  // Initialize htm with Preact
  const html = htm.bind(h);

  function App (props) {
    return html`<h1>Hello ${props.name}!</h1>`;
  }

  render(html`<${App} name="World" />`, document.body);
</script>
```

With some vscode extensions for syntax highlighting it feels like JSX and all I need is a single html file to get going. The ability to only rely on CDNs seemed very appealing and, maybe deceptively, lightweight. Because of this I decided to run with Preact and HTM.

## Design

For the general structure I will be rendering a link of blog posts kept in a `/posts/` directory, while I'll keep all of the resources in a `/resources/` directory. This means all the blog posts technically share the resources but I dont think it needs to be more complex than this for now.

### Markdown rendering

I'm using the [marked](https://github.com/markedjs/marked), [highlightjs](https://github.com/highlightjs/highlight.js) and [mathjax](https://github.com/mathjax/MathJax-src) packages for markdown to html, code syntax highlighting and LaTex highlighting respectively. I created a markdown viewer component to load and highlight the markdown text.

```JavaScript
const MarkdownViewer = ({ markdown }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = window.marked.parse(markdown, {
        highlight: (code, lang) => {
          return hljs.highlightAuto(code, [lang]).value;
        },
      });

      window.MathJax.typesetPromise([ref.current]);
      document.querySelectorAll("pre code").forEach((block) => {
        window.hljs.highlightElement(block);
      });
    }
  }, [markdown]);

  return html`<div ref=${ref}></div>`;
};
```
