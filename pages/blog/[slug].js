// import fs from "fs";
import ReactMarkdown from "react-markdown";
// import matter from "gray-matter";
import Wrapper from "../../components/wrapper/wrapper";
import styles from "../../styles/Lyrics.module.css";

export default function Blog({ frontmatter, markdown }) {
  return (
    <Wrapper title="Blog">
      <h2>{frontmatter.title}</h2>
      <div className={styles.lyricContent}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </Wrapper>
  );
}

export async function getStaticProps({ params: { slug } }) {
  // const fileContent = matter(
  //   fs.readFileSync(`./content/blog/${slug}.md`, "utf8")
  // );
  // let frontmatter = fileContent.data;
  // const markdown = fileContent.content;

  // return {
  //   props: { frontmatter, markdown },
  // };
}
