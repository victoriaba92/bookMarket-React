import { ProductList } from "../ProductList/ProductList";

// export function ProductListContainer({ Mensaje }) {
//     // const productos = [
//     //     { id: '1378', imagen: '/images/la-zona-muerta.jfif', nombre: 'La Zona Muerta', autor: 'Stephen King', precio: 25000, stock: 15 },
//     //     { id: '1379', imagen: '/images/el-marciano.jpg',nombre: 'El Marciano', autor: ' Andy Weir', precio: 37000, stock: 25 },
//     //     { id: '1380', imagen: '/images/el-hobbit.jpg',nombre: 'El Hobbit', autor: 'J.R.R Tolkien', precio: 35000, stock: 50 }];
//     return (
//         <div>
//             <h2>{Mensaje}</h2>
//             <div className="container">
//                 <div className="row">
//                     <ProductList productos={productos} />
//                 </div>
//             </div>
//         </div>
//     );
// }
// //: ItemListContainer imprime un mensaje en h2 y obtiene los datos que luego se
// //los pasa a su hijo, ItemList. No hace más. 

import { useEffect, useState } from "react";
export function ProductListContainer({ Mensaje, limit }) {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar');
                return res.json();
            })
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                setError(err.message);
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando libros...</p>;
    if (error) return <p>Error: {error}</p>;

    const productosMostrar = limit
        ? productos.slice(0, limit)
        : productos;

    return (
        <div className="container">
            <h2>{Mensaje}</h2>

            <div className="row">
                <ProductList productos={productosMostrar} />
            </div>
        </div>
    );
}