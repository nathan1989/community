import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Wrapper from "../../components/wrapper/wrapper";
import ReactMarkdown from "react-markdown";

export default function Home({ markdown, playlists }) {
  return (
    <Wrapper title="Playlists">
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.slug}>
            <Link href={`/playlists/${playlist.slug}`}>
              <a>
                {playlist.date}:{playlist.title}
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
