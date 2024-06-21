import { h, render } from "https://esm.sh/preact";
import { useState, useEffect, useRef } from "https://esm.sh/preact/hooks";
import htm from "https://esm.sh/htm";

const html = htm.bind(h);

const postFiles = [
  { filename: "game-art-test.md", title: "Game Art Test" },
  { filename: "procedural-terrain.md", title: "Procedural Terrain" },
];

const PostList = ({ onCardClick }) => html`
  <div class="post-list">
    ${postFiles.map(
      (post) => html`
        <div class="card" onClick=${() => onCardClick(post.filename)}>
          <h2>${post.title}</h2>
        </div>
      `
    )}
  </div>
`;

const Post = ({ filename, onBackClick }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`./posts/${filename}`)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading post:", error));
  }, [filename]);

  return html`
    <div class="post">
      <button onClick=${onBackClick}>Back</button>
      <div class="post-content">
        <!-- <div dangerouslySetInnerHTML=${{
          __html: marked.parse(content),
        }}/> -->
        <!-- <div innerHTML=${marked.parse(content)}/> -->
        <${MarkdownViewer} markdown=${content} />
      </div>
    </div>
  `;
};

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

// const App = () => {
//     const [selectedPost, setSelectedPost] = useState(null);

//     return html`
//         <div>
//             ${selectedPost ?
//             html`<${Post} filename=${selectedPost} onBackClick=${() => setSelectedPost(null)} />` :
//             html`<${PostList} onCardClick=${setSelectedPost} />`
//         }
//         </div>
//     `;
// };

const App = () => {
  return html`
    <div>
        <nav>navbar</nav>
        <div>about</div>
		<div></div>
        <div>sidebar</div>
        <footer>footer</footer>
    </div>
  `;
};

render(html`<${App} />`, document.getElementById("app"));
