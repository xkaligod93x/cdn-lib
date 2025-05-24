import React from 'react';

export default function Home({ result }) {
  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      <pre>{result}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const userInput = query.cmd || "";

  let result = "";

  try {
    // WARNING: eval is dangerous and should never be used with user input in real apps
    const output = eval(userInput);
    try {
      result = JSON.stringify(output, null, 2);
    } catch {
      result = String(output);
    }
  } catch (e) {
    result = "Error: " + e.message;
  }

  return {
    props: { result },
  };
}
