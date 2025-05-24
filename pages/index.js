import React from "react";

export async function getServerSideProps(context) {
  const { query } = context;
  const userInput = query.cmd || "";

  let result = "";

  try {
    // **Vulnerable eval**: executes user-supplied JS code server-side!
    result = eval(userInput);
  } catch (e) {
    result = "Error: " + e.message;
  }

  return {
    props: { result },
  };
}

export default function Home({ result }) {
  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>Vulnerable Next.js SSR Injection Demo</h1>
      <p>
        Run with URL query param <code>?cmd=YOUR_JS_CODE</code> to execute
        server-side JS.
      </p>
      <h2>Result:</h2>
      <pre>{String(result)}</pre>
    </div>
  );
}
