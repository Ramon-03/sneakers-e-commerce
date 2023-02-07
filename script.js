const menu = document.querySelector(".hamburger-container");
const mobile_nav = document.querySelector(".mobile-nav");
const dark = document.querySelector(".dark");
const thumbnail = document.querySelectorAll(".img-thumb");
const lightbox = document.querySelector(".lightbox");
const close_button = document.querySelector(".close");
const buttons = document.querySelectorAll("[data-slider-button]");
const lightbox_thumb = document.querySelectorAll(".lb-img-thumb");
const lb_thumb_parent = document.querySelectorAll(".lightbox-thumbnail");
const main_image = document.querySelectorAll(".main-image");
const cartLayout = document.querySelector(".cart-layout");
const cartNotif = document.querySelector(".cart-notif");
const cartIcon = document.querySelector(".nav-cart");

/* --------- main-image slider --------- */
thumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const slides = document.querySelector("[data-main-slides]");
    const activeSlide = slides.querySelector("[data-main-active]");
    if (e.target.classList.contains("thumb-1")) {
      delete activeSlide.dataset.mainActive;
      slides.children[0].dataset.mainActive = true;
    } else if (e.target.classList.contains("thumb-2")) {
      delete activeSlide.dataset.mainActive;
      slides.children[1].dataset.mainActive = true;
    } else if (e.target.classList.contains("thumb-3")) {
      delete activeSlide.dataset.mainActive;
      slides.children[2].dataset.mainActive = true;
    } else {
      delete activeSlide.dataset.mainActive;
      slides.children[3].dataset.mainActive = true;
    }
  });
});

/* --------- thumbnail active --------- */
thumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const container = document.querySelector(".thumbnail-container");
    const currentBorder = e.target.closest(".thumbnail");
    const currentOpaque = document.querySelector(".opaque");
    if (
      currentBorder.classList.contains("active") &&
      e.target.classList.contains("opaque")
    ) {
      return;
    } else {
      currentOpaque.classList.remove("opaque");
      container.querySelector(".active").classList.remove("active");
      currentBorder.classList.add("active");
      e.target.classList.add("opaque");
    }
  });
});
/* --------- lightbox activation --------- */
main_image.forEach((image) => {
  image.addEventListener("click", (e) => {
    cartLayout.classList.remove("active");
    lightbox.classList.add("is-active");
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    const thumb_border = document.querySelector(".lb-active");
    const thumb_opaque = document.querySelector(".lb-opaque");
    delete activeSlide.dataset.active;
    slides.children[0].dataset.active = true;
    thumb_border.classList.remove("lb-active");
    thumb_opaque.classList.remove("lb-opaque");
    lightbox_thumb[0].classList.add("lb-opaque");
    lb_thumb_parent[0].classList.add("lb-active");
  });
});
/* --------- lightbox deactivation --------- */
lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("is-active");
});

close_button.addEventListener("click", (e) => {
  lightbox.classList.remove("is-active");
});

/* --------- lightbox image slider --------- */
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const offset = button.dataset.sliderButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    let previous = newIndex - offset;
    if (previous < 0) previous = lightbox_thumb.length - 1;
    console.log(previous);
    if (previous >= lightbox_thumb.length) previous = 0;
    lightbox_thumb[previous].classList.remove("lb-opaque");
    lb_thumb_parent[previous].classList.remove("lb-active");
    lightbox_thumb[newIndex].classList.add("lb-opaque");
    lb_thumb_parent[newIndex].classList.add("lb-active");
  });
});
/* --------- lightbox thumbnail slider --------- */
lightbox_thumb.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    if (e.target.classList.contains("thumb-1")) {
      delete activeSlide.dataset.active;
      slides.children[0].dataset.active = true;
    } else if (e.target.classList.contains("thumb-2")) {
      delete activeSlide.dataset.active;
      slides.children[1].dataset.active = true;
    } else if (e.target.classList.contains("thumb-3")) {
      delete activeSlide.dataset.active;
      slides.children[2].dataset.active = true;
    } else {
      delete activeSlide.dataset.active;
      slides.children[3].dataset.active = true;
    }
  });
});

/* --------- lightbox thumbnail active --------- */
lightbox_thumb.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const container = document.querySelector(".lightbox-thumbnail-container");
    const currentBorder = e.target.closest(".lightbox-thumbnail");
    const currentOpaque = document.querySelector(".lb-opaque");
    if (
      currentBorder.classList.contains("lb-active") &&
      e.target.classList.contains("lb-opaque")
    ) {
      return;
    } else {
      currentOpaque.classList.remove("lb-opaque");
      container.querySelector(".lb-active").classList.remove("lb-active");
      currentBorder.classList.add("lb-active");
      e.target.classList.add("lb-opaque");
    }
  });
});

/* --------- mobile navigation toggle --------- */
menu.addEventListener("click", (e) => {
  menu.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
  dark.classList.toggle("is-active");
});

dark.addEventListener("click", (e) => {
  menu.classList.remove("is-active");
  mobile_nav.classList.remove("is-active");
  dark.classList.remove("is-active");
});

/* --------- Nav Cart Toggle --------- */
cartIcon.addEventListener("click", (e) => {
  cartLayout.classList.toggle("active");
});
/* --------- Add to cart event --------- */
const plus = document.querySelector(".add");
const minus = document.querySelector(".remove");
let itemNumber = document.querySelector(".number");
const addToCartButton = document.querySelector(".add-to-cart");

plus.addEventListener("click", (e) => {
  let max = 10;
  let updatedNumber = parseInt(itemNumber.innerText);
  updatedNumber++;
  itemNumber.innerText = updatedNumber;

  if (itemNumber.innerText > max) {
    alert("only 10 pairs can be ordered at once.");
    itemNumber.innerText = max;
  }
});

minus.addEventListener("click", (e) => {
  let min = 0;
  let updatedNumber = itemNumber.innerText;
  updatedNumber--;
  itemNumber.innerText = updatedNumber;

  if (itemNumber.innerText < min) {
    itemNumber.innerText = min;
  }
});

addToCartButton.addEventListener("click", (e) => {
  const title = document.querySelector(".product-name").innerText;
  const price = document.querySelector(".product-price").innerText;
  const imageSrc = document.querySelector(".thumb-1").src;
  let number = itemNumber.innerText;
  const priceTotal = parseFloat(price.replace("$", ""));
  let total = priceTotal * parseInt(number);
  if (number == 0) {
    alert("please add some items first");
    return;
  } else {
    addItemToCart(title, price, imageSrc, number, total);
  }
});

function addItemToCart(title, price, imageSrc, number, total) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-row");
  const cartContent = document.querySelector(".cart-item");
  const defaultText = cartContent.querySelector(".default-text");
  const presentItem = document.querySelector(".cart-item-title");

  if (defaultText) defaultText.remove();
  if (presentItem) {
    itemNumber.innerText = String(0);
    alert("Item already added to the cart!");
    return;
  }
  const cartRowContents = `
  <div class="cart-image-container">
    <img
      src="${imageSrc}"
      alt="cart-img"
      class="cart-image"
    />
  </div>
  <div class="cart-item-info">
    <p class="cart-item-title">${title}</p>
    <p class="cart-item-price">${price}</p>
    <span class="multiplier">x ${number}</span>
    <span class="total">$${total.toFixed(2)}</span>
  </div>
  <div class="cart-btn-danger">
    <img src="/images/icon-delete.svg" alt="trash" class="trash" />
  </div>
  <div class="checkout-btn">Checkout</div>`;
  cartItem.innerHTML = cartRowContents;
  cartContent.append(cartItem);
  cartNotif.classList.add("active");
  cartNotif.innerText = number;
  itemNumber.innerText = String(0);
  const trash = document.querySelector(".cart-btn-danger");

  trash.addEventListener("click", removeCartItem);
}

function removeCartItem() {
  const newDefault = document.createElement("p");
  newDefault.innerText = `Your cart is empty.`;
  newDefault.classList.add("default-text");
  const toRemove = document.querySelector(".cart-row");
  toRemove.remove();
  cartNotif.classList.remove("active");
  cartNotif.innerText = 0;
  document.querySelector(".cart-item").append(newDefault);
}
