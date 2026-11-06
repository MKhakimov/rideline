export type TelegramResource = {
    name: string;
    type: "Канал" | "Группа";
    description: string;
    href: string;
};

export const telegramResources: TelegramResource[] = [
    {
        name: "MTB/BMX",
        type: "Группа",
        description: "Сообщество о маунтинбайке и BMX в Узбекистане.",
        href: "https://t.me/MTBBMX_uz",
    },
    {
        name: "Веловстреча",
        type: "Канал",
        description: "Новости, встречи и велопоездки.",
        href: "https://t.me/Velovstrecha",
    },
    {
        name: "Флудильня",
        type: "Группа",
        description: "Свободное общение на велотемы.",
        href: "https://t.me/cyclecomspam",
    },
    {
        name: "Велорынок",
        type: "Группа",
        description: "Объявления о продаже велосипедов и запчастей.",
        href: "https://t.me/buysellvelo",
    },
    {
        name: "RIDER",
        type: "Канал",
        description: "Спортивный магазин.",
        href: "https://t.me/ridershop99",
    },
    {
        name: "Велозапчасти",
        type: "Канал",
        description: "Спортивный магазин и велозапчасти.",
        href: "https://t.me/velozapchasti",
    },
    {
        name: "Веломаг",
        type: "Канал",
        description: "Частные объявления о продаже снаряжения.",
        href: "https://t.me/velomag",
    },
    {
        name: "Снаряга UZ",
        type: "Группа",
        description: "Частные объявления о продаже снаряжения.",
        href: "https://t.me/snaryagauz",
    },
    {
        name: "Учись кататься! MTB",
        type: "Канал",
        description: "Советы по технике катания на горном велосипеде.",
        href: "https://t.me/learntoride_mtb",
    },
    {
        name: "GudCatch",
        type: "Канал",
        description: "Новости и запчасти.",
        href: "https://t.me/GudCatch",
    },
];
