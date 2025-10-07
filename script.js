//productos
const productos = [
  {
    nombre: "Brócoli",
    precio: "S/ 4.50 por unidad",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOkVstDjrbhBbBEfIHeRlnYOpJPHtxIaYGw&s",
    descripcionLarga: `
      <p><strong>Descripción:</strong> El brócoli es una verdura rica en vitaminas C y K, fibra y antioxidantes. 
      Ayuda a fortalecer el sistema inmunológico, mejora la digestión y contribuye a la salud ósea y cardiovascular.</p>

      <p><strong>Origen / Proceso:</strong> El brócoli proviene de la región mediterránea y se cultiva principalmente en climas templados. 
      Se cosecha cuando sus cabezas están firmes y compactas, y se puede consumir crudo, al vapor, hervido o salteado.</p>

      <p><strong>Disponibilidad:</strong> Disponible.</p>

      <p><strong>Información nutricional (por 100 g):</strong></p>
      <ul>
        <li>Calorías: 34 kcal</li>
        <li>Proteínas: 2.8 g</li>
        <li>Grasas: 0.4 g</li>
        <li>Carbohidratos: 6.6 g</li>
        <li>Fibra: 2.6 g</li>
        <li>Vitamina C: 89 mg</li>
        <li>Calcio: 47 mg</li>
      </ul>
    `
  },
  {
    nombre: "Pepino",
    precio: "S/ 3.00 por unidad",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rnlsxPqeVYD3b0Zd-MszsmPpQ3WZbhupAQ&s",
    descripcionLarga: `
      <p><strong>Descripción:</strong> El pepino es una hortaliza refrescante y ligera, compuesta principalmente por agua. 
      Es bajo en calorías y rico en minerales como potasio y magnesio, ayudando a mantener la hidratación y favorecer la salud de la piel.</p>

      <p><strong>Origen / Proceso:</strong> Originario del sur de Asia, el pepino se cultiva en regiones cálidas y templadas. 
      Se recolecta antes de madurar completamente para conservar su textura crujiente y se consume crudo en ensaladas o jugos.</p>

      <p><strong>Disponibilidad:</strong> Disponible.</p>

      <p><strong>Información nutricional (por 100 g):</strong></p>
      <ul>
        <li>Calorías: 15 kcal</li>
        <li>Proteínas: 0.7 g</li>
        <li>Grasas: 0.1 g</li>
        <li>Carbohidratos: 3.6 g</li>
        <li>Fibra: 0.5 g</li>
        <li>Vitamina C: 2.8 mg</li>
        <li>Potasio: 147 mg</li>
      </ul>
    `
  },
  {
    nombre: "Lechuga",
    precio: "S/ 2.50 por unidad",
    imagen: "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/53.jpg",
    descripcionLarga: `
      <p><strong>Descripción:</strong> La lechuga es una hortaliza de hojas verdes muy ligera y refrescante. 
      Contiene agua, fibra, vitaminas A y K, y minerales que favorecen la digestión y ayudan a mantener una piel saludable.</p>

      <p><strong>Origen / Proceso:</strong> Procede del Mediterráneo y se cultiva en regiones de clima templado. 
      Se cosecha cuando las hojas están tiernas y frescas, y se consume principalmente cruda en ensaladas.</p>

      <p><strong>Disponibilidad:</strong> Disponible.</p>

      <p><strong>Información nutricional (por 100 g):</strong></p>
      <ul>
        <li>Calorías: 15 kcal</li>
        <li>Proteínas: 1.4 g</li>
        <li>Grasas: 0.2 g</li>
        <li>Carbohidratos: 2.9 g</li>
        <li>Fibra: 1.3 g</li>
        <li>Vitamina A: 7405 UI</li>
        <li>Vitamina K: 126 µg</li>
      </ul>
    `
  },
  {
    nombre: "Cebolla",
    precio: "S/ 2.00 por unidad",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3b0fucC4ZjVkPJW86tCkzK3sNzWQXCWGmjQ&s",
    descripcionLarga: `
      <p><strong>Descripción:</strong> La cebolla aporta sabor y propiedades antibacterianas. Es rica en antioxidantes y vitamina C.</p>
      <p><strong>Disponibilidad:</strong> Disponible.</p>
    `
  },
  {
    nombre: "Manzana",
    precio: "S/ 3.00 por unidad",
    imagen: "https://image.tuasaude.com/media/article/yq/tc/beneficios-de-la-manzana_59031.jpg?width=686&height=487",
    descripcionLarga: `
      <p><strong>Descripción:</strong> La manzana es rica en fibra y antioxidantes. Ayuda a regular el colesterol y mejora la digestión.</p>
      <p><strong>Disponibilidad:</strong> Disponible.</p>
    `
  },
  {
    nombre: "Plátano",
    precio: "S/ 2.80 por unidad",
    imagen: "https://bananotecnia.com/wp-content/uploads/2020/05/Banano_Hondure%C3%B1o.jpg",
    descripcionLarga: `
      <p><strong>Descripción:</strong> El plátano es una excelente fuente de potasio y energía. Ideal para deportistas y como snack saludable.</p>
      <p><strong>Disponibilidad:</strong> Disponible.</p>
    `
  },
  {
    nombre: "Naranja",
    precio: "S/ 3.50 por unidad",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdIX1f4icJWab8WXXcOFbRGqGQwfhScE8TrAzx9-pPBtu946q1lKYdHGWFtu9LmIMGGc&usqp=CAU",
    descripcionLarga: `
      <p><strong>Descripción:</strong> La naranja es rica en vitamina C, que fortalece el sistema inmunológico y mejora la absorción de hierro.</p>
      <p><strong>Disponibilidad:</strong> Disponible.</p>
    `
  },
  {
    nombre: "Fresa",
    precio: "S/ 8.00 por bandeja",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogwJ9QQKWSgUj4OHo3gPhtoKa_EO4h3N4Jg&s",
    descripcionLarga: `
      <p><strong>Descripción:</strong> La fresa es baja en calorías y rica en vitamina C, manganeso y antioxidantes.</p>
      <p><strong>Disponibilidad:</strong> Disponible.</p>
    `
  },
  {
    nombre: "Piña",
    precio: "S/ 6.00 por unidad",
    imagen: "https://actualfruveg.com/wp-content/uploads/2022/02/bea-pina-c.jpg",
    descripcionLarga: `
      <p><strong>Descripción:</strong> La piña contiene bromelina, una enzima que ayuda a la digestión y reduce la inflamación.</p>
      <p><strong>Disponibilidad:</strong> Disponible.</p>
    `
  },
  {
    nombre: "Sandía",
    precio: "S/ 5.00 por porción",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJLQlG5CxuU8PkH8xiFDXicA0AZLXZqc_Z33LrYb1B8384rFdgVgLlik_8n5Oo7KWXF0&usqp=CAU",
    descripcionLarga: `
      <p><strong>Descripción:</strong> La sandía es refrescante y rica en agua, vitamina A y licopeno. Ideal para hidratarse en verano.</p>
      <p><strong>Disponibilidad:</strong> Disponible.</p>
    `
  }
];

// Crear tarjetas usando índice (seguro)
function crearTarjeta(producto, index) {
  return `
    <div class="card text-center" style="width: 20rem; margin: 1rem;">
      <img src="${producto.imagen.trim()}" alt="${producto.nombre}" class="card-img-top" style="height: 180px; object-fit: cover;">
      <div class="card-body d-flex flex-column align-items-center">
        <h5 class="card-title">${producto.nombre}</h5>
        <div class="d-flex gap-2 mt-2">
          <button class="btn btn-success ver-mas" data-index="${index}">Ver más</button>
          <button class="btn btn-outline-success comprar">Comprar</button>
        </div>
      </div>
    </div>
  `;
}

// Renderizar productos
document.addEventListener('DOMContentLoaded', function () {
  const contenedor = document.getElementById("cards-container");
  if (contenedor) {
    contenedor.innerHTML = productos.map((producto, index) => crearTarjeta(producto, index)).join("");
  }
  // 🔍 BARRA DE BÚSQUEDA (funcional sin romper el modal)
const buscador = document.getElementById("buscador");
if (buscador) {
  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    // Filtrar productos
    const filtrados = productos.filter(p =>
      p.nombre.toLowerCase().includes(texto)
    );

    // Limpiar y volver a renderizar
    contenedor.innerHTML = "";

    filtrados.forEach(prod => {
      const index = productos.indexOf(prod); // mantiene el índice original
      contenedor.innerHTML += crearTarjeta(prod, index);
    });
  });
}

  // Delegación de eventos (funciona para elementos dinámicos)
  document.addEventListener('click', function(e) {
    // Ver más
    if (e.target.classList.contains('ver-mas')) {
      const index = e.target.dataset.index;
      const p = productos[index];
      
      document.getElementById("detalleProductoModalLabel").textContent = p.nombre;
      document.getElementById("detalle-imagen").src = p.imagen.trim();
      document.getElementById("detalle-descripcion").innerHTML = 
        `<p><strong>Precio:</strong> ${p.precio}</p>${p.descripcionLarga}`;
      
      const modal = new bootstrap.Modal(document.getElementById('detalleProductoModal'));
      modal.show();
    }

    // Comprar
    if (e.target.classList.contains('comprar')) {
      alert("Producto agregado al carrito 🛒");
    }
  });

  
  // 🛒 --- CARRITO COMPLETO ---
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos
const carritoContador = document.getElementById("carrito-contador");
const carritoLista = document.getElementById("carrito-lista");
const btnVaciar = document.getElementById("vaciar-carrito");

// Actualiza la vista del carrito
function actualizarCarrito() {
  if (carritoContador) carritoContador.textContent = carrito.length;
  if (carritoLista) {
    carritoLista.innerHTML = carrito.map((p, i) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${p.nombre}
        <button class="btn btn-sm btn-danger eliminar-item" data-index="${i}">🗑</button>
      </li>
    `).join("");
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Al hacer clic en "Comprar"
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("comprar")) {
    const index = e.target.closest(".card").querySelector(".ver-mas")?.dataset.index;
    const producto = productos[index];
    carrito.push(producto);
    actualizarCarrito();
  }
});

// Eliminar un producto individual
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("eliminar-item")) {
    const i = e.target.dataset.index;
    carrito.splice(i, 1);
    actualizarCarrito();
  }
});

// Vaciar todo el carrito
if (btnVaciar) {
  btnVaciar.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
  });
}

// Mostrar el carrito guardado al cargar
document.addEventListener("DOMContentLoaded", actualizarCarrito);

  // Limpiar modal al cerrar
  const modalEl = document.getElementById('detalleProductoModal');
  if (modalEl) {
    modalEl.addEventListener('hidden.bs.modal', function () {
      document.getElementById("detalle-descripcion").innerHTML = "";
    });
  }

  // ✅ FORMULARIO DE CONTACTO: ahora SÍ se ejecuta
  const form = document.getElementById("form-contacto");
  const msg = document.getElementById("mensaje-enviado");
  
  if (form && msg) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      msg.style.display = "block";
      this.reset();
    });
  }
});