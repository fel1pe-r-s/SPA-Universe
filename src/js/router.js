const home = document.querySelector("#home");
const universe = document.querySelector("#universe");
const exploration = document.querySelector("#exploration");

export class Router {
  routes = {};
  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  handle() {
    const { pathname } = window.location;
    const routePage = this.routes[pathname] || this.routes[404];

    console.log(pathname);
    fetch(routePage)
      .then((data) => data.text())
      .then((html) => (document.getElementById("app").innerHTML = html));
  }
}
