import Head from "next/head";
import styles from "./wrapper.module.css";

const Wrapper = (props) => (
  <div className={styles.container}>
    <Head>
      <title>Community{props.title ? ` - ${props.title}` : ""}</title>
    </Head>
    <div
      className={`${styles.content}${props.isHome ? styles.contentHome : ""}`}
    >
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  </div>
);

export default Wrapper;
