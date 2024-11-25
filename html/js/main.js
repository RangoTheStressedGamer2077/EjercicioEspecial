document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.querySelector('.btn-primary');
    const productsContainer = document.querySelector('.row');
  
    // Función para cargar los productos
    const loadProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Error al obtener los productos: ${response.status}`);
        }
        const products = await response.json();
  
        // Limpiar el contenedor
        productsContainer.innerHTML = '';
  
        // Llenar las tarjetas con los productos
        products.slice(0, 9).forEach(product => {
          const card = `
            <div class="col">
              <div class="card shadow-sm">
                <img src="${product.image}" class="bd-placeholder-img card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description.slice(0, 100)}...</p>
                  <p class="card-text"><strong>$${product.price}</strong></p>
                </div>
              </div>
            </div>
          `;
          productsContainer.innerHTML += card;
        });
      } catch (error) {
        console.error('Error al cargar productos:', error);
        productsContainer.innerHTML = '<p>Error al cargar los productos. Intenta nuevamente.</p>';
      }
    };
  
    // Asociar el evento click al botón
    loadButton.addEventListener('click', loadProducts);
  });
  
