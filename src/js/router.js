export class Router {
  routes = {}
  route(event){
    event = event || window.event 
    event.preventDefault()
    window.history.pushState({},"", event.target.href)
    this.handle()
  }

  add(routeName, page){
    this.routes[routeName] = page;
  }
  
  handle(){
    const { pathname } = window.location
    const routePage = this.routes[pathname] || this.routes[404]
  
    fetch(routePage)
      .then(data =>data.text())
      .then(html => document.getElementById('app').innerHTML = html)   
  }

}
