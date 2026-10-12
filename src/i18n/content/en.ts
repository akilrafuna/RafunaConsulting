import type { Dict } from '../types';

export const en: Dict = {
  locale: 'en',
  langName: 'English',
  ogLocale: 'en_GB',
  intl: 'en-GB',
  months: ['January','February','March','April','May','June','July','August','September','October','November','December'],

  nav: {
    services: 'Services',
    guide: 'Tax deadlines',
    about: 'About',
    contact: 'Contact',
    book: 'Book a meeting',
    call: 'Call',
    whatsapp: 'WhatsApp',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    skip: 'Skip to content',
    home: 'Home',
    primary: 'Main navigation',
  },

  firm: {
    description: 'Accounting and tax advisory firm in Prishtina, Kosovo, since 2009.',
    motto: 'Reliability, Honesty, Professionalism.',
    mottoNote: 'Our principle since day one',
    addressLines: ['Rr. Zija Shemsiu C-12, H-5, K-1, No. 4', 'Ulpianë, 10000 Prishtina, Kosovo'],
    days: 'Monday – Friday',
    hoursLabel: 'Hours',
    phoneLabel: 'Phone and WhatsApp',
    emailLabel: 'Email',
    addressLabel: 'Address',
    openNow: 'Open now',
    closedNow: 'Closed now',
    directions: 'Open in Google Maps',
    whatsappText: 'Hello, I would like to book a meeting with Rafuna Consulting.',
  },

  home: {
    meta: {
      title: 'Rafuna Consulting | Accountant & Tax Advisor in Pristina, Kosovo',
      description:
        'Accounting firm in Prishtina (Pristina) since 2009: bookkeeping, VAT and income tax returns, tax audit support and financial advice for Kosovo businesses.',
    },
    display: 'Every figure in its place.',
    h1: 'Accounting and tax advisory in Prishtina, Kosovo',
    lede: 'Books in order, returns on time, tax audits without the stress.',
    answer:
      'Rafuna Consulting is an accounting and tax advisory firm in Prishtina (Pristina), Kosovo, founded in 2009 by Agron Rafuna. We keep the books for businesses, prepare and file their VAT, personal income tax and corporate income tax returns, support them through audits by the Kosovo Tax Administration (ATK), and advise on finance and long-term investment, for companies in Kosovo and owners who live abroad.',
    facts: [
      { value: '2009', label: 'founded' },
      { value: '08–16', label: 'Monday – Friday' },
      { value: 'Ulpianë', label: 'our office in Prishtina' },
    ],
    servicesTitle: 'Four services, one partner',
    servicesText: 'Everything your business finances need, under one roof.',
    calendarTitle: 'Upcoming tax deadlines in Kosovo',
    calendarText: 'We track these for every client.',
    calendarLink: 'All deadlines and rates',
    processTitle: 'How we work',
    processText: 'Four steps, no surprises.',
    steps: [
      {
        title: 'Book a meeting',
        text: 'Call, WhatsApp or the form, with no obligation.',
      },
      {
        title: 'Analysis and plan',
        text: 'We review where you stand and set a plan with clear deadlines.',
      },
      {
        title: 'Implementation',
        text: 'We keep the books and file the returns for you.',
      },
      {
        title: 'Reporting and support',
        text: 'Regular reports and a direct contact.',
      },
    ],
    founderTitle: 'A name behind every figure',
    founderText: ['Agron Rafuna founded the firm in Prishtina in 2009, after specialising in accounting. The family name stands behind every balance sheet we sign off.'],
    founderRole: 'Founder',
    founderCredential: 'Specialisation in accounting',
    teamTitle: 'The team',
    team: ['Licensed accountants', 'A PhD in finance', 'Specialised accounting assistants', 'Highly qualified experts'],
    diasporaTitle: 'Living abroad? Your business in Kosovo stays in order.',
    diasporaText: 'You live in Germany, Switzerland or Austria; we look after your business in Kosovo by email, phone and online meetings.',
    diasporaPoints: [
      'Email, phone and online meetings',
      'Tax returns and payments on time',
      'Regular reports you can read from anywhere',
    ],
    sectorsTitle: 'Who we work with',
    sectors: ['Trade', 'Construction', 'Services', 'IT', 'Hospitality', 'Start-ups'],
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'What services does Rafuna Consulting offer?',
        a: 'Accounting (books of account, balance sheets, bank reconciliation, cash-flow reports), tax advisory (VAT, personal and corporate income tax returns, and support during Kosovo Tax Administration audits), financial advisory and long-term investment advisory.',
      },
      {
        q: 'Who is on the Rafuna Consulting team?',
        a: 'The firm was founded by Agron Rafuna, who specialised in accounting. The team includes licensed accountants, a PhD in finance, specialised accounting assistants and other highly qualified experts.',
      },
      {
        q: 'What kinds of businesses do you work with?',
        a: 'Small, medium and large businesses in trade, construction, services, IT and hospitality, as well as start-ups. Every client gets a plan that fits the needs and size of the business.',
      },
      {
        q: 'How do VAT and income tax filings work in Kosovo?',
        a: 'VAT registration becomes mandatory once turnover exceeds €30,000 within a calendar year. VAT is declared and paid monthly, by the 20th of the following month, and annual personal and corporate income tax returns are due by 31 March. We handle registration, preparation and filing on time.',
      },
      {
        q: 'Can you manage my Kosovo business if I live abroad?',
        a: 'Yes. We work with clients abroad by email, phone and online meetings, so the accounting and tax obligations of your business in Kosovo are handled without you needing to be there.',
      },
      {
        q: 'What are your opening hours and how do I book a meeting?',
        a: 'We are open Monday to Friday, 08:00–16:00, in Ulpianë, Prishtina. Book by calling +383 44 114 981, messaging us on WhatsApp or using the form on the contact page.',
      },
    ],
    closingTitle: 'Let’s put your figures in order.',
    closingText: 'Book a meeting to review your financial and tax documents. The first meeting comes with no obligation.',
  },

  services: {
    accounting: {
      name: 'Accounting',
      summary: 'Books of account, monthly and annual balance sheets, bank reconciliation and cash-flow reports.',
      meta: {
        title: 'Accounting Services for Businesses in Pristina, Kosovo | Rafuna Consulting',
        description:
          'Bookkeeping, monthly and annual balance sheets, bank reconciliation and cash-flow reporting for businesses in Kosovo. An accounting firm in Prishtina since 2009.',
      },
      h1: 'Accounting for businesses in Prishtina',
      answer:
        'Rafuna Consulting keeps the complete accounts of your business: we record every transaction in the books, reconcile your bank accounts, and prepare monthly and annual balance sheets and cash-flow reports. Your books stay in order, your tax returns rest on accurate figures, and your business is ready for any inspection.',
      includesTitle: 'What it includes',
      includes: [
        {
          title: 'Books of account',
          text: 'Sales, purchases, expenses and payroll recorded regularly, with the supporting documents for every entry.',
        },
        {
          title: 'Bank reconciliation',
          text: 'Every movement in your bank accounts is matched against the books, so no payment goes unexplained.',
        },
        {
          title: 'Monthly and annual balance sheets',
          text: 'Monthly financial statements for quick decisions, and annual statements that meet legal requirements.',
        },
        {
          title: 'Cash-flow reports',
          text: 'A clear view of where money comes from and where it goes, so payments and investments are planned in time.',
        },
      ],
      audienceTitle: 'Who it is for',
      audience:
        'Small and medium businesses, construction, trading and service companies, start-ups, and owners who run their business from outside Kosovo. If you keep the books yourself today or want to switch accountants, we start by reviewing where things stand.',
      faqs: [
        {
          q: 'What should I bring to the first meeting?',
          a: 'Your business registration certificate (ARBK) and fiscal number, your latest tax returns, bank statements and the invoices for the most recent period. If anything is missing, we complete it together.',
        },
        {
          q: 'How often will my business get reports?',
          a: 'Balance sheets are prepared every month and at year end. Cash-flow reports are prepared when needed, for example before an investment or a loan.',
        },
        {
          q: 'Can I switch to you from another accountant?',
          a: 'Yes. We take over the documents from your previous accountant, check the state of the books and continue your filings without interruption.',
        },
      ],
    },

    tax: {
      name: 'Tax advisory',
      summary: 'VAT, personal and corporate income tax returns on time, support during tax audits and lawful tax planning.',
      meta: {
        title: 'Tax Advisor in Pristina: VAT, Income Tax & Audits | Rafuna Consulting',
        description:
          'VAT, personal and corporate income tax returns filed on time, support during Kosovo Tax Administration (ATK) audits, and lawful tax planning for businesses in Kosovo.',
      },
      h1: 'Tax advisory in Kosovo: VAT, income tax and audits',
      answer:
        'We prepare and file your business’s tax returns with the Kosovo Tax Administration (ATK): VAT every month by the 20th, quarterly instalments and annual personal and corporate income tax returns by 31 March. We support you when ATK carries out an audit, keep you informed about changes in the law and plan your taxes within the law, so you pay neither more than you owe nor late.',
      includesTitle: 'What it includes',
      includes: [
        {
          title: 'VAT registration',
          text: 'Once turnover exceeds €30,000 within a calendar year, VAT registration is mandatory. We register you and prepare you for the new obligations.',
        },
        {
          title: 'Monthly VAT returns',
          text: 'Sales and purchase ledgers are reconciled with your invoices, then the return and payment are filed by the 20th of the following month.',
        },
        {
          title: 'Personal and corporate income tax',
          text: 'Quarterly instalments (15 January, 15 April, 15 July, 15 October) and annual returns by 31 March, for sole traders and companies.',
        },
        {
          title: 'Tax audits',
          text: 'We review the books before the audit, prepare the documents and explanations for the inspectors, and support you until the process closes.',
        },
        {
          title: 'Lawful tax planning',
          text: 'The right tax regime, deductible expenses and planned deadlines, so your liability is accurate and predictable.',
        },
      ],
      audienceTitle: 'Who it is for',
      audience:
        'Every business registered in Kosovo: sole traders, partnerships and limited liability companies (LLC / SH.P.K.), as well as businesses approaching the VAT threshold.',
      faqs: [
        {
          q: 'When do I have to register for VAT in Kosovo?',
          a: 'When your business’s turnover exceeds €30,000 within a calendar year. From then on you charge VAT on sales and file a return every month.',
        },
        {
          q: 'When is the VAT return due in Kosovo?',
          a: 'Every month, by the 20th of the following month. The return and the payment are due on the same date.',
        },
        {
          q: 'How much tax do small businesses pay in Kosovo?',
          a: 'Businesses with gross annual income up to €30,000 pay a quarterly tax on gross income: 3% for trade, transport and agriculture, and 9% for services and professional activities, with a minimum of €37.50 per quarter. Above that threshold, corporate income tax of 10% on profit applies.',
        },
        {
          q: 'What should I do if ATK notifies me of an audit?',
          a: 'Contact us as soon as you receive the notice. We review the books and documents before the audit, prepare the explanations and support you throughout the process.',
        },
      ],
    },

    financial: {
      name: 'Financial advisory',
      summary: 'Strategic financial planning, investment analysis, risk management and resource optimisation.',
      meta: {
        title: 'Financial Advisory for Businesses in Kosovo | Rafuna Consulting',
        description:
          'Strategic financial planning, investment analysis, risk management and resource optimisation for businesses in Kosovo, built on your real accounting data.',
      },
      h1: 'Financial advisory for businesses in Kosovo',
      answer:
        'Financial advisory turns your accounts into decisions. We analyse your business’s financial statements, cash flow and costs, then give concrete recommendations: where to save, when and how to invest, how to finance growth and which risks need to be controlled.',
      includesTitle: 'What it includes',
      includes: [
        {
          title: 'Strategic financial planning',
          text: 'Budgets and forecasts tied to the goals of the business, reviewed regularly against actual results.',
        },
        {
          title: 'Investment analysis',
          text: 'Cost, return and payback assessed before you buy equipment or property or open a new location.',
        },
        {
          title: 'Risk management',
          text: 'Liquidity, debt and customer-concentration risks identified, with concrete measures for each.',
        },
        {
          title: 'Resource optimisation',
          text: 'Analysis of costs and working capital, so the business’s money works harder and sits idle less.',
        },
      ],
      audienceTitle: 'Who it is for',
      audience:
        'Owners and managers facing big decisions, such as investments, loans, hiring or expansion, who want to make them with accurate figures in front of them.',
      faqs: [
        {
          q: 'How is financial advisory different from accounting?',
          a: 'Accounting records accurately what has happened. Financial advisory uses that data to decide what should happen next: budgets, investments, financing and risk control.',
        },
        {
          q: 'What data do you work with?',
          a: 'Financial statements, bank statements, key contracts and business plans. If we already keep your accounts, the data is ready.',
        },
        {
          q: 'How does working together start?',
          a: 'With a meeting where we look at your financial position and your questions. After the analysis you receive a plan with concrete recommendations and deadlines.',
        },
      ],
    },

    investment: {
      name: 'Long-term investment advisory',
      summary: 'Analysis of investment opportunities, long-term portfolio planning, risk and return assessment, and expansion strategy.',
      meta: {
        title: 'Long-Term Investment Advisory in Kosovo | Rafuna Consulting',
        description:
          'Investment opportunity analysis, long-term portfolio planning, risk and return assessment and expansion strategy for businesses in Kosovo and the region.',
      },
      h1: 'Long-term investment advisory',
      answer:
        'Long-term investment advisory helps businesses and owners decide where, when and how much to invest for sustainable growth. We assess opportunities in Kosovo and the region, calculate risk and expected return, and build a plan that fits your goals and time horizon.',
      includesTitle: 'What it includes',
      includes: [
        {
          title: 'Investment opportunity analysis',
          text: 'Projects, properties and businesses assessed with clearly written assumptions and several scenarios.',
        },
        {
          title: 'Long-term portfolio planning',
          text: 'Capital allocated according to time horizon, liquidity needs and tolerance for risk.',
        },
        {
          title: 'Risk and return assessment',
          text: 'Expected return weighed against real risks, including taxes and the cost of financing.',
        },
        {
          title: 'Business expansion strategy',
          text: 'A plan for new branches, new markets or acquisitions, with phases, financing and decision points.',
        },
      ],
      audienceTitle: 'Who it is for',
      audience:
        'Growing businesses, and owners, including those in the diaspora, who want to invest capital in Kosovo with a plan rather than on instinct.',
      faqs: [
        {
          q: 'Who is this service for?',
          a: 'Businesses planning to expand, and owners who want to invest profits or savings in Kosovo and the region with a long-term plan.',
        },
        {
          q: 'How are taxes factored into an investment?',
          a: 'Every analysis includes the tax effect, such as VAT, profit tax and withholding taxes, because the return that matters is the return after tax.',
        },
        {
          q: 'How does the process start?',
          a: 'With a meeting to clarify your goals, time horizon and available capital. We then prepare the analysis and discuss it with you before any decision.',
        },
      ],
    },
  },

  service: {
    breadcrumb: 'Services',
    otherServices: 'Other services',
    askTitle: 'A question about your situation?',
    askText: 'Call or message us on WhatsApp during office hours. You’ll speak to us directly.',
    factsTitle: 'Figures worth knowing',
    guideLink: 'Full Kosovo tax calendar',
  },

  guide: {
    meta: {
      title: 'Kosovo Tax Deadlines & Rates 2026 | Rafuna Consulting',
      description:
        'Kosovo tax calendar 2026 and key rates: VAT 18% and 8%, €30,000 threshold, corporate tax 10%, personal income tax 0–10%, pension 5% + 5%.',
    },
    h1: 'Kosovo tax deadlines and rates, 2026',
    byline: 'Prepared by Rafuna Consulting, Prishtina',
    updated: 'Updated',
    answer:
      'In Kosovo, VAT is declared and paid monthly by the 20th of the following month. Withheld taxes and pension contributions are due by the 15th of the following month. Quarterly corporate and personal income tax instalments are due on 15 January, 15 April, 15 July and 15 October, and annual returns are due by 31 March.',
    nextTitle: 'Next deadlines',
    nextText: 'Calculated from today’s date.',
    calendarTitle: 'Tax calendar',
    calendarHead: ['Obligation', 'Deadline', 'Who files'],
    calendar: [
      { what: 'VAT return and payment', when: 'Monthly, by the 20th of the following month', who: 'VAT-registered businesses' },
      {
        what: 'Withholding tax and pension contributions',
        when: 'Monthly, by the 15th of the following month',
        who: 'Employers and withholding agents',
      },
      {
        what: 'Quarterly corporate and personal income tax instalments',
        when: '15 January, 15 April, 15 July, 15 October',
        who: 'Companies and sole traders',
      },
      {
        what: 'Annual corporate and personal income tax return',
        when: '31 March of the following year',
        who: 'Companies and sole traders',
      },
    ],
    ratesTitle: 'Key rates',
    ratesHead: ['Tax', 'Rate', 'Note'],
    rates: [
      { what: 'VAT, standard rate', rate: '18%', note: 'Most goods and services' },
      { what: 'VAT, reduced rate', rate: '8%', note: 'E.g. water, electricity, dairy products, medicines' },
      { what: 'VAT registration threshold', rate: '€30,000', note: 'Turnover within a calendar year' },
      { what: 'Corporate income tax', rate: '10%', note: 'On taxable profit' },
      {
        what: 'Small businesses: trade, transport, agriculture',
        rate: '3%',
        note: 'Of quarterly gross income; up to €30,000 a year; min. €37.50',
      },
      {
        what: 'Small businesses: services and professional activities',
        rate: '9%',
        note: 'Of quarterly gross income; up to €30,000 a year; min. €37.50',
      },
      { what: 'Pension contributions', rate: '5% + 5%', note: 'Employee and employer, 10% in total' },
      { what: 'Withholding tax: interest, royalties', rate: '10%', note: 'Before any double tax treaty relief' },
      { what: 'Withholding tax: rent', rate: '9%', note: 'Withheld by the tenant' },
      { what: 'Dividends', rate: '0%', note: 'No withholding tax' },
    ],
    pitTitle: 'Personal income tax on salaries',
    pitHead: ['Annual salary', 'Rate'],
    pit: [
      ['Up to €3,000', '0%'],
      ['€3,000.01 – €5,400', '8%'],
      ['Above €5,400', '10%'],
    ],
    faqs: [
      {
        q: 'What happens if a tax deadline passes without a return?',
        a: 'ATK applies penalties and interest for late filing and late payment, and interest grows over time. The sooner the situation is corrected, the lower the cost, so contact us straight away.',
      },
      {
        q: 'Who pays pension contributions in Kosovo?',
        a: 'The employer withholds 5% of the employee’s gross salary and pays a further 5% itself, 10% in total as the mandatory contribution, by the 15th of the following month.',
      },
      {
        q: 'Will these rates still apply next year?',
        a: 'Rates and deadlines change only through changes in the law. The date this page was last updated is shown at the top; for the latest changes, contact us.',
      },
    ],
    sourcesTitle: 'Sources',
    sourcesNote: 'The figures on this page were checked against the sources below.',
    reviewed: 'reviewed',
    disclaimer:
      'This guide is for information only and does not replace professional advice on your specific case. For your business’s situation, contact us.',
  },

  deadlines: {
    labels: {
      vat: 'VAT return and payment',
      withholding: 'Withholding tax and pension contributions',
      advance: 'Quarterly income tax instalment',
      annual: 'Annual income tax return',
    },
    period: {
      vat: 'for {period}',
      withholding: 'for {period}',
      advance: 'for {period}',
      annual: 'for {period}',
    },
    today: 'today',
    tomorrow: 'tomorrow',
    inDays: 'in {n} days',
    live: 'Calculated from today’s date',
  },

  about: {
    meta: {
      title: 'About Us | Rafuna Consulting, Accountants in Pristina since 2009',
      description:
        'Rafuna Consulting was founded in Prishtina in 2009 by Agron Rafuna. A team of licensed accountants and a PhD in finance, serving businesses in Kosovo and owners abroad.',
    },
    h1: 'About Rafuna Consulting',
    lede: 'Your trusted partner in finance, in Prishtina since 2009.',
    story: [
      'From our office in Ulpianë, Prishtina, Rafuna Consulting has served Kosovo businesses with integrity and professionalism since 2009. Our team knows the local economy and the regulatory changes of the Kosovo market well.',
      'We are not just accountants. We are your financial advisers, ready to back every decision with accurate analysis and practical recommendations, from accounting and tax to investment and strategic planning.',
      'We work with small and medium businesses, construction, trading and service companies, and start-ups across the Republic of Kosovo, as well as with owners who live abroad.',
    ],
    founderTitle: 'The founder',
    founderText: [
      'Agron Rafuna founded Rafuna Consulting in 2009, after specialising in accounting. The firm carries the family name, and with it the responsibility for every balance sheet and every return that leaves the office.',
      'The principle it started with is the one the team works by today: Reliability, Honesty, Professionalism.',
    ],
    teamTitle: 'The team',
    teamText:
      'The team includes licensed accountants, a PhD in finance, specialised accounting assistants and other highly qualified experts. Each brings broad practical experience and the legal and financial knowledge the Kosovo market demands.',
    valuesTitle: 'What guides us',
    values: [
      { title: 'Integrity', text: 'Full transparency in every report and every piece of advice. Professional ethics are the foundation of our work.' },
      { title: 'Accuracy', text: 'Every figure is checked carefully before it is reported.' },
      { title: 'Focus on growth', text: 'We follow your business’s financial performance and give concrete recommendations for its development.' },
      { title: 'Confidentiality', text: 'Your financial data is handled with the highest level of security and professional discretion.' },
    ],
    officeTitle: 'The office',
    officeText: 'Find us in the Ulpianë district, on Rr. Zija Shemsiu, Prishtina. We are open Monday to Friday, 08:00–16:00.',
  },

  contact: {
    meta: {
      title: 'Contact | Book a Meeting with Rafuna Consulting, Pristina',
      description:
        'Book a meeting with Rafuna Consulting in Prishtina: +383 44 114 981, WhatsApp or the online form. Monday – Friday, 08:00–16:00, Rr. Zija Shemsiu, Ulpianë.',
    },
    h1: 'Book a meeting',
    lede: 'To review your financial and tax documents, with no obligation.',
    answer:
      'Rafuna Consulting is located at Rr. Zija Shemsiu C-12, H-5, K-1, No. 4, Ulpianë, 10000 Prishtina, Kosovo. Hours: Monday – Friday, 08:00–16:00. Phone and WhatsApp: +383 44 114 981. Email: rafunaconsulting@gmail.com.',
    channelsTitle: 'Talk to us directly',
    callText: 'During office hours.',
    whatsappTextLong: 'Write whenever suits you; we reply during office hours.',
    emailText: 'For documents and detailed questions.',
    formTitle: 'Or leave us a request',
    formText: 'Tell us a little about your business and we’ll get in touch to arrange the meeting.',
    visitTitle: 'Visit us',
    visitText: 'Our office is in the Ulpianë district of Prishtina.',
    mapButton: 'Show map',
    mapNote: 'The map loads from Google Maps only after you open it.',
  },

  form: {
    name: 'Full name',
    namePh: 'Your name',
    phone: 'Phone',
    phonePh: '+383 … or +49 …',
    email: 'Email',
    emailPh: 'name@company.com',
    service: 'Service',
    servicePh: 'Choose a service',
    serviceOptions: [
      'Accounting',
      'Tax advisory',
      'Tax audit (ATK)',
      'Financial advisory',
      'Long-term investment advisory',
      'Several services',
    ],
    message: 'Message',
    messagePh: 'Tell us a little about your business and what you need…',
    optional: 'optional',
    submit: 'Send request',
    sending: 'Sending…',
    sent: 'Request sent.',
    sentText: 'Thank you. We’ll be in touch shortly to arrange the meeting.',
    error: 'The request could not be sent. Please try again or call us on +383 44 114 981.',
    privacy: 'Your details are used only to contact you about this request.',
    subject: 'New meeting request from the website (EN)',
  },

  footer: {
    rights: 'All rights reserved.',
    explore: 'Pages',
    reach: 'Contact',
    languages: 'Languages',
    note: 'Accounting and tax advisory in Prishtina, Kosovo.',
  },

  notFound: {
    meta: { title: 'Page not found | Rafuna Consulting', description: 'The page you were looking for does not exist.' },
    h1: 'This page doesn’t exist.',
    text: 'The link may be out of date, or the address may contain a typo.',
    back: 'Back to the home page',
  },

  common: {
    updated: 'Updated',
    readMore: 'More',
    sources: 'Sources',
    allServices: 'All services',
    breadcrumbLabel: 'Breadcrumb',
  },
};
