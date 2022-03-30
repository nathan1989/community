import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Wrapper from "../../components/wrapper/wrapper";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/Playlists.module.css";

export default function Home({ markdown, playlists }) {
  return (
    <Wrapper title="Playlists">
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <ul className={styles.playlists}>
        {playlists.map((playlist) => (
          <li key={playlist.slug}>
              <a href={playlist.link} target="_blank">
                <img src="https://via.placeholder.com/150x120" alt="Playlist" />
                <h3 className={styles.title}>{playlist.title}</h3>
                <p className={styles.subtitle}>{playlist.subtitle}</p>
              </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export async function getStaticProps() {
  // Get data for playlists landing page
  const fileContent = matter(
    fs.readFileSync("./content/pages/playlists.md", "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  // List of files in playlists folder
  const filesInPlaylists = fs.readdirSync("./content/playlists");

  // Get the front matter and slug (the filename without .md) of all files
  const playlists = filesInPlaylists.map((filename) => {
    const file = fs.readFileSync(`./content/playlists/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      frontmatter,
      markdown,
      playlists,
    },
  };
}
