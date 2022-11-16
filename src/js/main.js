// Custom scripts



let html = document.querySelector("html");
let links = document.getElementsByClassName("menu__item a");
onload = function () {
  for (let lnk = document.links, j = 0; j < lnk.length; j++)
    if (lnk[j].href == document.URL) lnk[j].classList.add("_active");

  event.preventDefault();
};

// scroll function

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.querySelector(".topBox").classList.add("_active");
  } else {
    document.querySelector(".topBox").classList.remove("_active");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
  if (document.querySelector(".menu__body").classList.contains("_active")) {
    document.querySelector(".contacts__header").classList.add("_active");
  } else {
    document.querySelector(".contacts__header").classList.remove("_active");
  }
}
burgerMenu.addEventListener("click", burger);

// fixed
function fixedNav() {
  const nav = document.querySelector(".header");
  const items = document.querySelector(".header__items");
  const logo = document.querySelector(".header__logo-image");
  const itemModify = document.querySelector(".item-modify");
  const menuLink = document.querySelectorAll(".menu__link");
  // here we indicate in pixels how much we need to scroll so that our menu becomes fixed
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    document.body.classList.add("_top");
    items.classList.add("_height");
    logo.classList.add("_logo");
    itemModify.classList.add("_modify");
    menuLink.forEach((link) => {
      link.classList.add("_fontSize");
    });
  } else {
    document.body.classList.remove("_top");

    items.classList.remove("_height");
    logo.classList.remove("_logo");
    itemModify.classList.remove("_modify");
    menuLink.forEach((link) => {
      link.classList.remove("_fontSize");
    });
  }
}
window.addEventListener("scroll", fixedNav);

// Модальное окно
let modalFirst = document.querySelector(".modal__wrapper");
let modalSecond = document.querySelector(".modal__wrapper-second");
let modalFooter = document.querySelector(".modal__wrapper-footer");
if (modalFirst) {
  function bindModal(trigger, modal, close) {
    (trigger = document.querySelector(trigger)),
      (modal = document.querySelector(modal)),
      (close = document.querySelector(close));

    const body = document.body;

    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      body.classList.add("locked");
    });
    close.addEventListener("click", () => {
      modal.style.display = "none";

      body.classList.remove("locked");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";

        body.classList.remove("locked");
      }
    });
    document
      .querySelector(".modal__wrapper-second")
      .addEventListener("click", (e) => {
        if (e.target === document.querySelector(".modal__wrapper-second")) {
          document
            .querySelector(".modal__wrapper-second")
            .classList.remove("_active");
          formPhoneInput.tel.value = "";
          if (formPhoneInputContacts) {
            formPhoneInputContacts.tel.value = "";
          }
          body.classList.remove("locked");
        }
      });
  }

  bindModal(".modal-button", ".modal__wrapper", ".modal__close");
  bindModal(".modal-button-footer", ".modal__wrapper", ".modal__close");
}

// fucntion checkValidity

const formPhoneInput = document["modal__form"];
const formPhoneInputContacts = document["modal__form-contacts"];
// let phone = formPhoneInput.tel;

let btnContacts = document.querySelector(".modal-submit-contacts");

function check() {
  let phone = formPhoneInput.tel;

  if (formPhoneInput.tel.value == "") {
    document.querySelector(".form__verif").classList.add("_active");
  } else if (formPhoneInput.tel.value.length >= 19) {
    document.querySelector(".form__verif").classList.remove("_active");

    document.querySelector(".modal__wrapper").style.display = "none";
    modalSecond.classList.add("_active");
  } else if (
    formPhoneInput.tel.value.length >= 5 &&
    formPhoneInput.tel.value.length <= 20
  ) {
    document.querySelector(".form__verif").classList.add("_active");
    document.querySelector(".form__verif").textContent = "недостатньо цифр";
  } else {
    document.querySelector(".form__verif").classList.remove("_active");
  }
  phone.addEventListener("focus", () => {
    document.querySelector(".form__verif").classList.remove("_active");
  });
}

//function check contacts

let contactsSection = document.querySelector(".section__contacts");

if (contactsSection) {
  let phoneContacts = formPhoneInputContacts.tel;

  function checkContacts() {
    event.preventDefault();
    if (formPhoneInputContacts.tel.value == "") {
      document.querySelectorAll(".form__verif").forEach((item) => {
        item.classList.add("_active");
      });
    } else if (formPhoneInputContacts.tel.value.length >= 19) {
      document.querySelectorAll(".form__verif").forEach((item) => {
        item.classList.remove("_active");
      });
      document.querySelector(".modal__wrapper").style.display = "none";
      modalSecond.classList.add("_active");
    } else if (
      formPhoneInputContacts.tel.value.length >= 5 &&
      formPhoneInputContacts.tel.value.length <= 20
    ) {
      document.querySelectorAll(".form__verif").forEach((item) => {
        item.classList.add("_active");
        item.textContent = "недостатньо цифр";
      });
    } else {
      document.querySelector(".form__verif").classList.remove("_active");
    }
  }
  btnContacts.addEventListener("click", checkContacts);

  function focus() {
    document.querySelectorAll(".form__verif").forEach((item) => {
      item.classList.remove("_active");
    });
  }
  formPhoneInputContacts.tel.addEventListener("focus", focus);
}

// click buttons
const buttons = document.querySelectorAll(".modal-submit");
for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i];
  btn.addEventListener("click", (e) => check(i, e.target.value));
}

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+38 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
        .substring(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;

      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

// swiper specialist
const specialist = document.querySelector(".section__specialist");
if (specialist) {
  const swiper = new Swiper(".swiper__specialist", {
    slidesPerView: 3,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },

    //   // Responsive breakpoints
    breakpoints: {
      //   // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      //   // when window width is >= 480px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// click buttons slider

const btnSlide = document.querySelectorAll(".slide__item-description-button");
function btnClick() {
  btnSlide.forEach((click) => {
    click.addEventListener("click", () => {
      click.classList.toggle("_active");
    });
  });
}
btnClick();

const btnSpecialists = document.querySelectorAll(
  ".content-specialistAbout__description-button"
);
function btnClickSpecialists() {
  btnSpecialists.forEach((click) => {
    click.addEventListener("click", () => {
      click.classList.toggle("_active");
    });
  });
}
btnClickSpecialists();

// accordion
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();

// swiper prices

const prices = document.querySelector(".section__prices");
if (prices) {
  const swiper = new Swiper(".swiper__prices", {
    slidesPerView: 3,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },

    //   // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      //   // when window width is >= 320px
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      //   // when window width is >= 480px
      1350: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

const reviews = document.querySelector(".section__reviews");
if (reviews) {
  const swiper = new Swiper(".swiper__reviews", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 45,
    centeredSlides: true,
    speed: 1000,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },

    //   // Responsive breakpoints
    breakpoints: {
      //   // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

let sectionReviews = document.querySelector(".section__reviews");
if (sectionReviews) {
  $(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
      buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "close"],
      loop: false,
      arrows: true,
      infobar: false,
      zoom: false,
      mobile: {
        clickContent: "close",
        clickSlide: "close",
      },
    });
  });
}

