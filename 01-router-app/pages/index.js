import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Next.js Router</h1>
      <ul>
        <li>
          <Link href="/simple">simplePage</Link>
        </li>
        <li>
          <Link href="/blog/try/some-page">blog</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/detail/12/24"}>detail</Link>
        </li>
        <li>
          <Link href={"/bla-bla/uppss/qwert"}>customUrl</Link>
        </li>
      </ul>
    </div>
  );
}
