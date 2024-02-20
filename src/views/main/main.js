import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';

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
    main.innerHTML = `Books list: ${this.appState.favorites.length}`;
    this.app.innerHTML = ''; // Clear the app
    this.app.append(main);
    this.appState.favorites.push('test');
  }
}
