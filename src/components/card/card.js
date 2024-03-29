import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');
    const existInFavorites = this.appState.favorites.some(
      (item) => item.key === this.cardState.key,
    );
    this.el.innerHTML = `
    <div class="card__image">
      <img src="https://covers.openlibrary.org/b/olid/${
        this.cardState.cover_edition_key
      }-M.jpg" alt="Cover"/>
    </div>
    <div class="card__info">
      <div class="card__tag">
        ${this.cardState.subject ? this.cardState.subject[0] : 'Not found'}  
      </div>
      <div class="card__name">
        ${this.cardState.title}  
      </div>
      <div class="card__author">
        ${this.cardState.author_name ? this.cardState.author_name[0] : 'Not found'}  
      </div>
      <div class="card__footer">
        <button class="button__add ${existInFavorites ? 'button__active' : ''}">
          ${
            existInFavorites
              ? '<img src="/static/favorites.svg">'
              : '<img src="/static/favorites-white.svg">'
          }
        </button> 
      </div>
    </div>
    `;
    return this.el;
  }
}
