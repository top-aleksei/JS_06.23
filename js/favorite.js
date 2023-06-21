import Control from '../js/common/control';
import Main from './app';
import Note from './note';

class Favorite extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'favorite', 'FAVORITE NOTES');
    this.container = new Control(this.node, 'div', 'favorite__list');
    this.renderFavoriteList();
  }

  renderFavoriteList() {
    Main.state.forEach((el) => {
      console.log(el);
      if (el.isFavorite) {
        new Note(this.container.node, el);
      }
    });
  }
}

export default Favorite;
