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
import card2 from './Frame_1321314123-removebg-preview.png'
import phone from './image-removebg-preview2.png'
import phoneTwo from './image-removebg-preview (1).png'
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Home = () => {
  const { lang } = useLang(); 

  const t = {
    placeholder: {
      en: "Your name",
      ru: "Ваше имя"
    },
    title: {
      en: "Is your business ready for ZATCA compliance?",
      ru: "Готов ли ваш бизнес к соблюдению требований ZATCA?"
    },
    subtitle: {
      en: "Zatca deadlines coming up? Choose kpi.com to seamlessly get your accounts aligned.",
      ru: "Приближаются сроки ZATCA? Выбирайте kpi.com для лёгкого соответствия требованиям."
    },
    tryBtn: {
      en: "Try Integration",
      ru: "Попробовать интеграцию"
    },
    formTitle: {
      en: "Connect with Us Now",
      ru: "Свяжитесь с нами"
    },
    demoBtn: {
      en: "Get started",
      ru: "Начать сейчас"
    },
    agree: {
      en: "I agree to the processing of",
      ru: "Я согласен на обработку"
    },
    personal: {
      en: "privacy",
      ru: "персональных данных"
    },
    commonProblems: {
      en: "How kpi.com helps you get integrated?",
      ru: "Как kpi.com помогает с интеграцией?"
    },
    bestChoice: {
      en: "Kpi.com — Your Trusted ZATCA Integration Partner",
      ru: "Kpi.com — ваш надежный партнер по интеграции с ZATCA"
    },
    guestInfo: {
      en: "All Invoice Data in One Secure Dashboard Track every essential detail of your e-invoices, all in one place:",
      ru: "Все данные счетов в одной защищённой панели. Отслеживайте каждый важный элемент в одном месте:"
    },
    guestInfoDesc: {
      en: `Invoice issue and delivery timestamps
          — Customer identification and VAT details
          — Approval statuses and rejection logs
          — Associated credit or debit notes, linked automatically
          — Digital signatures, UUIDs, and QR codes, fully compliant with ZATCA Phase 2`,
      ru: `Дата и время выставления и доставки счета
  — Идентификация клиента и данные по НДС
  — Статусы одобрения и отклонения
  — Автоматически связанные кредитные и дебетовые уведомления
  — Цифровые подписи, UUID и QR-коды, соответствующие ZATCA Phase 2`
    },
    workGuide: {
      en: "Clear Workflow for Every Finance Team A structured invoicing process with:",
      ru: "Чёткий рабочий процесс для каждой финансовой команды:"
    },
    workGuideDesc: {
      en: `Seamless steps from creation to ZATCA submission
  — Mandatory fields validation before sending
  — Automatic deadline reminders
  — Full activity log of staff handling invoices and corrections`,
      ru: `Пошаговый процесс от создания до отправки в ZATCA
  — Проверка обязательных полей перед отправкой
  — Автоматические напоминания о сроках
  — Полный журнал действий сотрудников`
    },
    transform: {
      en: "Transform how your company handles invoicing",
      ru: "Измените подход вашей компании к выставлению счетов"
    },
    transformDesc: {
      en: "Kpi delivers tangible improvements across all aspects.",
      ru: "Kpi предлагает реальные улучшения во всех аспектах."
    },
    faq: {
      en: "Frequently Asked Questions",
      ru: "Часто задаваемые вопросы"
    },
    streamline: {
      en: "Is your business ready for ZATCA Phase 2 compliance?",
      ru: "Готов ли ваш бизнес к этапу 2 соответствия ZATCA?"
    },
    join: {
      en: "Join companies across Saudi Arabia who are already saving time and staying compliant with Kpi.com",
      ru: "Присоединяйтесь к компаниям, которые уже экономят время и соблюдают требования с помощью Kpi.com"
    },
    tryNow: {
      en: "Try for Free",
      ru: "Попробовать бесплатно"
    },
    schedule: {
      en: "Get started",
      ru: "Начать"
    },
    orCall: {
      en: "Or call us at:",
      ru: "Или позвоните нам:"
    },
    cards: {
      time: {
        en: " Cloud-Based Platform",
        ru: " Облачная платформа"
      },
      time_desc: {
        en: "Kpi.com operates entirely in the cloud...",
        ru: "Kpi.com работает полностью в облаке..."
      },
      revenue: {
        en: " Integrated with ZATCA API",
        ru: " Интеграция с API ZATCA"
      },
      revenue_desc: {
        en: "The platform is directly connected...",
        ru: "Платформа напрямую подключена..."
      },
      staff: {
        en: " Tamper-Proof Infrastructure",
        ru: " Защищённая инфраструктура"
      },
      staff_desc: {
        en: "Kpi.com includes built-in protection...",
        ru: "В Kpi.com встроена защита от подделок..."
      },
      satisfaction: {
        en: " Full Invoice Archiving",
        ru: " Полная архивация счетов"
      },
      satisfaction_desc: {
        en: "Every invoice issued through Kpi.com...",
        ru: "Каждый счет, выставленный через Kpi.com..."
      },
      add: {
        en: " Advanced Security Controls",
        ru: " Расширенные средства безопасности"
      },
      add_desc: {
        en: "Our system is built to detect...",
        ru: "Наша система фиксирует все подозрительные действия..."
      }
    },
    button: {
      en: "Learn more",
      ru: "Узнать больше"
    },
    third_one: {
      en: "Lorem ipsum dolor sit amet.",
      ru: "Lorem ipsum dolor sit amet"
    },
    third_two: {
      en: "Lorem ipsum dolor sit amet.",
      ru: "Lorem ipsum dolor sit amet"
    },
    third_three: {
      en: "Lorem ipsum dolor sit amet.",
      ru: "Lorem ipsum dolor sit amet"
    },
    third_four: {
      en: "Lorem ipsum dolor sit amet.",
      ru: "Lorem ipsum dolor sit amet"
    },
    third_five: {
      en: "Lorem ipsum dolor sit amet.",
      ru: "Lorem ipsum dolor sit amet"
    },
    team: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tempore.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tempore."
    },
    team_btn: {
      en: "Learn more",
      ru: "Узнать больше"
    },
    card_one: {
      en: "Lorem ipsum dolor sit amet lorem alskdl a;dkaks aldsl;kd;",
      ru:"Lorem ipsum dolor sit amet"
    },
    card_two: {
      en: "Lorem ipsum dolor sit amet lorem alskd",
      ru:"Lorem ipsum dolor sit amet"
    },
    card_three: {
      en: "Lorem ipsum dolor sit amet lorem alskdl a;dkaks aldsl;kd;",
      ru:"Lorem ipsum dolor sit amet"
    },
    card_four: {
      en: "Lorem ipsum dolor sit amet lorem alskdl a;dkaks aldsl;kd;",
      ru:"Lorem ipsum dolor sit amet"
    },
    phone_one_title: {
      en: "Web lorem ipsum",
      ru: "Web lorem ipsum"
    },
    phone_two_title: {
      en: "Web lorem ipsum",
      ru: "Web lorem ipsum"
    },
    phone_three_title: {
      en: "Web lorem ipsum",
      ru: "Web lorem ipsum"
    },
    phone_one_desc: {
      en: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit!",
      ru: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit!"
    },
    phone_two_desc: {
      en: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit!",
      ru: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit!"
    },
    phone_three_desc: {
      en: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit!",
      ru: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit!"
    },
    three_one_title: {
      en: "lorem ipsuum dolor",
      ru: "lorem ipsum dolor"
    },
    three_two_title: {
      en: "lorem ipsuum dolor",
      ru: "lorem ipsum dolor "
    },
    three_three_title: {
      en: "lorem ipsuum dolor",
      ru: "lorem ipsum dolor "
    },
    three_one_desc: {
      en: "lorem ipsuum dolor",
      ru: "lorem ipsum dolor sit amet"
    },
    three_two_desc: {
      en: "lorem ipsuum dolor",
      ru: "lorem ipsum dolor sit amet"
    },
    three_three_desc: {
      en: "lorem ipsuum dolor",
      ru: "lorem ipsum dolor sit amet"
    },
    three_one_unique: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam."
    },
    three_two_unique: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam."
    },
    three_three_unique: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam."
    },
    
  };

  const faqData = [
  {
    question: {
      en: 'Is there a location limit in WorkPace?',
      ru: 'Есть ли ограничение по количеству локаций в WorkPace?'
    },
    answer: {
      en: 'No, the number of locations in WorkPace is unlimited.',
      ru: 'Нет, количество локаций в WorkPace неограниченно.'
    }
  },
  {
    question: {
      en: 'How does WorkPace integrate with external devices?',
      ru: 'Как работает WorkPace через подключение внешних устройств?'
    },
    answer: {
      en: 'When integrated with devices like Hikvision, employee tracking is automatic through face recognition.',
      ru: 'При интеграции с такими устройствами, как Hikvision, учет сотрудников происходит автоматически через распознавание лиц.'
    }
  },
  {
    question: {
      en: 'Does the connection method affect the price?',
      ru: 'Влияет ли способ подключения на стоимость?'
    },
    answer: {
      en: 'No, the connection method does not affect the service cost.',
      ru: 'Нет, метод подключения не влияет на стоимость сервиса.'
    }
  },
  {
    question: {
      en: 'What reports does WorkPace provide?',
      ru: 'Какие отчеты имеются в WorkPace?'
    },
    answer: {
      en: 'WorkPace provides all necessary reports: attendance, tardiness, overtimes, etc.',
      ru: 'WorkPace формирует все необходимые отчеты по посещаемости, опозданиям, переработкам и другим аспектам.'
    }
  },
  {
    question: {
      en: 'How to connect WorkPace?',
      ru: 'Как подключить WorkPace?'
    },
    answer: {
      en: 'Leave a request on the website — we will help you.',
      ru: 'Оставьте заявку на сайте, мы вас проконсультируем и поможем с подключением.'
    }
  }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(prev => (prev === index ? null : index));

  return (
    <>
    <MetaTags lang={lang} />
      <div className="home">
          <div className='third'>
            <LanguageDropdown />
          <img className='logoo' src={logoo} alt="" />
          </div>
        <div className="dark">
          <div className="box">
            <div className="left">
              <div className='na'>
              <h1 className='fade-in-up'>{t.title[lang]}</h1>
            <a 
              className='link' 
              href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx" 
              target="_blank" 
              rel="noopener noreferrer"
            >
             <button className='third_btn third_btn fade-in-up'>{t.button[lang]}</button>
            </a>
              </div>
            </div>
            <div className="right fade-in-up">
              <div>
                <label>{t.formTitle[lang]}</label>
                <input type="text" placeholder={t.placeholder[lang]} />
                <input type="text" placeholder="+998 " />
                  <a href="https://calendly.com/kpicom/kpi-com-demo" className="link asd" target="_blank" rel="noopener noreferrer">
                    <button className="input_btn">
                      {t.demoBtn[lang]}
                    </button>
                  </a>
                <p>
                  {t.agree[lang]} <a href='https://www.kpi.com/en/company/privacy/' className='privacy' target="_blank" rel="noopener noreferrer">{t.personal[lang]}</a>
                </p>
              </div>
            </div>
          </div>
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

      <div className="video_box fade-in-up ">
        <h1 className='text'>{t.commonProblems[lang]}</h1>
        <iframe
            className='video'
            src="https://www.youtube.com/embed/N5ay5AooieI"
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
          <button>{t.team_btn[lang]}</button>
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
            src="https://www.youtube.com/embed/N5ay5AooieI"
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
          <div className={`faq-item ${activeIndex === i ? 'active fade-in-up' : 'fade-in-up'}`} key={i} onClick={() => toggleFAQ(i)}>
            <button className="faq-question">
              {lang === 'ru' ? item.question.ru : item.question.en}
              <span>{activeIndex === i ? <IoClose/> : <FaPlus/>}</span>
            </button>
            {activeIndex === i && (
              <div className={`faq-answer ${activeIndex === i ? 'open' : ''}`}>
                {lang === 'ru' ? item.answer.ru : item.answer.en}
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
         <a href="https://wa.me/447990113943?text=Hello%2C%20Im%20interested%20in%20integrating%20Zatka%20with%20my%20Kpi.com.%20Could%20you%20please%20provide%20more%20details%3F%0ACompany%20Name%3A%20xxx%0APhone%20Number%3A%20xxx%0AEmail%3A%20xxx&type=phone_number&app_absent=0" className='link_footer' target="_blank" rel="noopener noreferrer"><strong> +447990113943</strong></a>
        </div>
      </div>
    </>
  );
};

export default Home;