import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
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
  const fileContent = matter(
    fs.readFileSync(`./content/blog/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blog");

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
