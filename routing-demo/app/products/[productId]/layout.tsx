function getRandomInt(count: number): number {
  return Math.floor(Math.random()*count);
}

export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    //const random : number = getRandomInt(2);
    //console.log(random);
    //if(random == 1) {
    //    throw new Error("Error happened");
    //}
    return (
        <>
          {children}
          <h1>Features Products</h1>
        </>
    )
  }