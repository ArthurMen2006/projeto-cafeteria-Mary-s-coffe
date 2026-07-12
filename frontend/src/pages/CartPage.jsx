import "../styles/CartPage.css"

function CartPage() {
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

          <div className="details">
            <span>1</span>
            <span>Café Espresso</span>
            <span>R$ 5,00</span>
            <span>5</span>
            <span>R$ 25,00</span>
          </div>
          <div className="details">
            <span>2</span>
            <span>n sei</span>
            <span>R9,00</span>
            <span>2</span>
            <span>R$18,00</span>
          </div>
        </section>

        <footer className="cartFooter">
          <h3>Total do pedido: <span>R$ 43,00</span></h3>
          <button>Finalizar pagamento</button>
        </footer>

      </div>
    </main>
  )
}

export default CartPage
