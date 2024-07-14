import { h, render } from "https://esm.sh/preact";
import { useState, useEffect, useRef } from "https://esm.sh/preact/hooks";
import htm from "https://esm.sh/htm";

const html = htm.bind(h);

const postFiles = [
  { filename: "game-art-test.md", title: "Game Art Test" },
  { filename: "procedural-terrain.md", title: "Procedural Terrain" },
  { filename: "portfolio-website.md", title: "Portfolio Website" },
];

const PostList = ({ onCardClick }) => html`
  <div>
    ${postFiles.map(
      (post) => html` <div
        class="post-card"
        onClick=${() => onCardClick(post.filename)}
      >
        <h2>${post.title}</h2>
      </div>`
    )}
  </div>
`;

const Post = ({ filename }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`./posts/${filename}`)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading post:", error));
  }, [filename]);

  return html`
    <div class="post">
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
    if (ref.current && markdown) {
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

  return html`<div class="md-content" ref=${ref}></div>`;
};

const RenderMarkdownFile = ({ file }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${file}`)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading post:", error));
  }, [file]);

  return html`
    <div>
      <${MarkdownViewer} markdown=${content} />
    </div>
  `;
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  return html`
    <button onClick=${() => setTheme(theme === "light" ? "dark" : "light")}>
      ${theme === "dark" && html`<i class="fas fa-sun"></i>`}
      ${theme === "light" && html`<i class="fas fa-moon"></i>`}
    </button>
  `;
};

const Home = () => {
  return html`<div>
    <${RenderMarkdownFile} file=${"./resources/about.md"} />
  </div> `;
};

const Experience = () => {
  return html`<div>
    <${RenderMarkdownFile} file=${"./resources/experience.md"} />
  </div>`;
};

const Blog = ({ onPostSelect }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCardClick = (filename) => {
    setSelectedPost(filename);
    onPostSelect(filename);
  };

  return html`
    <div>
      <${PostList} onCardClick=${handleCardClick} />
    </div>
  `;
};

const App = () => {
  const [content, setContent] = useState("home");
  const [selectedPost, setSelectedPost] = useState(null);

  const renderContent = () => {
    if (selectedPost) {
      return html`<${Post}
        filename=${selectedPost}
        onBackClick=${() => setSelectedPost(null)}
      />`;
    }

    switch (content) {
      case "home":
        return html`<${Home} />`;
      case "experience":
        return html`<${Experience} />`;
      case "blog":
        return html`<${Blog} onPostSelect=${setSelectedPost} />`;
      default:
        return html`<${Home} />`;
    }
  };

  const handleContentSet = (content) => {
    setContent(content);
    setSelectedPost(null);
  }

  return html`
    <div>
      <nav class="navbar">
        ${selectedPost
          ? html`
              <button
                class="post-back-button"
                onClick=${() => setSelectedPost(null)}
              >
                <i class="fa-solid fa-angle-left"></i> Back
              </button>
            `
          : html``}
        <div class="navbar-spacer"></div>
        <button class="navbar-icon" onClick=${() => handleContentSet("home")}>
          Home
        </button>
        <button class="navbar-icon" onClick=${() => handleContentSet("experience")}>
          Experience
        </button>
        <button class="navbar-icon" onClick=${() => handleContentSet("blog")}>
          Blog
        </button>
        <${ThemeSwitcher} />
      </nav>
      <div class="spacer"></div>
      <div>${renderContent()}</div>
      <div>sidebar</div>
      <footer>footer</footer>
    </div>
  `;
};

render(html`<${App} />`, document.getElementById("app"));
