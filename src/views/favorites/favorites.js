import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { CardList } from '../../components/cardList/cardList.js';

export class FavoritesView extends AbstractView {
  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));

    this.setTitle('My favorite books');
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
    // This is where you can add hooks to the app state
  }

  render() {
    const main = document.createElement('div');

    main.innerHTML = `
    <h1>Search results for</h1>
    `;
    main.append(new CardList(this.appState, { list: this.appState.favorites }).render());
    this.app.innerHTML = ''; // Clear the app
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
