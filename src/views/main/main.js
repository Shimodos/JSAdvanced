import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';

export class MainView extends AbstractView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));

    this.setTitle('Search books');
  }

  appStateHook(path) {
    console.log(path);

    // This is where you can add hooks to the app state
  }

  render() {
    const main = document.createElement('div');
    // main.innerHTML = '';
    main.append(new Search(this.state).render());
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
