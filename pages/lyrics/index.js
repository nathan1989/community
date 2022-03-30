import fs from "fs";
import matter from "gray-matter";
import Wrapper from "../../components/wrapper/wrapper";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/Playlists.module.css";
import lyricStyles from "../../styles/Lyrics.module.css";
import Link from "next/link";

export default function Lyrics({ markdown, playlists }) {
  return (
    <Wrapper title="Lyrics">
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <ul className={`${styles.playlists} ${lyricStyles.lyrics}`}>
        {playlists.map((playlist) => (
          <li key={playlist.slug}>
              <Link href={`/lyrics/${playlist.slug}`}>
              <a>
                <h3 className={styles.title}>{playlist.title}</h3>
                <p className={styles.subtitle}>{playlist.subtitle}</p>
              </a>
              </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export async function getStaticProps() {
  // Get data for playlists landing page
  const fileContent = matter(
    fs.readFileSync("./content/pages/lyrics.md", "utf8")
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
