import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const initialMarkdown = `# Welcome to Markdown Preview

Write **Markdown** on the left and see it rendered instantly on the right.

## What you can do

- Add headings, lists, and links
- Use **bold** and *italic* text
- Write \`inline code\`

> A simple, focused space for your ideas.

\`\`\`js
const greeting = "Hello, Markdown!";
console.log(greeting);
\`\`\`
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">M</div>
          <div>
            <h1>Markdown Preview</h1>
            <p>Write clearly. Preview instantly.</p>
          </div>
        </div>
        <span className="status"><span className="status-dot" />Live preview</span>
      </header>

      <section className="workspace" aria-label="Markdown editor and preview">
        <div className="panel editor-panel">
          <div className="panel-heading">
            <span>Markdown</span>
            <span className="panel-hint">Edit your text</span>
          </div>
          <textarea
            aria-label="Markdown input"
            className="editor"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
            spellCheck="false"
          />
          <div className="panel-footer">
            <span>{markdown.length} characters</span>
            <span>Markdown supported</span>
          </div>
        </div>

        <div className="panel preview-panel">
          <div className="panel-heading">
            <span>Preview</span>
            <span className="panel-hint">Rendered output</span>
          </div>
          <article className="preview prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </article>
        </div>
      </section>

      <footer className="page-footer">
        <span>Made for thoughtful writing</span>
        <span>GitHub-flavored Markdown supported</span>
      </footer>
    </main>
  );
}

export default App;
