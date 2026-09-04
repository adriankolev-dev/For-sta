export const NAV_LINKS = [
  { href: "#reshenie", label: "Решение" },
  { href: "#izhivyavane", label: "Изживяване" },
  { href: "#obhvat", label: "Обхват" },
  { href: "#srokove", label: "Срокове" },
  { href: "#investitsiya", label: "Инвестиция" },
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
  { label: "Базов продукт", amount: 780 },
  { label: "Допълнителни чекмеджета", amount: 180 },
  { label: "Премиум материал", amount: 120 },
  { label: "Допълнителни компоненти", amount: 169 },
] as const;

export const PRODUCTION_CARDS = [
  "списък с детайли",
  "размери",
  "материали",
  "количества",
  "кантове",
  "обков",
  "технически параметри",
  "визуализация",
] as const;

export const JOURNEY_STEPS = [
  { number: "01", title: "Избери продукт" },
  { number: "02", title: "Конфигурирай" },
  { number: "03", title: "Визуализирай" },
  { number: "04", title: "Изчисли цена" },
  { number: "05", title: "Добави в количката" },
  { number: "06", title: "Checkout" },
  { number: "07", title: "Поръчка" },
  { number: "08", title: "Производство" },
] as const;

export const SCOPE_CLIENT = [
  "избор на продукт",
  "конфигурируеми размери",
  "конфигурируеми компоненти",
  "материали",
  "цветове",
  "валидация на конфигурацията",
  "визуален preview",
  "динамично ценообразуване",
  "добавяне в количката",
  "checkout",
  "responsive experience",
] as const;

export const SCOPE_BUSINESS = [
  "управление на продукти",
  "управление на компоненти",
  "управление на материали",
  "ценови правила",
  "данни за конфигурацията към поръчката",
  "производствена спецификация",
  "базов административен панел",
  "персонален Product Owner за комуникация",
  "обучение за работа в системата",
] as const;

export const FUTURE_EXTENSIONS = [
  "допълнителни продуктови категории",
  "по-advanced 3D визуализация",
  "клиентски профили",
  "запазени конфигурации",
  "разширено управление на поръчки",
  "ERP интеграция",
  "CAD/CAM интеграция",
  "CNC автоматизация",
  "логистична интеграция",
  "аналитика",
  "разширена производствена автоматизация",
] as const;

export const TIMELINE_PHASES = [
  {
    phase: "Фаза 01",
    title: "Основи и дизайн",
    duration: "1–1,5 месеца",
    payment: 8000,
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
    payment: 14000,
    deploy: "Staging Deploy 01",
    paymentTrigger: "При прием след вашия тест на staging",
    outcome:
      "Работещ конфигуратор с визуализация и динамична цена — готов за реален тест.",
    deliverables: [
      "product configurator",
      "визуализация на продукта",
      "валидация на конфигурацията",
      "pricing engine",
    ],
    clientTest: [
      "конфигуриране на размери и компоненти",
      "проверка на ценовите правила",
      "тест на допустими и блокирани комбинации",
    ],
  },
  {
    phase: "Фаза 03",
    title: "Поръчки и производство",
    duration: "1,5–2 месеца",
    payment: 10000,
    deploy: "Staging Deploy 02",
    paymentTrigger: "При прием след тест на целия order flow",
    outcome:
      "Конфигурацията се превръща в поръчка със структурирана производствена информация.",
    deliverables: [
      "количка и checkout интеграция",
      "конфигурационни данни към поръчката",
      "производствена спецификация / BOM",
      "пълен customer journey на staging",
    ],
    clientTest: [
      "добавяне в количката и checkout",
      "проверка на данните в поръчката",
      "преглед на производствената спецификация",
    ],
  },
  {
    phase: "Фаза 04",
    title: "Admin, QA и старт",
    duration: "1–1,5 месеца",
    payment: 7500,
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
  { label: "Product Configurator", amount: 11000 },
  { label: "3D визуализация", amount: 4500 },
  { label: "Pricing Engine", amount: 3500 },
  { label: "Cart & Checkout интеграция", amount: 3000 },
  { label: "Производствена спецификация / BOM", amount: 5000 },
  { label: "Admin & управление на продукти", amount: 3000 },
  { label: "QA & Deployment", amount: 2500 },
] as const;

export const INVESTMENT_TOTAL = 39500;

export const PAYMENT_SCHEDULE = TIMELINE_PHASES.map((phase) => ({
  phase: phase.phase,
  title: phase.title,
  amount: phase.payment,
  trigger: phase.paymentTrigger,
  deploy: phase.deploy,
}));


export const INCLUDED_ITEMS = [
  "Responsive web experience",
  "Product configurator",
  "Конфигурационни правила",
  "Динамично ценообразуване",
  "Визуализация на продукта",
  "Интеграция с количката",
  "Checkout",
  "Конфигурационни данни към поръчката",
  "Производствена спецификация / BOM",
  "Административен панел",
  "Управление на продукти",
  "Управление на материали",
  "Персонален Product Owner",
  "Обучение за работа в системата",
  "QA",
  "Deployment",
  "Документация и предаване",
] as const;

export const EXCLUDED_ITEMS = [
  "ERP интеграция",
  "директна CNC интеграция",
  "CAD/CAM автоматизация",
  "мобилно приложение",
  "advanced photorealistic rendering",
  "неограничен брой продуктови категории",
  "сложна логистична платформа",
  "AI функционалности",
  "специфични интеграции с производствени машини",
  "домейн, хостинг и сървърна инфраструктура",
  "лицензи за инструменти, SaaS услуги и трети страни",
] as const;

export const PRINCIPLES = [
  {
    number: "01",
    title: "Валидираме на всяка фаза",
    description:
      "Всяка фаза завършва с работещ резултат за преглед и тест — преди да продължим напред и преди съответното плащане.",
  },
  {
    number: "02",
    title: "Структурираме производствените данни",
    description:
      "Всяка конфигурация се създава със структура, която позволява последваща производствена автоматизация.",
  },
  {
    number: "03",
    title: "Разширяваме след валидиране",
    description:
      "Допълнителни интеграции и автоматизация могат да бъдат добавени, без да изграждаме клиентското изживяване наново.",
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
    description: "Производствената информация се генерира структурирано.",
  },
  {
    title: "Основа за мащабиране",
    description:
      "Нови продукти и бъдещи интеграции могат да бъдат добавяни поетапно.",
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
export const BASE_PRICE = 800;
export const DOOR_PRICE = 85;
export const DRAWER_PRICE = 60;
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
