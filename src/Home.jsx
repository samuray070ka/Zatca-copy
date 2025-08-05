import React, { useState } from 'react';
import './index.css';
import { IoIosArrowForward } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { useLang } from './LanguageContext.jsx';
import LanguageDropdown from './LanguageDropdown.jsx';
import logoo from "./image-removebg-preview21.png"
import MetaTags from './MetaTags.jsx';
import './third.css'
import banner from './dasdasdasdasd.jpg'
import card from './image2.png'
import card2 from './Screenshot 2025-08-05 160915.png'
import phone from './image-removebg-preview2.png'
import phoneTwo from './image-removebg-preview (1).png'
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import bot from './bot.png'
import botTwo from './bot-2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaCheck } from "react-icons/fa6";
const Home = () => {
  const { lang } = useLang(); 

  const t = {
      placeholder: {
        en: "Your name",
        ru: "Ваше имя",
        uz: "Sizning ismingiz"
      },
      title: {
        en: "Is your business ready for ZATCA compliance?",
        ru: "Готов ли ваш бизнес к соблюдению требований ZATCA?",
        uz: "Sizning biznesingiz ZATCA talablariga tayyormi?"
      },
      subtitle: {
        en: "Zatca deadlines coming up? Choose kpi.com to seamlessly get your accounts aligned.",
        ru: "Приближаются сроки ZATCA? Выбирайте kpi.com для лёгкого соответствия требованиям.",
        uz: "ZATCA muddatlari yaqinlashmoqda? Hisoblaringizni osongina muvofiqlashtirish uchun kpi.com ni tanlang."
      },
      tryBtn: {
        en: "Try Integration",
        ru: "Попробовать интеграцию",
        uz: "Integratsiyani sinab ko'rish"
      },
      formTitle: {
        en: "Connect with Us Now",
        ru: "Свяжитесь с нами",
        uz: "Hoziroq biz bilan bog'laning"
      },
      demoBtn: {
        en: "Get started",
        ru: "Начать сейчас",
        uz: "Endi boshlash"
      },
      agree: {
        en: "I agree to the processing of",
        ru: "Я согласен на обработку",
        uz: "Men qayta ishlashga roziman"
      },
      personal: {
        en: "privacy",
        ru: "персональных данных",
        uz: "shaxsiy ma'lumotlar"
      },
      commonProblems: {
        en: "How kpi.com helps you get integrated?",
        ru: "Как kpi.com помогает с интеграцией?",
        uz: "Kpi.com qanday qilib integratsiya qilishga yordam beradi?"
      },
      bestChoice: {
        en: "Kpi.com — Your Trusted ZATCA Integration Partner",
        ru: "Kpi.com — ваш надежный партнер по интеграции с ZATCA",
        uz: "Kpi.com — Sizning ZATCA integratsiyasi bo'yicha ishonchli hamkoringiz"
      },
      guestInfo: {
        en: "All Invoice Data in One Secure Dashboard Track every essential detail of your e-invoices, all in one place:",
        ru: "Все данные счетов в одной защищённой панели. Отслеживайте каждый важный элемент в одном месте:",
        uz: "Barcha hisob-faktura ma'lumotlari bitta xavfsiz panelda. Elektron hisoblaringizning har bir muhim elementini bir joyda kuzating:"
      },
      guestInfoDesc: {
        en: "Invoice issue and delivery timestamps — Customer identification and VAT details — Approval statuses and rejection logs — Associated credit or debit notes, linked automatically — Digital signatures, UUIDs, and QR codes, fully compliant with ZATCA Phase 2",
        ru: "Дата и время выставления и доставки счета — Идентификация клиента и данные по НДС — Статусы одобрения и отклонения — Автоматически связанные кредитные и дебетовые уведомления — Цифровые подписи, UUID и QR-коды, соответствующие ZATCA Phase 2",
        uz: "Hisob-faktura chiqarish va yetkazib berish vaqtlari — Mijozni identifikatsiya qilish va NDS ma'lumotlari — Tasdiqlash holatlari va rad etish jurnallari — Avtomatik bog'langan kredit yoki debet eslatmalari — Raqamli imzo, UUID va QR-kodlar, ZATCA Phase 2 ga to'liq mos"
      },
      workGuide: {
        en: "Clear Workflow for Every Finance Team A structured invoicing process with:",
        ru: "Чёткий рабочий процесс для каждой финансовой команды:",
        uz: "Har bir moliya jamoasi uchun aniq ish jarayoni:"
      },
      workGuideDesc: {
        en: "Seamless steps from creation to ZATCA submission — Mandatory fields validation before sending — Automatic deadline reminders — Full activity log of staff handling invoices and corrections",
        ru: "Пошаговый процесс от создания до отправки в ZATCA — Проверка обязательных полей перед отправкой — Автоматические напоминания о сроках — Полный журнал действий сотрудников",
        uz: "Yaratishdan ZATCA ga yuborishgacha bo'lgan muammosiz bosqichlar — Yuborishdan oldin majburiy maydonlarni tekshirish — Avtomatik muddat eslatmalari — Hisob-fakturalar va tuzatishlar bilan ishlovchi xodimlarning to'liq faoliyat jurnali"
      },
      transform: {
        en: "Transform how your company handles invoicing",
        ru: "Измените подход вашей компании к выставлению счетов",
        uz: "Kompaniyangizning hisob-faktura bilan ishlash usulini o'zgartiring"
      },
      transformDesc: {
        en: "Kpi delivers tangible improvements across all aspects.",
        ru: "Kpi предлагает реальные улучшения во всех аспектах.",
        uz: "Kpi barcha jihatlarda sezilarli yaxshilanishlarni ta'minlaydi."
      },
      faq: {
        en: "Frequently Asked Questions",
        ru: "Часто задаваемые вопросы",
        uz: "Tez-tez so'raladigan savollar"
      },
      streamline: {
        en: "Is your business ready for ZATCA Phase 2 compliance?",
        ru: "Готов ли ваш бизнес к этапу 2 соответствия ZATCA?",
        uz: "Sizning biznesingiz ZATCA Phase 2 ga muvofiqlashga tayyormi?"
      },
      join: {
        en: "Join companies across Saudi Arabia who are already saving time and staying compliant with Kpi.com",
        ru: "Присоединяйтесь к компаниям, которые уже экономят время и соблюдают требования с помощью Kpi.com",
        uz: "Saudiya Arabistonidagi kompaniyalarga qo'shiling, ular allaqachon vaqtni tejab, Kpi.com yordamida talablarga rioya qilishmoqda"
      },
      tryNow: {
        en: "Try for Free",
        ru: "Попробовать бесплатно",
        uz: "Bepul sinab ko'rish"
      },
      schedule: {
        en: "Get started",
        ru: "Начать",
        uz: "Boshlash"
      },
      orCall: {
        en: "Or call us at:",
        ru: "Или позвоните нам:",
        uz: "Yoki bizga qo'ng'iroq qiling:"
      },
      cards: {
        time: {
          en: "Cloud-Based Platform",
          ru: "Облачная платформа",
          uz: "Bulutga asoslangan platforma"
        },
        time_desc: {
          en: "Kpi.com operates entirely in the cloud...",
          ru: "Kpi.com работает полностью в облаке...",
          uz: "Kpi.com butunlay bulutda ishlaydi..."
        },
        revenue: {
          en: "Integrated with ZATCA API",
          ru: "Интеграция с API ZATCA",
          uz: "ZATCA API bilan integratsiyalashgan"
        },
        revenue_desc: {
          en: "The platform is directly connected...",
          ru: "Платформа напрямую подключена...",
          uz: "Platforma to'g'ridan-to'g'ri ulangan..."
        },
        staff: {
          en: "Tamper-Proof Infrastructure",
          ru: "Защищённая инфраструктура",
          uz: "O'zgartirishga qarshi himoyalangan infratuzilma"
        },
        staff_desc: {
          en: "Kpi.com includes built-in protection...",
          ru: "В Kpi.com встроена защита от подделок...",
          uz: "Kpi.com ga o'rnatilgan himoya mavjud..."
        },
        satisfaction: {
          en: "Full Invoice Archiving",
          ru: "Полная архивация счетов",
          uz: "Hisob-fakturalarning to'liq arxivlash"
        },
        satisfaction_desc: {
          en: "Every invoice issued through Kpi.com...",
          ru: "Каждый счет, выставленный через Kpi.com...",
          uz: "Kpi.com orqali chiqarilgan har bir hisob-faktura..."
        },
        add: {
          en: "Advanced Security Controls",
          ru: "Расширенные средства безопасности",
          uz: "Kengaytirilgan xavfsizlik boshqaruvi"
        },
        add_desc: {
          en: "Our system is built to detect...",
          ru: "Наша система фиксирует все подозрительные действия...",
          uz: "Bizning tizimimiz barcha shubhali harakatlarni aniqlash uchun qurilgan..."
        }
      },
      button: {
        en: "Learn more",
        ru: "Узнать больше",
        uz: "Ko'proq bilish"
      },
      third_one: {
        en: "Tracking of employees' arrival, departure, and tardiness",
        ru: "Фиксация прихода, ухода и опоздания сотрудников",
        uz: "Xodimlarning kelishi, ketishi va kechikishini belgilash"
      },
      third_two: {
        en: "Quick implementation in any business",
        ru: "Быстрое внедрение в любой бизнес",
        uz: "Har qanday biznesga tez kiritish"
      },
      third_three: {
        en: "Integration with 1C and Hikvision",
        ru: "Интеграции с 1С и Hikvision",
        uz: "1S va Hikvision bilan integratsiya"
      },
      third_four: {
        en: "Protection against time and geolocation tampering",
        ru: "Защита от подмены времени и геолокации",
        uz: "Vaqt va geolokatsiya o'zgartirishidan himoya"
      },
      third_five: {
        en: "Automatic generation of timesheets and reports",
        ru: "Автоматическое формирование табеля и отчетов",
        uz: "Tabel va hisobotlarni avtomatik shakllantirish"
      },
      team: {
        en: "Automate communication with employees",
        ru: "Автоматизируй коммуникацию с сотрудниками",
        uz: "Xodimlar bilan muloqotni avtomatlashtiring"
      },
      team_btn: {
        en: "Try for free",
        ru: "Попробовать бесплатно",
        uz: "Bepul sinab ko'ring"
      },
      card_one: {
        en: "Submission of applications for leave, sick leave, and business trips",
        ru: "Подача заявлений на отпуск, больничные и командировки",
        uz: "Dam olish, kasallik varaqalari va komandirovka uchun arizalar topshirish"
      },
      card_two: {
        en: "Analytics and data for each employee",
        ru: "Аналитика и данные по каждому сотруднику",
        uz: "Har bir xodim bo'yicha analitika va ma'lumotlar"
      },
      card_three: {
        en: "Monitoring across different branches simultaneously",
        ru: "Контроль в разных филиалах одновременно",
        uz: "Turli filiallarda bir vaqtning o'zida nazorat"
      },
      card_four: {
        en: "Continuous system operation even without internet",
        ru: "Непрерывная работа системы даже без интернета",
        uz: "Internet bo'lmasa ham tizimning uzluksiz ishlashi"
      },
      phone_one_title: {
        en: "Post Vacancies",
        ru: "По геолокации",
        uz: "Geolokatsiya bo'yicha"
      },
      phone_two_title: {
        en: "Candidates Apply",
        ru: "По распознаванию лица",
        uz: "Yuzni tanish orqali"
      },
      phone_three_title: {
        en: "Sync & Manage",
        ru: "Смешанный тип",
        uz: "Aralash tur"
      },
      phone_one_desc: {
        en: "Your job openings from KPI.com are automatically displayed in the Telegram bot",
        ru: "Сотрудники отмечают свой «Приход» в мобильном приложении после приезда на работу. Сервис считывает геолокацию и отправляет отметку в табель",
        uz: "Xodimlar ishga kelganidan keyin mobil ilovada o'zlarining 'Kelish' ni belgilaydi. Xizmat geolokatsiyani o'qiydi va tabelga yuboradi"
      },
      phone_two_desc: {
        en: "Job seekers apply directly through the convenient Telegram interface",
        ru: "Отметка происходит посредством распознавания лица с корпоративного устройства или дополнительного специального оборудования",
        uz: "Belgilash korporativ qurilma yoki qo'shimcha maxsus uskunalar yordamida yuzni tanish orqali amalga oshiriladi"
      },
      phone_three_desc: {
        en: "All applications are automatically synced back to your KPI.com dashboard",
        ru: "Для тех компаний, которым нужен двойной уровень проверки: геолокация + распознавание лица",
        uz: "Ikki darajali tekshiruvga muhtoj bo'lgan kompaniyalar uchun: geolokatsiya + yuzni tanish"
      },
      three_one_title: {
        en: "Prompt",
        ru: "Оперативная",
        uz: "Tezkor"
      },
      three_two_title: {
        en: "Uninterrupted",
        ru: "Бесперебойная",
        uz: "Uzluksiz"
      },
      three_three_title: {
        en: "Convenient",
        ru: "Удобно",
        uz: "Qulay"
      },
      three_one_desc: {
        en: "Technical Support",
        ru: "Техническая Поддержка",
        uz: "Texnik yordam"
      },
      three_two_desc: {
        en: "Operation",
        ru: "работа",
        uz: "Ish"
      },
      three_three_desc: {
        en: "For Employees",
        ru: "для сотрудников",
        uz: "Xodimlar uchun"
      },
      three_one_unique: {
        en: "Reliable and responsive technical support will help resolve any issues in the shortest time.",
        ru: "Надежная и отзывчивая Техническая поддержка поможет решить любые возникшие вопросы в кратчайшее время",
        uz: "Ishonchli va tezkor texnik yordam har qanday muammolarni eng qisqa vaqt ichida hal qilishga yordam beradi."
      },
      three_two_unique: {
        en: "No serious malfunctions have been observed since Kpi.com started operating in 2021.",
        ru: "За все время работы Kpi.com с 2021 года не наблюдалось ни одной серьёзной неполадки",
        uz: "Kpi.com 2021-yildan beri ishlay boshlaganidan beri jiddiy nosozliklar kuzatilmagan."
      },
      three_three_unique: {
        en: "Kpi.com implementation is easily accepted by employees as it is convenient and simplifies HR processes.",
        ru: "Внедрение Kpi.com легко принимается сотрудниками, ведь он удобен и облегчает кадровые процессы",
        uz: "Kpi.com ni joriy qilish xodimlar tomonidan oson qabul qilinadi, chunki u qulay va kadr jarayonlarini soddalashtiradi."
      },
      photo_p1: {
        en: "HR bot assisted efficient integration",
        ru: "HR-бot Эффективная интеграция с помощью ",
        uz: "HR bot yordamida ishga yollash integratsiya"
      },
      photo_p2: {
        en: "Kpi.com",
        ru: "Kpi.com",
        uz: "Kpi.com"
      },
      photo_p3: {
        en: "Telegram Bot",
        ru: "Telegram-бот",
        uz: "Telegram Bot"
      },
      photo_p4: {
        en: "KPI.com via our smart Telegram bot efficiently organizes the integration process.",
        ru: "KPI.com через нашего умного Telegram-бота эффективно организует процесс интеграции.",
        uz: "KPI.com va aqlli Telegram botimiz orqali integratsiya jarayonini samarali tashkil etadi"
      },
      photo_p5: {
        en: "Request a demo",
        ru: "Запросить демо",
        uz: "Demo buyurtma qiling"
      },
      photo_p6: {
        en: "Try for free",
        ru: "Попробовать бесплатно",
        uz: "Bepul sinab ko'ring"
      },

      photo_second_p1: {
        en: "HR bot assisted efficient integration",
        ru: "HR-бot Эффективная интеграция с помощью",
        uz: "HR bot yordamida ishga yollash integratsiya"
      },
      photo_second_p2: {
        en: "HR Bot",
        ru: "HR-бот",
        uz: "HR Bot"
      },
      photo_second_p3: {
        en: "About",
        ru: "О нас",
        uz: "Haqida"
      },
      photo_second_p4: {
        en: "HR Bot is an advanced Telegram bot specifically designed for modern recruitment needs. Our solution effectively bridges the gap between traditional HR platforms and modern communication tools.",
        ru: "HR Bot — это продвинутый Telegram-бот, специально разработанный для современных задач рекрутинга. Наше решение эффективно устраняет разрыв между традиционными HR-платформами и современными инструментами коммуникации.",
        uz: "HR Bot — bu zamonaviy kadrlar tanlash ehtiyojlari uchun maxsus ishlab chiqilgan ilg‘or Telegram bot. Bizning yechimimiz an’anaviy HR platformalar va zamonaviy aloqa vositalari o‘rtasidagi bo‘shliqni samarali to‘ldiradi."
      },
      photo_second_p5: {
        en: "HR bot assisted screening",
        ru: "HR-бot Сортировка с помощью",
        uz: "HR bot yordamida saralash"
      },
      photo_second_p6: {
        en: "Seamless integration",
        ru: "Безупречная интеграция",
        uz: "Muammosiz integratsiya"
      },
      photo_second_p7: {
        en: "24/7 support",
        ru: "Поддержка 24/7",
        uz: "24/7 qo'llab-quvatlash"
      },
      photo_second_p8: {
        en: "Advanced HR bot algorithms for candidate screening and role matching",
        ru: "Передовые алгоритмы HR-бot для отбора кандидатов и соответствия ролей",
        uz: "Nomzodlarni saralash va lavozimga moshlashtirish uchun ilg'or HR bot algoritmlari"
      },
      photo_second_p9: {
        en: "Full integration with Kpi.com and other HR platforms",
        ru: "Полная интеграция с Kpi.com и другими HR-платформами",
        uz: "Kpi.com va boshqa HR platformalar bilan to'liq integratsiya"
      },
      photo_second_p10: {
        en: "Day-and-night monitoring and technical support",
        ru: "Мониторинг и техническая поддержка круглосуточно",
        uz: "Kun-u tun monitoring va texnik yordam"
      },
      bot: {
        uz: "Arizalarni boshqaring, ma'lumotlarni sinxronlashtiring va nomzodlarni har qachongidan tezroq ishga yollang",
        ru: "Управляйте заявками, синхронизируйте данные и нанимайте кандидатов быстрее, чем когда-либо",
        en: "Manage applications, synchronize data, and hire candidates faster than ever"
      },
      botSecond: {
        uz: "Aqlli avtomatlashtirish va inson markazidagi dizayn - mukammal yollash tajribasi uchun uyg'un yechim",
        ru: "Умная автоматизация и дизайн, ориентированный на человека - идеальное решение для совершенного опыта найма",
        en: "Smart automation and human-centered design - a perfect solution for an impeccable hiring experience"
      }
  };

  const faqData = [
    {
      question: {
        en: 'Is there a location limit in Kpi.com?',
        ru: 'Есть ли ограничение по количеству локаций в Kpi.com?',
        uz: "Kpi.com da lokatsiyalar soni bo'yicha cheklov bormi?"
      },
      answer: {
        en: 'No, the number of locations in Kpi.com is unlimited.',
        ru: 'Нет, количество локаций в Kpi.com неограниченно.',
        uz: "Yo'q, Kpi.com dagi lokatsiyalar soni cheklanmagan."
      }
    },
    {
      question: {
        en: 'How does Kpi.com integrate with external devices?',
        ru: 'Как работает Kpi.com через подключение внешних устройств?',
        uz: "Kpi.com tashqi qurilmalar bilan qanday integratsiyalashadi?"
      },
      answer: {
        en: 'When integrated with devices like Hikvision, employee tracking is automatic through face recognition.',
        ru: 'При интеграции с такими устройствами, как Hikvision, учет сотрудников происходит автоматически через распознавание лиц.',
        uz: "Hikvision kabi qurilmalar bilan integratsiyalashganda, xodimlar kuzatuvi avtomatik tarzda yuzni tanish orqali amalga oshiriladi."
      }
    },
    {
      question: {
        en: 'Does the connection method affect the price?',
        ru: 'Влияет ли способ подключения на стоимость?',
        uz: "Ulanish usuli narxga ta'sir qiladimi?"
      },
      answer: {
        en: 'No, the connection method does not affect the service cost.',
        ru: 'Нет, метод подключения не влияет на стоимость сервиса.',
        uz: "Yo'q, ulanish usuli xizmat narxiga ta'sir qilmaydi."
      }
    },
    {
      question: {
        en: 'What reports does Kpi.com provide?',
        ru: 'Какие отчеты имеются в Kpi.com?',
        uz: "Kpi.com qanday hisobotlarni taqdim etadi?"
      },
      answer: {
        en: 'Kpi.com provides all necessary reports: attendance, tardiness, overtimes, etc.',
        ru: 'Kpi.com формирует все необходимые отчеты по посещаемости, опозданиям, переработкам и другим аспектам.',
        uz: "Kpi.com barcha zarur hisobotlarni taqdim etadi: davomat, kechikishlar, qo'shimcha ish vaqtlar va boshqa jihatlar."
      }
    },
    {
      question: {
        en: 'How to connect Kpi.com?',
        ru: 'Как подключить Kpi.com?',
        uz: "Kpi.com ni qanday ulash mumkin?"
      },
      answer: {
        en: 'Leave a request on the website — we will help you.',
        ru: 'Оставьте заявку на сайте, мы вас проконсультируем и поможем с подключением.',
        uz: "Veb-saytda so'rov qoldiring — biz sizga yordam beramiz va ulanishda yordam beramiz."
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(prev => (prev === index ? null : index));
  const phoneNumber = lang === 'en' 
    ? '+447990113943' 
    : '+998 94 605 42 78';
  const hrefLink = lang === 'en'
    ? 'https://wa.me/447990113943?text=Hello%2C%20Im%20interested%20in%20integrating%20Zatka%20with%20my%20Kpi.com.%20Could%20you%20please%20provide%20more%20details%3F%0ACompany%20Name%3A%20xxx%0APhone%20Number%3A%20xxx%0AEmail%3A%20xxx&type=phone_number&app_absent=0'
    : 'tel:+998 94 605 42 78';

  return (
    <>
    <MetaTags lang={lang} />
    <div className="home ">
      <div className="dark">
      <LanguageDropdown />
        <img className='logoo' src={logoo} alt="" />
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="box">
            <div className="left">
              <p>{t.photo_p1[lang]}</p>
              <h1>{t.photo_p2[lang]} <br /> <strong>{t.photo_p3[lang]}</strong></h1>
              <h5>{t.photo_p4[lang]}</h5>
              <div className='btn_box'>
                <a className='btn_left link' href='#video'>{t.photo_p5[lang]}</a>
                <a className='btn_right link link_second' target='_blank' rel="noreferrer" href='https://calendly.com/kpicom/kpi-com-demo'>{t.photo_p6[lang]}</a>
              </div>
              <button className="bottom"></button>
            </div>
            <div className="right">
              <img src={bot} alt="" />
              <p>{t.bot[lang]}</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="box as">
            <div className="left">
              <p>{t.photo_second_p1[lang]}</p>
              <h1>{t.photo_second_p2[lang]}<strong>{t.photo_second_p3[lang]}</strong></h1>
              <h5>{t.photo_second_p4[lang]}</h5>
              <div className='opasity'>
                <div className='opasity_card'>
                  <button><FaCheck className='opa_icon'/></button>
                  <div className='card_box'>
                  <h3>{t.photo_second_p5[lang]}</h3>
                  <p>{t.photo_second_p6[lang]}</p>
                  </div>
                </div>
               <div className='opasity_card'>
                  <button><FaCheck className='opa_icon'/></button>
                  <div className='card_box'>
                  <h3>{t.photo_second_p7[lang]}</h3>
                  <p>{t.photo_second_p8[lang]}</p>
                  </div>
                </div>
                <div className='opasity_card'>
                  <button><FaCheck className='opa_icon'/></button>
                  <div className='card_box'>
                  <h3>{t.photo_second_p9[lang]}</h3>
                  <p>{t.photo_second_p10[lang]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right sa">
              <img src={botTwo} alt="" />
              <h3>{t.botSecond[lang]}</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
      <div className="third_section_one">
        <div className="third_section_one_box im">
          <h2>{t.third_one[lang]}</h2>
        </div>
        <div className='sections'>
         <div className="div_box">
            <div className='child'>
            <h1>{t.third_two[lang]}</h1>
            <img src="https://static.tildacdn.pro/tild3465-3162-4934-a333-343464386138/Card1.jpg" alt="" />
          </div>
           <div className='child_second'>
            <h1>{t.third_three[lang]}</h1>
            <div className='zkt_flex'>
              <button><i>HIKIVISION</i></button>
            <div className='zkt'>
              <img src="https://logovectorseek.com/wp-content/uploads/2020/04/zkteco-logo-vector.png" alt="" />
            </div>
            </div>
          </div>
         </div>
          <div className="child_third">
            <h1>{t.third_four[lang]}</h1>
          </div> 
        </div>
        <div className="third_section_one_box white">
          <h2>{t.third_five[lang]}</h2>
          <img src={card} alt="" />
        </div>
      </div>

      <div className="video_box fade-in-up " id='video'>
        <h1 className='text'>{t.commonProblems[lang]}</h1>
        <iframe
            className='video'
            src="https://www.youtube.com/embed/AAXBgfLKSeA"
            frameBorder="0"
            allowFullScreen
            title="Hotel CRM Introduction Video"
        />
      </div>

      {/* <h1 className='text'>{t.bestChoice[lang]}</h1>
      <div className='img_box'>
        <div className='box_left'>
          <h3>{t.guestInfo[lang]}</h3>
          <p>{t.guestInfoDesc[lang]}</p>
        </div>
        <div className='box_right sd'>
          <img src={img1} alt="" />
        </div>
      </div> */}
        <div className="third_team slide-in-left">
          <div className='third_left'>
          <p>{t.team[lang]}</p>
          <a className='buttons' href="https://calendly.com/kpicom/kpi-com-demo" target='_blank' rel='noreferrer'><button>{t.team_btn[lang]}</button></a>
          </div>
          <div className='third_right'>
            <img src={banner} alt="" />
          </div>
        </div>

      <div className="thir_cards">
        <div className="thir_card zoom-in one">
          <p>01</p>
          <h2>{t.card_one[lang]}</h2>
          <img src={card2} alt="" />
        </div>
        <div className="thir_card zoom-in twoo">
          <p>02</p>
          <h2>{t.card_two[lang]}</h2>
          <img src="https://optim.tildacdn.pro/tild3061-6362-4035-b432-633432623063/-/cover/754x562/center/center/-/format/webp/Frame_1321314146.jpg" alt="" />
        </div>
        <div className="thir_card zoom-in three">
          <p>03</p>
          <h2>{t.card_three[lang]}</h2>
          <img src={card2} alt="" />
        </div>
        <div className="thir_card zoom-in four">
          <p>04</p>
          <h2>{t.card_four[lang]}</h2>
          <img src="https://static.tildacdn.pro/tild3562-3136-4030-a364-363064313432/Frame_1321314433.png" alt="" />
        </div>
      </div>

      <h1 className='text'>{t.transform[lang]}</h1>
      <div className="phoned">
        <div className='phone_box'>
          <div className='phone_text'>
            <h4>01</h4>
            <h3>{t.phone_one_title[lang]}</h3>
            <p>{t.phone_one_desc[lang]}</p>
          </div>
          <div className="phone_img">
            <img src={phone} alt="" />
          </div>
        </div>
        <div className='phone_box teo'>
          <iframe
            className='video-second'
            src="https://www.youtube.com/embed/AAXBgfLKSeA"
            frameBorder="0"
            allowFullScreen
            title="Hotel CRM Introduction Video"
          />
        </div>
        <div className='phone_box'>
          <div className='phone_text'>
            <h4>02</h4>
            <h3>{t.phone_two_title[lang]}</h3>
            <p>{t.phone_two_desc[lang]}</p>
          </div>
          <div className="phone_img">
            <img src={phoneTwo} alt="" />
          </div>
        </div>
        <div className='phone_box'>
          <div className='phone_text'>
            <h4>03</h4>
            <h3>{t.phone_three_title[lang]}</h3>
            <p>{t.phone_three_desc[lang]}</p>
          </div>
          <div className="phone_img">
            <img src={phoneTwo} alt="" />
          </div>
        </div>
      </div>

      <div className='third_faq'>
        <div className="faq">
          <div className="faq_dark">
            <p>{t.three_one_unique[lang]}</p>
          </div>
          <h1>{t.three_one_title[lang]}</h1>
          <p>{t.three_one_desc[lang]}</p>
        </div>
        <div className="faq faq_second">
           <div className="faq_dark">
            <p>{t.three_two_unique[lang]}</p>
          </div>
          <h1>{t.three_two_title[lang]}</h1>
          <p>{t.three_two_desc[lang]}</p>
        </div>
        <div className="faq faq_third">
           <div className="faq_dark">
            <p>{t.three_three_unique[lang]}</p>
          </div>
          <h1>{t.three_three_title[lang]}</h1>
          <p>{t.three_three_desc[lang]}</p>
        </div>
      </div>

      <div className="faq-container">
        <h2 className='text'>{t.faq[lang]}</h2>
        {faqData.map((item, i) => (
          <div
            className={`faq-item ${activeIndex === i ? 'active fade-in-up' : 'fade-in-up'}`}
            key={i}
            onClick={() => toggleFAQ(i)}
          >
            <button className="faq-question">
              {item.question[lang]}
              <span>{activeIndex === i ? <IoClose /> : <FaPlus />}</span>
            </button>
            {activeIndex === i && (
              <div className={`faq-answer ${activeIndex === i ? 'open' : ''}`}>
                {item.answer[lang]}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="footer">
        <p>{t.join[lang]}<br className='mb' /></p>
        <div className='button_box'>
          <a href="https://calendly.com/kpicom/kpi-com-demo" className='right_footer_box' target="_blank" rel="noopener noreferrer">
            <button className='boc two'>{t.schedule[lang]} <IoIosArrowForward className='icon icon_btn'/></button>
          </a>
        </div>
        <div className='footer_Box'>
         <BsWhatsapp className='icon_footer'/>
         <a href={hrefLink} className='link_footer' target="_blank" rel="noopener noreferrer"><strong>{phoneNumber}</strong></a>
        </div>
      </div>
    </>
  );
};

export default Home;