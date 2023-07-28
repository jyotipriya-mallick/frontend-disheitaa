import React from 'react'

function Home() {
  return (
    <>
      <div class="active-order">
        <div class="say">
          view tokens
        </div>
          <p class="zero-tokens">Order your first dish now</p>
        <div class="tokens">
          <div class="token" id="token" data-modal-target="#qr-pop">
            <p class="number"> token.number </p>
            <div class="list">
              <p class="item"> item.food.item <span class="quantity">xitem.quantity</span></p>
            </div>
            <div class="qr" id="qr">
              <img  loading="lazy" class="qr-icon" src="https://cdn-icons-png.flaticon.com/512/6380/6380112.png" alt="" />
            </div>
            <p class="status">
                Ready
                Preparing
                Rejected
                Unknown State
            </p>
          </div>
        </div>
      </div>

      
      <div class="menu-items">
        <div class="menu-item">
          <div class="inner">
              <div class="item-image">
                  <img loading="lazy" src="../assets/nav-bg.jpg" alt="" />
              </div>
              <div class="details">
                  <div class="name-price">
                      <div class="name">  </div>
                      <div class="price"> ₹ </div>
                  </div>
                  <div class="before cart-input">
                      <button class="item-add" disabled >ADD </button>
                      <button class="item-add">ADD </button>
                  </div>
                      <p class="stock-out-txt" >stock out</p>
                      <p class="stock-out-txt" >stock out</p>
              </div>
          </div>
        </div>
        <div class="null-item">no items avaliable yet</div>
      </div>
    </>
  )
}

export default Home