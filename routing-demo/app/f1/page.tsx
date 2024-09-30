import Link from "next/link";

export default function F1() {
    return (
        <>
          <h1>F1 Page</h1>
          <div>
            <Link href="/f1/f2">F2</Link> {/*Clicking on this will take you to InterceptedF2 and refreshing that will take you to F2*/}
          </div>
        </>
    );
}