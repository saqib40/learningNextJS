import Link from "next/link";

export default function Home() {
    return (
        <>
          <h1>Home Page it's</h1>
          <Link href="/blog">Blog</Link>
          <Link href="/products">Products</Link>
        </>
    );
}