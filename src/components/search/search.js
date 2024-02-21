import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
    <div class='search__wrapper'>
      <input 
        type="text" 
        placeholder="Search for books..." 
        class="search__input" 
        value="${this.state.searchQuery ? this.state.searchQuery : ''}"
      />
      <img src='/static/search.svg' alt='icon search'>
    </div>
      <button aria-label='Search'><img src='/static/search-white.svg' atl='icon search'>
      </button>
    `;
    return this.el;
  }
}
