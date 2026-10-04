export const tutors = [
  {
    id: 1,
    name: "Анна",
    language: "Python",
    price: 900,
    experienceYears: 3,
    forKids: true
  },
  {
    id: 2,
    name: "Иван",
    language: "JavaScript",
    price: 1200,
    experienceYears: 5,
    forKids: true
  },
  {
    id: 3,
    name: "Мария",
    language: "Scratch",
    price: 700,
    experienceYears: 2,
    forKids: true
  },
  {
    id: 4,
    name: "Павел",
    language: "C++",
    price: 1500,
    experienceYears: 7,
    forKids: false
  }
];

export function filterTutors(items, language) {
  if (!language) {
    return items;
  }

  const normalized = language.trim().toLowerCase();

  return items.filter((tutor) => tutor.language.toLowerCase() === normalized);
}

export function filterForKids(items) {
  return items.filter((tutor) => tutor.forKids);
}

export function formatPrice(price) {
  return `${price} ₽/час`;
}

export function renderTutors(items, root) {
  root.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Репетиторы не найдены.";
    root.appendChild(empty);
    return;
  }

  const ul = document.createElement("ul");

  items.forEach((tutor) => {
    const li = document.createElement("li");
    li.textContent = `${tutor.name} — ${tutor.language}, ${formatPrice(tutor.price)}, опыт ${tutor.experienceYears} лет`;
    ul.appendChild(li);
  });

  root.appendChild(ul);
}

export function initApp() {
  const root = document.getElementById("tutors");
  const languageInput = document.getElementById("language");

  if (!root || !languageInput) {
    return;
  }

  const show = () => {
    const kidsOnly = filterForKids(tutors);
    const filtered = filterTutors(kidsOnly, languageInput.value);
    renderTutors(filtered, root);
  };

  languageInput.addEventListener("input", show);
  show();
}