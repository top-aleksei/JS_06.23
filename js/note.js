import Control from '../js/common/control';
import Main from './app';
import Popup from './deletePopup';

class Note extends Control {
  constructor(parentNode, info) {
    super(parentNode, 'div', 'card');
    this.info = info;
    this.creationDate = new Control(this.node, 'div', 'card__date');
    this.title = new Control(this.node, 'p', 'card__title', this.info.title);
    this.text = new Control(this.node, 'div', 'card__text', this.info.text);
    this.deleteBTN = new Control(this.node, 'div', 'card__delete', 'X');
    this.favBTN = new Control(this.node, 'div', 'card__fav');
    this.buttonContainer = new Control(this.node, 'div', 'card__buttons');

    this.cancelBTN = new Control(
      this.buttonContainer.node,
      'button',
      'button card__cancel',
      'cancel',
    );
    this.submitBTN = new Control(
      this.buttonContainer.node,
      'button',
      'button card__submit',
      'submit',
    );
    this.editBTN = new Control(this.buttonContainer.node, 'button', 'button card__edit', 'edit');
    this.render();
  }

  changeDateFormat() {
    const dateStr = new Date(this.info.date)
      .toJSON()
      .replace('T', ' ')
      .replace('Z', '')
      .slice(0, -4);
    this.creationDate.node.textContent = this.info.isUpdated ? `updated ${dateStr}` : dateStr;
  }

  delete() {
    Main.state = Main.state.filter((el) => el.id != this.info.id);
    this.destroy();
  }

  startEdit() {
    Main.nodesState.forEach((el) => el.cancelChange());
    this.title.node.setAttribute('contenteditable', true);
    this.text.node.setAttribute('contenteditable', true);
    this.title.node.focus();
    this.editBTN.node.style.display = 'none';
    this.cancelBTN.node.style.display = 'block';
    this.submitBTN.node.style.display = 'block';
  }

  endEdit() {
    this.title.node.setAttribute('contenteditable', false);
    this.text.node.setAttribute('contenteditable', false);
    this.editBTN.node.style.display = 'block';
    this.cancelBTN.node.style.display = 'none';
    this.submitBTN.node.style.display = 'none';
  }

  validateNote() {
    let isValid = true;
    const title = this.title.node.firstChild.nodeValue;
    const area = this.text.node.firstChild.nodeValue;
    if (title.length < 5 || title.length > 15) {
      this.title.node.style.color = 'red';
      isValid = false;
    }
    if (area.length < 5 || area.length > 100) {
      this.text.node.style.color = 'red';
      isValid = false;
    }
    return isValid;
  }

  editNoteInState() {
    const title = this.title.node.firstChild.nodeValue;
    const area = this.text.node.firstChild.nodeValue;
    const stateIndex = Main.state.findIndex((el) => el.id == this.info.id);
    this.info = { ...this.info, title: title, text: area, isUpdated: true, date: new Date() };

    Main.state[stateIndex] = this.info;
  }

  submitChange() {
    if (this.validateNote()) {
      this.endEdit();
      this.editNoteInState();
      this.changeDateFormat();
    }
  }

  cancelChange() {
    this.title.node.firstChild.nodeValue = this.info.title;
    this.text.node.firstChild.nodeValue = this.info.text;
    this.endEdit();
  }

  toggleFavorite() {
    this.favBTN.node.classList.toggle('card__fav_full');
    const stateIndex = Main.state.findIndex((el) => el.id == this.info.id);
    this.info.isFavorite = !this.info.isFavorite;
    Main.state[stateIndex].isFavorite = this.info.isFavorite;
  }

  addListeners() {
    this.deleteBTN.node.onclick = () => new Popup(this.info.title, this.delete.bind(this));
    this.editBTN.node.onclick = this.startEdit.bind(this);
    this.cancelBTN.node.onclick = this.cancelChange.bind(this);
    this.submitBTN.node.onclick = this.submitChange.bind(this);
    this.favBTN.node.onclick = () => this.toggleFavorite();
    this.title.node.firstChild.addEventListener('DOMSubtreeModified', () => {
      this.title.node.style.color = 'black';
    });
    this.text.node.firstChild.addEventListener('DOMSubtreeModified', () => {
      this.text.node.style.color = 'black';
    });
  }

  render() {
    this.changeDateFormat();
    this.addListeners();

    if (this.info.isFavorite) {
      this.favBTN.node.classList.add('card__fav_full');
    }
  }
}

export default Note;
