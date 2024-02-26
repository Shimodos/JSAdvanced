import { MainView } from './views/main/main';
import { FavoritesView } from './views/favorites/favorites';
class App {
  routes = [
    { path: '', view: MainView },
    { path: '#favorites', view: FavoritesView },
  ];

  appState = {
    favorites: [],
  }; // This is where you can store the state of your app

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }

    const view = this.routes.find((r) => r.path == location.hash).view;
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
