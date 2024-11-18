//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener("deviceready", onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: "#app",
  // App Name
  name: "My App",
  // App id
  id: "com.myapp.test",
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: "Sim",
    buttonCancel: "Cancelar",
  },
  // Add default routes
  routes: [
    {
      path: "/home/",
      url: "home.html",
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
      },
    },
    {
      path: "/link2/",
      url: "link2.html",
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
      },
    },
    {
      path: "/link3/",
      url: "link3.html",
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
      },
    },
    {
      path: "/link4/",
      url: "link4.html",
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          console.log("Page is about to be shown: /Ocr/");
        },
        pageAfterIn: function (event, page) {
          console.log("Page has been shown: /Ocr/");
        },
        pageInit: function (event, page) {
          console.log("Initializing /Ocr/ page");
        },
        pageBeforeRemove: function (event, page) {
          console.log("Page /Ocr/ is being removed from DOM");
        },
      },
    }    
  ],
  // ... other parameters
});

//Para testes direto no navegador
var mainView = app.views.create(".view-main", { url: "/home/" });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on("routeChange", function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll(".tab-link").forEach(function (el) {
    el.classList.remove("active");
  });
  var targetEl = document.querySelector(
    '.tab-link[href="' + currentRoute + '"]'
  );
  if (targetEl) {
    targetEl.classList.add("active");
  }
});

function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create(".view-main", { url: "/home/" });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID
  document.addEventListener(
    "backbutton",
    function (e) {
      if (mainView.router.currentRoute.path === "/home/") {
        e.preventDefault();
        app.dialog.confirm("Deseja sair do aplicativo?", function () {
          navigator.app.exitApp();
        });
      } else {
        e.preventDefault();
        mainView.router.back({ force: true });
      }
    },
    false
  );
}
