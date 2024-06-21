# Personal Website

I have always wanted to write my own portfolio website, both to have as a place to share some of the things I work on but also as an adventure in the web world. I've dabbled here and there learning JavaScript and some of the more common web frameworks such as React and Svelte but I only every approached web development from that angle. The vanilla JavaScript development experience has also never been something I've dealth with.

## Tech

In some of my other projects, I have been using large development environments that have a reasonable amount of complexity and abstraction to them, for good reason. It reminded me of my first experience of web dev, and while the inner workings behind `npx create-react-app` aren't too daunting, I was always attracted to the simplicity of the trio of index files; .html, .css and .js. It is definitely nice having layers to hide complexity but sometimes, especially when things break, I find it much harder to work with. The application itself only needs to be a single page with an 'about' section and a section to render blog posts, such as this one, written in markdown.

With all that in mind, I started looking at options for static site generators. With a small bit of React experience, [Gatsby](https://www.gatsbyjs.com/) was looking like an appealing option. Another alternative that got a lot of praise was [Hugo](https://gohugo.io/). While I have wanted to learn Go for some time, the templating language for Hugo was holding me back from picking it up immediately for my application and at this stage I had almost decided to run with vanilla JavaScript. I kept cycling through these three options, Gatsby because I actually quite like React, more specifically JSX. Hugo because of the buzz and that I wanted to learn Go. And vanilla because it felt like the smaller, simpler option. At this point I came across [Preact](https://preactjs.com/), an alternative to React using JSX. After reading the docs I was pleasantly surprised to see the use of an alternative to JSX, [HTM](https://github.com/developit/htm), that works with standard JavaScript using a CDN.

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

With some vscode extensions for syntax highlihgting it feels like JSX and all I need is a single html file to get going. The ability to only rely on CDNs seemed very appealing and, maybe deceptively, lightweight. Because of this I decided to run with Preact and HTM.

## Design

