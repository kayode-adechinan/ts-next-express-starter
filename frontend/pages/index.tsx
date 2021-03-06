import Link from "next/link";
import Layout from "../components/Layout";
import {randomString} from "common";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      {randomString(5)}
    </p>
  </Layout>
);

export default IndexPage;
