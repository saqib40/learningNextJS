import Link from "next/link";
import Image from "next/image";
//import wondersImages from "./wonders";
import wonders from "./wonders";

export default function Home() {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-blond my-4">
                New Wonders of the world
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wonders.map(({id,src,name}) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image
                          alt={name}
                          src={src}
                          className="w-full object-cover aspect-square"
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}