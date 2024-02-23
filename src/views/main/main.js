import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/cardList/cardList.js';

export class MainView extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));

    this.setTitle('Search books');
  }

  appStateHook(path) {
    console.log(path);
    // This is where you can add hooks to the app state
  }

  async stateHook(path) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.offset);
      this.state.loading = false;
      this.state.list = data.docs;
      console.log(data);
      this.state.numFound = data.numFound;
      console.log(111);
    }

    if (path === 'list' || path === 'loading') {
      this.render();
      console.log(222);
    }
    // This is where you can add hooks to the app state
  }

  async loadList(q, offset) {
    const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
    return res.json();
  }

  render() {
    const main = document.createElement('div');
    // main.innerHTML = '';
    main.append(new Search(this.state).render());
    main.append(new CardList(this.appState, this.state).render());
    this.app.innerHTML = ''; // Clear the app
    this.app.append(main);
    this.renderHeader();

    this.appState.favorites.push('test');
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
