import Control from './common/control';

class Popup {
  constructor(noteTitle, deleteFunction) {
    this.noteTitle = noteTitle;
    this.deleteFunction = deleteFunction;
    this.overlay = document.getElementById('overlay');
    this.popup = document.getElementById('popup');
    this.container = new Control(this.popup, 'div', 'popup__container');
    this.title = new Control(this.container.node, 'p', 'popup__text');
    this.cancelBTN = new Control(this.container.node, 'button', 'button popup__cancel', 'cancel');
    this.deletelBTN = new Control(this.container.node, 'button', 'button popup__delete', 'delete');
    this.render();
  }

  createTitle() {
    this.title.node.textContent = `Are you sure you want to delete note "${this.noteTitle}"?`;
  }

  addListeners() {
    this.cancelBTN.node.onclick = () => {
      this.container.destroy();
      this.overlay.style.display = 'none';
      this.popup.style.display = 'none';
    };
    this.deletelBTN.node.onclick = () => {
      this.deleteFunction();
      this.container.destroy();
      this.overlay.style.display = 'none';
      this.popup.style.display = 'none';
    };
  }

  render() {
    this.overlay.style.display = 'block';
    this.popup.style.display = 'block';
    this.createTitle();
    this.addListeners();
  }
}

export default Popup;
