import Link from "next/link";

export default function F4() {
    return (
        <>
          <h1>F4 Page</h1>
          <div>
            <Link href="/f1/f3">F3</Link> {/*Clicking on this will take you to InterceptedF3 and refreshing that will take you to F3*/}
            <Link href="/about">About</Link>
          </div>
        </>
    );
}