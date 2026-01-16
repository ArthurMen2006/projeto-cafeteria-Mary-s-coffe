import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/ProductsService"

function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const data = await getAllProducts()
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <div>
      <h1>Produtos - Mary’s Coffee</h1>

      {products.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductsPage
