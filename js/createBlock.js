import Main from './app';
import Control from './common/control';
import Note from './note';

class CreateBlock extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'form', '', 'form');
    new Control(this.node, 'p', 'form__title', 'Create new note');
    this.title = new Control(this.node, 'input', 'input__title');
    this.area = new Control(this.node, 'textarea', 'input__note');
    this.button = new Control(this.node, 'button', 'button form__btn', 'create');

    this.render();
  }

  submit() {
    if (this.validateInputs()) {
      const notesContainer = document.querySelector('.notes');

      const note = {
        id: Date.now(),
        title: this.title.node.value,
        text: this.area.node.value,
        isFavorite: false,
        isUpdated: false,
        date: new Date(),
      };
      Main.state.push(note);
      this.title.node.value = '';
      this.area.node.value = '';
      const noteNode = new Note(notesContainer, note);
      Main.nodesState.push(noteNode);
    }
  }

  validateInputs() {
    let isValid = true;
    const title = this.title.node.value.trim();
    const area = this.area.node.value.trim();
    if (title.length < 5 || title.length > 15) {
      this.title.node.classList.add('wrong-input');
      isValid = false;
    }
    if (area.length < 5 || area.length > 100) {
      this.area.node.classList.add('wrong-input');
      isValid = false;
    }
    return isValid;
  }

  render() {
    this.title.node.placeholder = 'title';
    this.area.node.placeholder = 'note...';
    this.button.node.onclick = this.submit.bind(this);
    this.title.node.oninput = () => this.title.node.classList.remove('wrong-input');
    this.area.node.oninput = () => this.area.node.classList.remove('wrong-input');
  }
}

export default CreateBlock;
