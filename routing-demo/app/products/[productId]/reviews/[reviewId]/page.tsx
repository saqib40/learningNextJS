//contains review of specific product
"use client";
import {notFound} from "next/navigation";

function getRandomInt(count: number): number {
    return Math.floor(Math.random()*count);
}

export default function ReviewDetail({params}: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    const random : number = getRandomInt(2);
    console.log(random);
    if(random == 1) {
        throw new Error("Error happened");
    }
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>For product {params.productId} review {params.reviewId}</h1>
    );
}