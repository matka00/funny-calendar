console.log(year);

const monthSectionComponent = function (inner, id, header) {
  return `
        <section id="${id}">
            <h3>${header}</h3>
            <div class="container">${inner}</div>
            <div class="decor1"></div>
            <div class="decor2"></div>
        </section>
    `;
};
const dayCardComponent = function (year, month, day) {
  return `
    <div class="card">
        <time datetime="${year}">${year}</time>
        <time datetime="${month}">${month}</time>
        <time datetime="${day}">${day}</time>
    </div>
    `;
};

const dayCardClickEvent = function (event) {
  event.currentTarget.closest(".card").classList.toggle("card-flipped");
};

const loadEvent = function () {
  const rootElement = document.getElementById("root");

  for (const month of year) {
    let sectionInner = "";

    for (let index = 1; index <= month.days; index++) {
      sectionInner += dayCardComponent(2022, month.month, index);
    }

    rootElement.insertAdjacentHTML(
      "beforeend",
      monthSectionComponent(sectionInner, month.id, month.month)
    );
  }

  const dayCardElement = document.getElementsByClassName("card");
  for (let i = 0; i < dayCardElement.length; i++) {
    dayCardElement[i].addEventListener("click", dayCardClickEvent);
  }
};

window.addEventListener("load", loadEvent);
