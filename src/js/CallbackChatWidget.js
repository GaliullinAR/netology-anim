export default class CallbackChatWidget {
  constructor(container) {
    this.container = container;
    this.element = null;
    this.form = null;
  }

  init() {
    this.element = document.createElement("div");
    this.element.classList.add("callback-chat-widget");
    this.container.appendChild(this.element);

    this.form = document.createElement("div");
    this.form.classList.add("chat-form", "hidden");
    this.form.innerHTML = `
      <div class="close-btn">X</div>
      <div class="title">Напишите нам</div>
      <textarea></textarea>
      <div class="send-btn button">Отправить</div>
    `;
    this.element.appendChild(this.form);

    this.showFormBtn = document.createElement("div");
    this.showFormBtn.classList.add("show-form-btn");
    this.element.appendChild(this.showFormBtn);

    this.form
      .querySelector(".close-btn")
      .addEventListener("click", this.toggleForm.bind(this));
    this.showFormBtn.addEventListener("click", this.toggleForm.bind(this));
  }

  toggleForm() {
    this.form.classList.toggle("hidden");
    this.showFormBtn.classList.toggle("hidden");
    this.showFormBtn.style.zIndex = this.showFormBtn.classList.contains(
      "hidden"
    )
      ? -1
      : 999;
  }
}
