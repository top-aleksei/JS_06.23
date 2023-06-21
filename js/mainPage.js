import Control from '../js/common/control';
import CreateBlock from './createBlock';
import NotesList from './notesList';

class MainPage extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'main');
    this.createBlock = new CreateBlock(this.node);
    this.notesList = new NotesList(this.node);
  }
}

export default MainPage;
