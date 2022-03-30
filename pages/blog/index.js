import fs from "fs";
import matter from "gray-matter";
import Wrapper from "../../components/wrapper/wrapper";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";

export default function Blog({ blogs }) {
  return (
    <Wrapper title="Blog">
      {blogs.length === 0 && <p className={styles.inProgress}>Coming soon</p>}
      <ul className={styles.playlists}>
        {blogs.map((playlist) => (
          <li key={playlist.slug}>
              <Link href={`/blog/${playlist.slug}`}>
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

  // // List of files in blogs folder
  // const filesInBlogs = fs.readdirSync("./content/blog");

  // // Get the front matter and slug (the filename without .md) of all files
  // const blogs = filesInBlogs.map((filename) => {
  //   const file = fs.readFileSync(`./content/blog/${filename}`, "utf8");
  //   const matterData = matter(file);

  //   return {
  //     ...matterData.data, // matterData.data contains front matter
  //     slug: filename.slice(0, filename.indexOf(".")),
  //   };
  // });

  return {
    props: {
      blogs: [],
    },
  };
}
