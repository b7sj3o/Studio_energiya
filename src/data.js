export const trainersData = {
  ludmila: {
    name: "Яременко Людмила",
    role: "Головний тренер | КМС",
    photo: "ludmila.jpg",
    insta: "https://instagram.com/studio_energiya",
    prices: [
      "Пілатес: 120 грн (разове) / 1200 грн (абонемент)",
      "Флай: 200 грн (разове)"
    ],
    schedule: [
      { title: "🧘 Пілатес", details: ["Пн, Ср, Пт: 18.10 та 19.20", "Абонемент: 1200 грн"] },
      { title: "🤸 Флайстрейчинг", details: ["18.10 (12-16 років) | 19.20 (16+)", "Разове: 200 грн"] },
      { title: "💃 Сучасна хореографія", details: ["Пн-Пт: Різні вікові групи (уточнюйте)"] }
    ]
  },
  anastasia: {
    name: "Бартош Анастасія",
    role: "Хореограф-постановник",
    photo: "anastasia_main.jpg",
    insta: "https://instagram.com/slavkovna.gym",
    prices: ["Stretching: 150 грн", "Акробатика: 100 грн"],
    schedule: [
      { title: "✨ Stretching", details: ["Пн, Ср, Пт: 08.30", "Вт, Чт: 18.30 та 19.20"] }
    ]
  },
  yulia: {
    name: "Шкода Юлія",
    role: "Інструктор з Pole Dance",
    photo: "yulia.JPG",
    insta: "https://instagram.com/studio_energiya",
    prices: ["Разове: 300 грн", "Абонемент: від 900 грн"],
    schedule: [
      { title: "👠 Pole Dance", details: ["Пн, Ср, Пт: 18.10 та 19.20"] }
    ]
  }
};

export const studioPhotosList = [
  "studio_1.jpg", "studio_2.jpg", "studio_3.jpg", "studio_4.jpg", "studio_5.jpg",
  "studio_7.jpg", "studio_8.jpg", "studio_9.jpg", "studio_10.jpg", "studio_11.jpg",
  "studio_12.jpg", "studio_13.jpg", "studio_14.jpg", "studio_15.jpg", "studio_16.jpg", "studio_17.jpg"
];

export const awardsPhotos = [
  { photo: "cup_1.jpg", title: "Наші перемоги" },
  { photo: "cup_2.jpg", title: "Гордість студії" },
  { photo: "cup_3.jpg", title: "Золотий фонд" }
];

export function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
