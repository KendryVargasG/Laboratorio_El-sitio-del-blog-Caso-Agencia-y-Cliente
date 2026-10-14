// ===== Datos del negocio =====
const HORA_APERTURA = 8;
const HORA_CIERRE = 19;

const productos = [
    { nombre: "Portátil HP Omnibook 14-hu0050la Intel Core 5", descripcion: "Descripción: Una laptop delgada y moderna con pantalla antireflejante de 14 pulgadas (resolución 1920x1200). Está equipada con un procesador Intel Core 5, 8 GB de memoria RAM y un disco de estado sólido (SSD) de 512 GB. Ofrece un gran equilibrio entre rendimiento diario y portabilidad.", precio: 1199000 },
    { nombre: "Portátil Lenovo V14 G4 AMN AMD Ryzen 5", descripcion: "Descripción: Computador portátil de 14 pulgadas con resolución Full HD. Destaca por su alta capacidad de memoria multitarea gracias a sus 16 GB de RAM y su almacenamiento rápido SSD de 512 GB. Está potenciado por un procesador AMD Ryzen 5 7520U, lo que lo hace perfecto para el estudio o trabajo corporativo.", precio: 2119000 },
    { nombre: "HP 24-cr0332la Intel Core i3", descripcion: "Descripción: Método V60, notas a panela y naranja.Descripción: Un equipo de escritorio compacto tipo 'All-in-One' con una gran pantalla IPS Full HD de 23.8 pulgadas. Ideal para el hogar o la oficina ya que todo el computador está integrado detrás del monitor. Cuenta con procesador Intel Core i3-N300, 8 GB de RAM, un almacenamiento SSD de 512 GB e incluye teclado y mouse inalámbricos.", precio: 1820000 },
    { nombre: "Janus AMD RYZEN 3 3200G", descripcion: "Descripción: Computadora de torre tradicional de la marca colombiana Janus. Viene acompañada de un generoso monitor de 27 pulgadas IPS a 144Hz ideal para tareas multimedia. En su interior lleva un procesador AMD Ryzen 3 con gráficos integrados Radeon Vega 8, 8 GB de memoria RAM y un disco de estado sólido SSD de 512 GB.", precio: 1897000 },
];

// ===== Lógica del negocio =====
function estaAbierto(hora) {
    return hora >= HORA_APERTURA && hora < HORA_CIERRE;
}

function formatearPrecio(valor) {
    return "$" + valor.toLocaleString("es-CO");
}

// ===== Conexión con la página (DOM) =====
function mostrarEstado() {
    const estado = document.querySelector("#estado");
    const horaActual = new Date().getHours();

    if (estaAbierto(horaActual)) {
        estado.textContent = "Abierto ahora. Cerramos a las 7:00 p. m.";
        estado.classList.add("abierto");
    } else {
        estado.textContent = "Cerrado. Abrimos a las 7:00 a. m.";
        estado.classList.add("cerrado");
    }
}

function mostrarCatalogo() {
    const menu = document.querySelector("#menu");
    let html = "";

    for (const producto of productos) {
        html += `
            <li class="producto">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <span class="precio">${formatearPrecio(producto.precio)}</span>
            </li>`;
    }

    menu.innerHTML = html;
}

mostrarEstado();
mostrarCatalogo();