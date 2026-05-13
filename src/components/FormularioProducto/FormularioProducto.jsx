function FormularioProducto({ datosForm, manejarCambio, manejarCambioImagen, manejarEnvio }) {
    console.log(datosForm);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        gap: '16px'
    };

    return (

        <form style={formStyle} onSubmit={manejarEnvio}>

            <h3>Agregar Nuevo Libro</h3>
            <div>
                <label>Nombre del Libro:</label>
                <input
                    type="text"
                    placeholder="Ej: El Morador de las tinieblas"
                    name="nombre" // Atributo clave para identificar el input
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Autor:</label>
                <input
                    type="text"
                    placeholder="Ej: H.P. Lovecraft"
                    name="autor" // Atributo clave para identificar el input
                    value={datosForm.autor}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio: $</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio" // Atributo clave
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input
                    type="file"
                    placeholder="https://..."
                    onChange={manejarCambioImagen}
                />
            </div>
            <button type="submit">Guardar Libro</button>
        </form>
    );
}

export default FormularioProducto;