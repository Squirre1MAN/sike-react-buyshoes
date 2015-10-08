


window.onload = function() {
  console.log("page loaded.");
  makeCartScrollNicely();
  toggleRightSideBar();
}

function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart,{
    wheelSpeed: 2,
  });
  console.log("perfect-scrollbar inited.");
}

function toggleRightSideBar() {
  var $toggle = document.querySelector(".site__right-sidebar-toggle");
  if ($toggle) {
    $toggle.addEventListener("click",function() {
      document.body.classList.toggle("js-show-right-sidebar");
      console.log("Toggled");
    });
  }
  else {
    console.log("$toggle element not found");
  }
}
