import fs from "fs";
import matter from "gray-matter";
import Wrapper from "../components/wrapper/wrapper";
import ReactMarkdown from "react-markdown";

export default function Decided({ frontmatter, markdown }) {
  return (
    <Wrapper title="I Have Decided">
      {frontmatter.title && <h2>{frontmatter.title}</h2>}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const fileContent = matter(
    fs.readFileSync("./content/pages/i-have-decided.md", "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}
