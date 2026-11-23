type Ride = {
    href: string;
    image: string;
    imageAlt: string;
    title: string;
    details: string[];
};

// Временные записи для макета, до добавления реальных поездок.
export const rides: Ride[] = [
    {
        href: "/rides/above-the-valley",
        image: "/images/rides/alpine-ride.png",
        imageAlt: "Группа райдеров едет по горной тропе",
        title: "Выше облаков",
        details: ["Тянь-Шань", "18 октября 2026"],
    },
    {
        href: "/rides/forest-descent",
        image: "/images/hero.jpg",
        imageAlt: "Райдеры спускаются по лесной трассе",
        title: "Лесной спуск",
        details: ["Горный Алтай", "12 октября 2026"],
    },
    {
        href: "/rides/ridge-trail",
        image: "/images/hero.png",
        imageAlt: "Велосипедисты проходят каменистую горную тропу",
        title: "Тропа по гребню",
        details: ["Заилийский Алатау", "28 сентября 2026"],
    },
    {
        href: "/rides/through-the-pines",
        image: "/images/hero.jpg",
        imageAlt: "Маунтинбайкеры на маршруте среди деревьев",
        title: "Среди сосен",
        details: ["Боровое", "14 сентября 2026"],
    },
    {
        href: "/rides/rocky-pass",
        image: "/images/hero.png",
        imageAlt: "Райдеры преодолевают высокогорный каменистый участок",
        title: "Каменистый перевал",
        details: ["Памир", "30 августа 2026"],
    },
    {
        href: "/rides/last-light",
        image: "/images/hero.jpg",
        imageAlt: "Маунтинбайкеры едут по горному склону в вечернем свете",
        title: "Последний спуск дня",
        details: ["Чимбулак", "16 августа 2026"],
    },
];
