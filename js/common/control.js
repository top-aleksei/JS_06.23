class Control {
  node;

  constructor(parentNode, tagName = 'div', className = '', content = '', id) {
    const el = document.createElement(tagName);
    if (className) {
      el.className = className;
    }
    el.textContent = content;
    if (id) {
      el.id = id;
    }
    if (parentNode) {
      parentNode.append(el);
    }
    this.node = el;
  }

  destroy() {
    this.node.remove();
  }
}

export default Control;
