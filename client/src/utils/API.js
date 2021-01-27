/////////////////
/////////////////
/////////////////
/////////////////
/////////////////
// total work in progress, trying to apply Cart Croc API to store stuff in MongoDB
/////////////////
/////////////////
/////////////////
/////////////////
/////////////////
/* eslint-disable import/no-anonymous-default-export */
export default{
  getAllUsers: function () {
    return fetch("/users").then(res => res.json())
  },
  saveUser: function (user) {
    fetch("/saveUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
  },
  saveItem: function (user) {
    fetch("/saveItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
  },
  updateItem: function (itemData, id) {
    console.log(itemData)
    fetch(`/updateItem/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData)
    }).then(res => res.json());
  },
  getAllItems: function () {
    return fetch("/inventory").then(res => res.json())
  },
  getItem: function (id) {
    return fetch(`/getItem/${id}`).then(res => res.json()
    ).catch((error) => {
      console.log(error);
    })
  },
  getItemByName: function (name) {
    return fetch(`/getItemName/${name}`).then(res => res.json()
    ).catch((error) => {
      console.log(error);
    })
  },
  //===================================================================
  // Cart API routes
  getCartItem: function (id) {
    return fetch(`/cartEdit/${id}`).then(res => res.json()
    ).catch((error) => {
      console.log(error);
    })
  },


  updateCartItemSellQuantity: function (itemData, id) {
    fetch(`/updateCartItem/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData)
    }).then(res => res.json());
  },

  getAllCartItems: function () {
    return fetch("/cart").then(res => res.json())
  },

  deleteCartItem: function (id) {
    fetch('/deleteCartItem/' + id, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
  },

  //===================================================================
  // Order History API routes

  getSingleOrder: function (id) {
    return fetch(`/orderHistory/${id}`).then(res => res.json()
    ).catch((error) => {
      console.log(error);
    })
  },

  saveOrderHistory: function (order) {
    console.log(order);
    fetch("/saveOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order)
    })
  },

  updateOrderHistory: function (itemData, id) {
    fetch(`/updateCartItem/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData)
    }).then(res => res.json());
  },

  getAllOrderHistory: function () {
    return fetch("/orders").then(res => res.json())
  },

  deleteOrderHistory: function (id) {
    fetch('/deleteCartItem/' + id, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
  },
};
