import Link from "next/link";
import styles from "../styles/Home.module.css";
import fs from "fs";
import matter from "gray-matter";
import Wrapper from "../components/wrapper/wrapper";

export default function Home(props) {
  const navItems = [
    { href: "/playlists", label: "Playlists" },
    { href: "/lyrics", label: "Lyrics" },
  ];
  return (
    <Wrapper isHome>
      <img src="https://via.placeholder.com/450" alt="Community" />
      <div className={styles.details}>
        <p>
          <span>{props.day}</span>
          <span>{props.times}</span>
        </p>
        <p>{props.location}</p>
      </div>
      <ul className={styles.links}>
        {navItems.map((blog, index) => (
          <li key={index}>
            <Link href={blog.href}>
              <a className="h2">{blog.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const fileContent = matter(
    fs.readFileSync("./content/pages/home.md", "utf8")
  );
  let frontmatter = fileContent.data;

  return {
    props: { ...frontmatter },
  };
}
