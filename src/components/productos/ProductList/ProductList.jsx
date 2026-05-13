import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList({ productos }) {
    return (
        <>
            {productos.map(prod => (
                <div key={prod.id} className="col-12 col-md-4 mb-4">
                    <ProductCard {...prod} />
                </div>
            ))}
        </>
    );
}