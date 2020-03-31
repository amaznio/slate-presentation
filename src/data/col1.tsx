import React from 'react';

const col1 = <div className="infoColumn__container">
<h1>Slate.js Knowlege Sharing</h1>

<h3>What is Slate.js?</h3>
<p>Slate.js is a completely customizable framework for building rich text editors.</p>

<h3>Why use Slate.js?</h3>
<p>Other rich text editors available have their own issues:</p>
<ul>
  <li><b>The editor's "schema" was hardcoded and hard to customize.</b> Things like bold and italic were supported out of the box, but what about comments, or embeds, or even more domain-specific needs?</li>
  <li><b>Transforming the documents programmatically was very convoluted.</b> Writing as a user may have worked, but making programmatic changes, which is critical for building advanced behaviors, was needlessly complex.</li>
  <li><b>Serializing to HTML, Markdown, etc. seemed like an afterthought.</b> Simple things like transforming a document to HTML or Markdown involved writing lots of boilerplate code, for what seemed like very common use cases.</li>
  <li><b>Re-inventing the view layer seemed inefficient and limiting.</b> Most editors rolled their own views, instead of using existing technologies like React, so you have to learn a whole new system with new "gotchas".</li>
  <li><b>Collaborative editing wasn't designed for in advance.</b> Often the editor's internal representation of data made it impossible to use to for a realtime, collaborative editing use case without basically rewriting the editor.</li>
  <li><b>The repositories were monolithic, not small and reusable.</b> The code bases for many of the editors often didn't expose the internal tooling that could have been re-used by developers, leading to having to reinvent the wheel.</li>
  <li><b>Building complex, nested documents was impossible.</b> Many editors were designed around simplistic "flat" documents, making things like tables, embeds and captions difficult to reason about and sometimes impossible.</li>
</ul>
<h3>Slate Principles</h3>
<p>Slate was designed with the following principles to avoid the issues above.</p>
<ul>
  <li><b>First-class plugins.</b> The most important part of Slate is that plugins are first-class entities. That means you can completely customize the editing experience, to build complex editors like Medium's or Dropbox's, without having to fight against the library's assumptions.</li>
  <li><b>Schema-less core.</b> Slate's core logic assumes very little about the schema of the data you'll be editing, which means that there are no assumptions baked into the library that'll trip you up when you need to go beyond the most basic use cases.</li>
  <li><b>Nested document model.</b> The document model used for Slate is a nested, recursive tree, just like the DOM itself. This means that creating complex components like tables or nested block quotes are possible for advanced use cases. But it's also easy to keep it simple by only using a single level of hierarchy.</li>
  <li><b>Parallel to the DOM.</b> Slate's data model is based on the DOM—the document is a nested tree, it uses selections and ranges, and it exposes all the standard event handlers. This means that advanced behaviors like tables or nested block quotes are possible. Pretty much anything you can do in the DOM, you can do in Slate.</li>
  <li><b>Intuitive commands.</b> Slate documents are edited using "commands", that are designed to be high-level and extremely intuitive to write and read, so that custom functionality is as expressive as possible. This greatly increases your ability to reason about your code.</li>
  <li><b>Collaboration-ready data model.</b> The data model Slate uses—specifically how operations are applied to the document—has been designed to allow for collaborative editing to be layered on top, so you won't need to rethink everything if you decide to make your editor collaborative.</li>
  <li><b>Clear "core" boundaries.</b> With a plugin-first architecture, and a schema-less core, it becomes a lot clearer where the boundary is between "core" and "custom", which means that the core experience doesn't get bogged down in edge cases.</li>
</ul>
</div>;

export default col1;