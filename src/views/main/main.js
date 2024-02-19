import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Search books');
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = 'Main view content goes here';
    this.app.innerHTML = ''; // Clear the app
    this.app.append(main);
  }
}
