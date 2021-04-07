function menuCards() {
  //Menu cards

  class MenuCard {
    constructor(img, altimg, title, descr, price, parentSelector, ...classes) {
      this.img = img;
      this.altimg = altimg;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.kurs = 2.65;
      this.sumeInBLR();
    }

    sumeInBLR() {
      this.price = Math.floor(this.price * this.kurs);
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
      <img src=${this.img} alt=${this.altimg} />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">
       ${this.descr}
      </div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> р
        /день</div>
      </div>
    </div>`;
      this.parent.append(element);
    }
  }

  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ img, alt, title, descr, price }) => {
      new MenuCard(img, alt, title, descr, price, `.menu .container`).render();
    });
  });
}

export default menuCards;
