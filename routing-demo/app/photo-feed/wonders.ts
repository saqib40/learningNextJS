import { StaticImageData } from "next/image";

import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.png";
import photo7 from "./photos/7.png";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wondersImages : WonderImage[] = [
    {
        id: "1",
        name: "Some Image 1",
        src: photo1,
        photographer: "sodhi",
        location: "Jammu"
    },
    {
        id: "2",
        name: "Some Image 2",
        src: photo2,
        photographer: "saqib",
        location: "Srinagar"
    },
    {
        id: "3",
        name: "Some Image 3",
        src: photo3,
        photographer: "Ginny",
        location: "Bangalore"
    },
    {
        id: "4",
        name: "Some Image 4",
        src: photo4,
        photographer: "Hamza",
        location: "Bemina"
    },
    {
        id: "5",
        name: "Some Image 5",
        src: photo5,
        photographer: "Deep",
        location: "Andaman"
    },
    {
        id: "6",
        name: "Some Image 6",
        src: photo6,
        photographer: "Tajamul",
        location: "Dhaka"
    },
    {
        id: "7",
        name: "Some Image 7",
        src: photo7,
        photographer: "Sanchita",
        location: "Chattisgarh"
    }
];

export default wondersImages;