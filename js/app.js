window.onload = function() {
  console.log("page loaded.");
  makeCartScrollNicely();
}

function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  console.log(cart);
  Ps.initialize(cart,{
    wheelSpeed: 2,
  });
  console.log("perfect-scrollbar inited.");
}
