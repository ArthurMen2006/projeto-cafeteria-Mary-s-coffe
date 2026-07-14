import "../styles/CartPage.css"
import { createRequest } from "../services/RequestService"
function CartPage({cart, setCart}) {
  const count = {}

  for(let i=0; i<cart.length;i++){
    const product = cart[i]

    if(count[product.id]){
      count[product.id].quantity = count[product.id].quantity + 1
    } else{
      count[product.id]={
        id: product.id,
        name: product.name,
        price: product.price,
        quantity:1
      }
    }
  }
  const items = Object.values(count)
  
  let total=0
  for (let i=0; i<items.length; i++){
    total = total + (Number(items[i].price)*items[i].quantity)
  }

  async function finalizarPagamento() {
    for (let i=0; i < items.length; i++){
      await createRequest(items[i].id, items[i].quantity)
    }
    setCart([])
  }
  return (
    <main className="cartPage">
      <div className="cartCard">

        <div className="cartHeader">
          <h1>Velvet Brew ☕</h1>
        </div>

        <section className="cartTable">
          <div className="details detailsHeader">
            <span>Item</span>
            <span>Descrição</span>
            <span>Preço</span>
            <span>Qtd</span>
            <span>Total</span>
          </div>
          {items.map((item,index) =>(
            <div className="details" key={item.id}>
              <span>{index + 1}</span>
              <span>{item.name}</span>
              <span>R$ {Number(item.price).toFixed(2)}</span>
              <span>{item.quantity}</span>
              <span>R$ {(Number(item.price)*item.quantity).toFixed(2)}</span>
            </div>
          ))} 
        </section>

        <footer className="cartFooter">
          <h3>Total do pedido: <span>R$ {total.toFixed(2)}</span></h3>
          <button onClick={finalizarPagamento}>Finalizar pagamento</button>
        </footer>

      </div>
    </main>
  )
}

export default CartPage
