import Control from '../js/common/control';
import Main from './app';
import Note from './note';

class NotesList extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'notes');
    // TEMP
    this.renderLsNotes();
  }

  renderLsNotes() {
    const lsNotes = JSON.parse(localStorage.getItem('notes'));
    if (lsNotes) {
      lsNotes.forEach((el) => {
        const node = new Note(this.node, el);
        Main.nodesState.push(node);
      });
    }
  }
}

export default NotesList;
