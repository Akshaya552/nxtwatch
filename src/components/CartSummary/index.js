import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => {
  const [iscod, setCod] = useState(true)
  const [isConfirmed, setConfirmedStatus] = useState(false)
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let total = 0
        cartList.forEach(eachList => {
          total += eachList.price * eachList.quantity
        })

        const changeButtonStatus = () => {
          setConfirmedStatus(true)
        }

        const oncodMarked = () => {
          setCod(false)
        }

        return (
          <div className="cardsummary-container">
            <div className="cardsummary-card">
              <h1 className="total-text">
                Order Total : <span className="amount">Rs {total}/-</span>
              </h1>
              <p className="items-text">{cartList.length} Items in cart</p>

              <Popup
                modal
                trigger={
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                }
              >
                {close => (
                  <div className="modal-container">
                    {!isConfirmed && (
                      <>
                        <h1 className="total-text">
                          Order Total :
                          <span className="amount">Rs {total}/-</span>
                        </h1>
                        <p className="items-text">
                          {cartList.length} Items in Cart
                        </p>
                        <p className="cart-product-title">
                          select one of the payment methods :
                        </p>
                        <label
                          className="disbaled-label"
                          htmlFor="card"
                          disabled
                        >
                          <input
                            type="radio"
                            disabled
                            name="payment"
                            id="card"
                          />
                          Card
                        </label>
                        <br />
                        <label
                          className="disbaled-label"
                          htmlFor="net"
                          disabled
                        >
                          <input
                            type="radio"
                            name="payment"
                            id="net"
                            disabled
                          />
                          Net Banking
                        </label>
                        <br />
                        <label
                          className="disbaled-label"
                          htmlFor="upi"
                          disabled
                        >
                          <input
                            type="radio"
                            name="payment"
                            id="upi"
                            disabled
                          />
                          UPI
                        </label>
                        <br />
                        <label
                          className="disbaled-label"
                          htmlFor="wallet"
                          disabled
                        >
                          <input
                            type="radio"
                            name="payment"
                            id="wallet"
                            disabled
                          />
                          Wallet
                        </label>
                        <br />
                        <label htmlFor="cod" onClick={oncodMarked}>
                          <input type="radio" name="payment" id="cod" /> Cash on
                          Delivery
                        </label>
                        <br />
                        <button
                          type="button"
                          className="checkout-button"
                          disabled={iscod}
                          onClick={changeButtonStatus}
                        >
                          Confirm Order
                        </button>
                      </>
                    )}
                    {isConfirmed && (
                      <>
                        <p className="cart-product-title">
                          Your order has been placed successfully
                        </p>
                        <button
                          type="button"
                          className="checkout-button"
                          onClick={() => close()}
                        >
                          Close
                        </button>
                      </>
                    )}
                  </div>
                )}
              </Popup>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
