const smMenuBtn = document.querySelector(".main-header__sm-scr-nav-btn");
const smMenu = document.querySelector(".main-header__sm-menu");
const smMenuCloseBtn = document.querySelector(".main-header__sm-menu-close");

const smMenuLinks = document.querySelectorAll(".main-header__sm-menu-link");
const smMenuLink1 = document.querySelector(".main-header__sm-menu-link--1");
const smMenuLink2 = document.querySelector(".main-header__sm-menu-link--2");
const smMenuLink3 = document.querySelector(".main-header__sm-menu-link--3");
const smMenuLink4 = document.querySelector(".main-header__sm-menu-link--4");

smMenuBtn.addEventListener("click", () => {
  smMenu.style.transitionDelay = "0s";
  smMenu.classList.add("main-header__sm-menu--active");

  smMenuLink1.style.transitionDelay = ".5s";
  smMenuLink1.style.transform = "translateY(0)";
  smMenuLink1.style.opacity = "1";

  smMenuLink2.style.transitionDelay = ".8s";
  smMenuLink2.style.transform = "translateY(0)";
  smMenuLink2.style.opacity = "1";

  smMenuLink3.style.transitionDelay = "1.1s";
  smMenuLink3.style.transform = "translateY(0)";
  smMenuLink3.style.opacity = "1";

  smMenuLink4.style.transitionDelay = "1.4s";
  smMenuLink4.style.transform = "translateY(0)";
  smMenuLink4.style.opacity = "1";
});

smMenuLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    smMenuLink4.style.transitionDelay = "0s";
    smMenuLink4.style.transform = "translateY(50px)";
    smMenuLink4.style.opacity = "0";

    smMenuLink3.style.transitionDelay = ".3s";
    smMenuLink3.style.transform = "translateY(50px)";
    smMenuLink3.style.opacity = "0";

    smMenuLink2.style.transitionDelay = ".6s";
    smMenuLink2.style.transform = "translateY(50px)";
    smMenuLink2.style.opacity = "0";

    smMenuLink1.style.transitionDelay = ".9s";
    smMenuLink1.style.transform = "translateY(50px)";
    smMenuLink1.style.opacity = "0";

    smMenu.style.transitionDelay = "1.2s";
    smMenu.classList.remove("main-header__sm-menu--active");

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView();
    }, 1300);
  });
});

smMenuCloseBtn.addEventListener("click", () => {
  smMenuLink4.style.transitionDelay = "0s";
  smMenuLink4.style.transform = "translateY(50px)";
  smMenuLink4.style.opacity = "0";

  smMenuLink3.style.transitionDelay = ".3s";
  smMenuLink3.style.transform = "translateY(50px)";
  smMenuLink3.style.opacity = "0";

  smMenuLink2.style.transitionDelay = ".6s";
  smMenuLink2.style.transform = "translateY(50px)";
  smMenuLink2.style.opacity = "0";

  smMenuLink1.style.transitionDelay = ".9s";
  smMenuLink1.style.transform = "translateY(50px)";
  smMenuLink1.style.opacity = "0";

  smMenu.style.transitionDelay = "1.2s";
  smMenu.classList.remove("main-header__sm-menu--active");
});

// ---
const themeColorSelector = document.querySelector(".themeClrSelector");
const themeColorSelectorInput = document.querySelector(
  ".themeClrSelector__input"
);
const root = document.documentElement;

const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const eventFire = (el, etype) => {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    let evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
};

themeColorSelector.addEventListener("click", () => {
  eventFire(themeColorSelectorInput, "input");
});

const setDynamicColor = (color) => {
  const { r, g, b } = hexToRgb(`${color}`);

  root.style.setProperty("--themeColor", `${r},${g},${b}`);
  //localStorage.setItem('color', color)
};

themeColorSelectorInput.addEventListener("input", (e) => {
  setDynamicColor(e.target.value);
});

// if (localStorage.getItem('color')) {
//   let userSelectedColor = localStorage.getItem('color')
//   themeColorSelectorInput.value = userSelectedColor
//   setDynamicColor(userSelectedColor)
// }

// ---
const headerLogoConatiner = document.querySelector(
  ".main-header__logo-container"
);

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

document
  .getElementById("liveLinkButton1")
  .addEventListener("click", function () {
    window.open("https://netflix-ramanuj.web.app/", "_blank");
  });

document
  .getElementById("codeLinkButton1")
  .addEventListener("click", function () {
    window.open("https://github.com/ramanuj07/netflix-gpt", "_blank");
  });

document
  .getElementById("liveLinkButton2")
  .addEventListener("click", function () {
    window.open("https://me-tube-one.vercel.app/", "_blank");
  });

document
  .getElementById("codeLinkButton2")
  .addEventListener("click", function () {
    window.open("https://github.com/ramanuj07/me-tube", "_blank");
  });

document
  .getElementById("liveLinkButton3")
  .addEventListener("click", function () {
    window.open("https://e-commerce-filtering.netlify.app/", "_blank");
  });

document
  .getElementById("codeLinkButton3")
  .addEventListener("click", function () {
    window.open("https://github.com/ramanuj07/e-commerce-filters", "_blank");
  });

document
  .getElementById("liveLinkButton4")
  .addEventListener("click", function () {
    window.open("https://remotedeveloper.netlify.app/", "_blank");
  });

document
  .getElementById("codeLinkButton4")
  .addEventListener("click", function () {
    window.open("https://github.com/ramanuj07/remoteDev", "_blank");
  });
