import MainPage from './mainPage';
import Favorite from './favorite';
import { getNotesLS, setNotesLS } from './localStorage';

class Main {
  static state = getNotesLS() || [];
  static nodesState = [];
  constructor() {
    this.container = document.getElementById('container');
    this.mainLink = document.getElementById('mainLink');
    this.favoriteLink = document.getElementById('favoriteLink');
    this.page = new MainPage(container);
    this.addNavigation();
    this.addListeners();
  }

  addNavigation() {
    this.favoriteLink.addEventListener('click', () => {
      setNotesLS(Main.state);
      this.page.destroy();
      this.page = new Favorite(container);
    });
    this.mainLink.addEventListener('click', () => {
      setNotesLS(Main.state);
      this.page.destroy();
      this.page = new MainPage(container);
    });
  }

  addListeners() {
    window.onbeforeunload = () => setNotesLS(Main.state);
  }
}

export default Main;
