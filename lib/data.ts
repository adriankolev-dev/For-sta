export const NAV_LINKS = [
  { href: "#reshenie", label: "Решение" },
  { href: "#izhivyavane", label: "Изживяване" },
  { href: "#obhvat", label: "Обхват" },
  { href: "#srokove", label: "Срокове" },
  { href: "#investitsiya", label: "Инвестиция" },
] as const;

export const CONTACT = {
  name: "Адриан",
  phone: "0896173743",
  phoneHref: "tel:+359896173743",
  email: "hello@adrexio.com",
  emailHref: "mailto:hello@adrexio.com",
} as const;

/** Demo product for the proposal mock — wardrobe, not desk */
export const MOCK_PRODUCT = {
  name: "Гардероб Penelope",
  widthCm: 180,
  heightCm: 220,
  depthCm: 60,
  doors: 2,
  drawers: 2,
  backPanel: true,
  materialLabel: "Бяло",
  price: 2149,
  orderId: "#10482",
  configId: "CFG-10482-A3",
  dimsLabel: "180 × 220 × 60 см",
  componentsLabel: "2 врати · 2 чекмеджета · Заден панел",
} as const;

export const MVP_RULES = [
  {
    title: "Офертата е цялостната платформа",
    description:
      "€46 000 без ДДС включва конфигуратор, поръчки, BOM, DXF за CNC и възможност да добавяте нови продукти в каталога.",
  },
  {
    title: "MVP = първият готов продукт",
    description:
      "Започваме с гардероба end-to-end — от конфигурация до производствени файлове — за да валидираме целия поток в реална употреба.",
  },
  {
    title: "Каталогът расте с вас",
    description:
      "Платформата е готова за нови продукти върху същия стандарт. Добавяте ги през системата — без да строим офертата наново.",
  },
] as const;

export const EXPERIENCE_CARDS = [
  {
    number: "01",
    title: "Конфигурирай",
    description:
      "Задай размери, материали и компоненти чрез интуитивен интерфейс.",
  },
  {
    number: "02",
    title: "Визуализирай",
    description:
      "Виж как продуктът се променя в реално време при всяка промяна.",
  },
  {
    number: "03",
    title: "Изчисли",
    description:
      "Получи автоматично изчислена цена според избраната конфигурация.",
  },
  {
    number: "04",
    title: "Поръчай",
    description:
      "Добави конфигурирания продукт в количката и завърши поръчката като при стандартен e-commerce продукт.",
  },
] as const;

export const CONFIG_RULES = [
  "минимални размери",
  "максимални размери",
  "допустими комбинации",
  "съвместимост между компоненти",
  "налични материали",
  "ценови правила",
  "производствени ограничения",
] as const;

export const PRICING_BREAKDOWN = [
  { label: "Базов гардероб", amount: 1640 },
  { label: "Допълнителни чекмеджета", amount: 170 },
  { label: "Премиум материал", amount: 120 },
  { label: "Врати и компоненти", amount: 219 },
] as const;

export const PRODUCTION_CARDS = [
  "списък с детайли",
  "размери",
  "материали",
  "количества",
  "кантове",
  "обков",
  "BOM спецификация",
  "DXF експорт за CNC",
] as const;

export const JOURNEY_STEPS = [
  { number: "01", title: "Избери продукт" },
  { number: "02", title: "Конфигурирай" },
  { number: "03", title: "Визуализирай" },
  { number: "04", title: "Изчисли цена" },
  { number: "05", title: "Добави в количката" },
  { number: "06", title: "Checkout" },
  { number: "07", title: "Поръчка" },
  { number: "08", title: "BOM + DXF за CNC" },
] as const;

export const SCOPE_CLIENT = [
  "първи готов продукт — гардероб (MVP доставка)",
  "пълен end-to-end поток до поръчка",
  "конфигурируеми размери",
  "конфигурируеми компоненти",
  "материали и цветове",
  "валидация на конфигурацията",
  "визуален preview",
  "моделиране върху един договорен файлов формат",
  "динамично ценообразуване по вашите правила",
  "добавяне в количката",
  "checkout",
  "responsive experience",
] as const;

export const SCOPE_BUSINESS = [
  "управление на продукти и каталог",
  "възможност за добавяне на нови продукти",
  "управление на компоненти и материали",
  "ценови правила",
  "данни за конфигурацията към поръчката",
  "производствена спецификация / BOM",
  "DXF експорт на панели за CNC",
  "базов административен панел",
  "един стандартизиран файлов формат за моделиране",
  "персонален Product Owner за комуникация",
  "обучение за работа в системата",
] as const;

export const FUTURE_EXTENSIONS = [
  "клиентски профили / вход",
  "запазване на конфигурации „за после“ (с акаунт)",
  "разширено управление на поръчки",
  "ERP интеграция",
  "оптимизация на разкроя (nesting)",
  "интеграция с конкретен CNC софтуер / машинен драйвер",
  "логистична интеграция",
  "аналитика",
  "абонаментна поддръжка след стартиране",
] as const;

export const TIMELINE_PHASES = [
  {
    phase: "Фаза 01",
    title: "Основи и дизайн",
    duration: "1–1,5 месеца",
    payment: 9000,
    deploy: "Prototype / design review",
    paymentTrigger: "При старт и одобрение на дизайна",
    outcome:
      "Ясна спецификация и одобрено клиентско изживяване преди разработка.",
    deliverables: [
      "продуктови правила и конфигурационна логика",
      "техническа архитектура",
      "UX/UI за конфигуратора и customer journey",
      "интерактивен prototype за преглед",
      "назначен персонален Product Owner за комуникацията",
    ],
    clientTest: [
      "преглед на flow-а конфигурирай → поръчай",
      "одобрение на визуалния език и екраните",
      "уточняване на продуктовите правила",
    ],
  },
  {
    phase: "Фаза 02",
    title: "Конфигуратор на staging",
    duration: "2,5–3 месеца",
    payment: 17000,
    deploy: "Staging Deploy 01",
    paymentTrigger: "При прием след вашия тест на staging",
    outcome:
      "Работещ конфигуратор за първия продукт с визуализация и динамична цена — готов за end-to-end тест върху един договорен файлов формат.",
    deliverables: [
      "финализиране на един файлов формат за моделиране (договорен в началото)",
      "3D / продуктово моделиране на гардероба върху този формат",
      "product configurator за един продукт (гардероб)",
      "визуализация на продукта",
      "валидация на конфигурацията",
      "pricing engine според вашите правила",
    ],
    clientTest: [
      "потвърждение на избрания файлов формат",
      "конфигуриране на размери и компоненти на гардероба",
      "проверка на ценовите правила",
      "тест на допустими и блокирани комбинации",
    ],
  },
  {
    phase: "Фаза 03",
    title: "Поръчки и производство",
    duration: "1,5–2 месеца",
    payment: 11000,
    deploy: "Staging Deploy 02",
    paymentTrigger: "При прием след тест на целия order flow",
    outcome:
      "Конфигурацията се превръща в поръчка с BOM и DXF файлове, готови за CNC работния процес.",
    deliverables: [
      "количка и checkout интеграция",
      "конфигурационни данни към поръчката",
      "производствена спецификация / BOM",
      "DXF експорт на панели за CNC",
      "пълен customer journey на staging",
    ],
    clientTest: [
      "добавяне в количката и checkout",
      "проверка на данните в поръчката",
      "преглед на BOM и DXF изхода за производство",
    ],
  },
  {
    phase: "Фаза 04",
    title: "Admin, QA и старт",
    duration: "1–1,5 месеца",
    payment: 9000,
    deploy: "Production Launch",
    paymentTrigger: "При финален deploy и предаване",
    outcome:
      "Пълният продукт е в production — с admin, QA, обучение и персонална подкрепа при предаване.",
    deliverables: [
      "административен панел и управление на каталога",
      "QA и оптимизация",
      "production deployment",
      "документация и предаване",
      "персонален Product Owner за комуникацията по проекта",
      "обучение за работа в системата",
    ],
    clientTest: [
      "управление на продукти и ценови правила",
      "финален end-to-end тест",
      "прием на production средата",
      "практическо обучение с вашия екип",
    ],
  },
] as const;

export const INVESTMENT_ITEMS = [
  { label: "Анализ и техническа спецификация", amount: 2500 },
  { label: "UX/UI дизайн", amount: 3500 },
  { label: "Product Configurator", amount: 9500 },
  { label: "3D моделиране от CAD / предоставен файл", amount: 7000 },
  { label: "3D визуализация", amount: 4500 },
  { label: "Pricing Engine", amount: 3000 },
  { label: "Cart & Checkout интеграция", amount: 3000 },
  { label: "Производствена спецификация / BOM", amount: 4000 },
  { label: "DXF експорт за CNC", amount: 3500 },
  { label: "Admin & управление на продукти", amount: 3000 },
  { label: "QA & Deployment", amount: 2500 },
] as const;

export const INVESTMENT_TOTAL = 46000;

export const PAYMENT_SCHEDULE = TIMELINE_PHASES.map((phase) => ({
  phase: phase.phase,
  title: phase.title,
  amount: phase.payment,
  trigger: phase.paymentTrigger,
  deploy: phase.deploy,
}));


export const INCLUDED_ITEMS = [
  "Responsive web experience",
  "Product configurator (първи продукт: гардероб)",
  "Конфигурационни правила",
  "Динамично ценообразуване",
  "Визуализация върху един файлов стандарт",
  "3D моделиране от договорен изходен файл",
  "Интеграция с количката",
  "Checkout",
  "Конфигурационни данни към поръчката",
  "Производствена спецификация / BOM",
  "DXF експорт на панели за CNC",
  "Административен панел",
  "Възможност за добавяне на нови продукти в каталога",
  "Персонален Product Owner",
  "Обучение за работа в системата",
  "QA",
  "Deployment",
  "Документация и предаване",
] as const;

export const EXCLUDED_ITEMS = [
  "ERP интеграция",
  "оптимизация на разкроя (nesting) върху плоскости",
  "интеграция с конкретен CNC софтуер или машинен драйвер",
  "мобилно приложение",
  "advanced photorealistic rendering",
  "множество готови продуктови типове в първата доставка (MVP = гардероб)",
  "поддръжка на множество файлови формати едновременно",
  "сложна логистична платформа",
  "AI функционалности",
  "домейн, хостинг и сървърна инфраструктура",
  "лицензи за инструменти, SaaS услуги и трети страни",
] as const;

export const PRINCIPLES = [
  {
    number: "01",
    title: "Платформа + първи продукт",
    description:
      "Офертата е пълната система — с възможност да добавяте продукти. В MVP довеждаме гардероба end-to-end, за да валидираме потока.",
  },
  {
    number: "02",
    title: "Един файлов стандарт",
    description:
      "Фиксираме един договорен формат за моделиране. Така визуализацията, BOM и DXF остават стабилни, когато разширявате каталога.",
  },
  {
    number: "03",
    title: "Каталогът е ваш",
    description:
      "След старта управлявате и добавяте продукти върху същата архитектура — без нова платформа за всеки артикул.",
  },
] as const;

export const BUSINESS_VALUES = [
  {
    title: "По-добро клиентско изживяване",
    description: "Клиентът вижда и разбира продукта преди да го поръча.",
  },
  {
    title: "По-бързо офериране",
    description: "Цената се изчислява автоматично.",
  },
  {
    title: "По-малко грешки",
    description: "Невалидните конфигурации се ограничават още при избора.",
  },
  {
    title: "Структурирани поръчки",
    description: "Всяка поръчка съдържа точната конфигурация.",
  },
  {
    title: "По-лесна подготовка за производство",
    description:
      "Генерират се BOM и DXF панели, готови за CNC работния процес.",
  },
  {
    title: "Основа за мащабиране",
    description:
      "След валидация на гардероба разширявате каталога върху същата платформа.",
  },
] as const;

export const MATERIALS = [
  { id: "byalo", label: "Бяло", priceDelta: 0 },
  { id: "dabak", label: "Дъб", priceDelta: 120 },
  { id: "antratsit", label: "Антрацит", priceDelta: 80 },
] as const;

export const ADMIN_NAV = [
  "Табло",
  "Продукти",
  "Компоненти",
  "Материали",
  "Цветове",
  "Ценови правила",
  "Конфигурации",
  "Поръчки",
] as const;

export const ADMIN_METRICS = [
  { label: "Продукти", value: "24" },
  { label: "Активни конфигурации", value: "1 248" },
  { label: "Поръчки", value: "386" },
  { label: "Средна стойност на поръчка", value: "€1 180" },
] as const;

/** Base price calculation helpers for the mock configurator */
export const BASE_PRICE = 1640;
export const DOOR_PRICE = 120;
export const DRAWER_PRICE = 85;
export const BACK_PANEL_PRICE = 99;

export function calculateConfigPrice(params: {
  doors: number;
  drawers: number;
  backPanel: boolean;
  materialDelta: number;
  quantity: number;
}) {
  const unit =
    BASE_PRICE +
    params.doors * DOOR_PRICE +
    params.drawers * DRAWER_PRICE +
    (params.backPanel ? BACK_PANEL_PRICE : 0) +
    params.materialDelta;
  return unit * params.quantity;
}
