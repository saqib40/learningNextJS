import { Metadata } from "next";

type Props = {
    params: {productId: string}
}

export async function generateMetadata({params}:Props):Promise<Metadata> {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        })
    })
    return {
        title: `Product ${title}`
    }
}

export default function ProductDetails({params}: Props) {
    return <h1>Details about product {params.productId}</h1>;
}