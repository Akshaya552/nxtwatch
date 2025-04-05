import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachList => {
        total += eachList.price * eachList.quantity
      })
      return (
        <div className="cardsummary-container">
          <div className="cardsummary-card">
            <h1 className="total-text">
              Order Total : <span className="amount">Rs {total}/-</span>
            </h1>
            <p className="items-text">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
