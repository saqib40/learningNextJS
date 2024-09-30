import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product /> {/* Takes 2 seconds */}
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews /> {/* Takes 4 seconds */}
      </Suspense>
    </div>
  );
}