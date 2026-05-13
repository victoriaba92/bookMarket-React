// Recibe las props usando destructuring 
import styles from "./ProductCard.module.css"

import { useState } from "react";

export function ProductCard({ nombre, autor, precio, stock, imagen }) {

    const [esFavorito, setEsFavorito] = useState(false)

    const CompraClick = () => {// Quiero que se ejecute cuando le doy clic 
        alert(`¡Agregaste ${nombre} al carrito!`);
    };

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito)
    }

    return (
        <div>
            <div className={styles.card}>
                <img src={imagen} className={styles.image} alt={nombre} />
                <h4>{nombre}</h4>
                <h5>{autor}</h5>
                <p className={styles.price}>Precio: ${precio}</p>
                <p>Stock disponible: {stock}</p>
                {/* Cuando le boton detecta un clic (onClick), se ejecuta la función */}
                <button className={styles.btnOrange} onClick={CompraClick}>Comprar</button>
                <span
                    style={
                        {
                            cursor: "pointer",
                            marginLeft: "10px"
                        }
                    }
                    onClick={marcarComoFavorito}
                >
                    {/*Operador ternario*/
                        esFavorito ? "⭐" : "☆"}
                </span>
            </div>
        </div>
    )
}
//⭐☆