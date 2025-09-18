import prettier from "prettier/standalone";
import parserJava from "prettier-plugin-java";

export function formatJava(code) {
  if (!code || typeof code !== "string") return "// Invalid or empty Java code";

  try {
    return prettier.format(code, {
      parser: "java",
      plugins: [parserJava],
    });
  } catch (err) {
    console.error("Java code formatting failed:", err);
    return code; // fallback to original if formatting fails
  }
}


