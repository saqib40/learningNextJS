// function solely for client side use
import "client-only";
export const clientSideFunction = () => {
    console.log(
        `use window object,
        use localStorage`
    );
    return "client result";
}