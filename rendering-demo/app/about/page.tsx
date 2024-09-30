import { cookies } from "next/headers";

export default function About() {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);
    console.log("This is server component");//log will be visible only on server side not in browser
    return(
        <h1>Hii from about page {new Date().toLocaleDateString()}</h1>
    );
}