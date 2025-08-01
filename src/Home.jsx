import React, { useState } from 'react';
import './index.css';
import { IoIosArrowForward } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { useLang } from './LanguageContext.jsx';
import LanguageDropdown from './LanguageDropdown.jsx';
import img1 from './img1.png'
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
// import { VscPlay } from "react-icons/vsc";
const Home = () => {
  const { lang } = useLang(); 
  const t = {
        placeholder: {en: "Your name", ar: "ما اسمك"},
        title: { en: "Is your business ready for ZATCA compliance?", ar: "هل عملك جاهز للامتثال لمتطلبات هيئة الزكاة والضريبة والجمارك (ZATCA)؟" },
        subtitle: {
        en: "Zatca deadlines coming up? Choose kpi.com to seamlessly get your accounts aligned.",
        ar: "هل تقترب مواعيد ZATCA النهائية؟ اختر kpi.com لتنظيم حساباتك بسلاسة."
        },
        tryBtn: { en: "Try Integration", ar: "جرّب التكامل الآن" },
        formTitle: { en: "Connect with Us Now", ar: "تواصل معنا الآن" },
        demoBtn: { en: "Get started", ar: "ابدأ الآن" },
        agree: { en: "I agree to the processing of", ar: "أوافق على معالجة" },
        personal: { en: "privacy", ar: "خصوصية" },
        commonProblems: {
        en: "How kpi.com helps you get integrated?",
        ar: "كيف تساعدك kpi.com على التكامل؟"},
        // commonSubtitle: {
        // en: "How kpi.com helps you get integrated",
        // ar: "ما الذي يعيق نمو عملك بكفاءة؟"
        // },
        bestChoice: {
        en: "Kpi.com — Your Trusted ZATCA Integration Partner",
        ar: "Kpi.com — شريكك الموثوق لتكامل ZATCA"
        },
        guestInfo: {
        en: "All Invoice Data in One Secure Dashboard Track every essential detail of your e-invoices, all in one place:",
        ar: "كل بيانات الفواتير في لوحة تحكم واحدة وآمنة تابع جميع تفاصيل فواتيرك الإلكترونية في مكان واحد:"
        },
        guestInfoDesc: {
        en: `Invoice issue and delivery timestamps
            — Customer identification and VAT details
            — Approval statuses and rejection logs
            — Associated credit or debit notes, linked automatically
            — Digital signatures, UUIDs, and QR codes, fully compliant with ZATCA Phase 2`,
        ar: `معلومات العميل والرقم الضريبي
        — حالات الموافقة أو الرفض من ZATCA
        — الملاحظات المدينة والدائنة المرتبطة تلقائياً
        — التوقيعات الرقمية، وUUID، ورموز QR متوافقة بالكامل مع المرحلة الثانية من ZATCA`
        },
        workGuide: {
        en: "Clear Workflow for Every Finance Team A structured invoicing process with:",
        ar: "سير عمل واضح لفريق الشؤون المالية عملية فوترية منظمة تشمل:"
        },
        workGuideDesc: {
        en: `Seamless steps from creation to ZATCA submission
        — Mandatory fields validation before sending
        — Automatic deadline reminders
        — Full activity log of staff handling invoices and corrections`,
        ar: `خطوات متسلسلة من الإنشاء حتى الإرسال إلى ZATCA
        — التحقق من الحقول المطلوبة قبل الإرسال
        — تذكيرات تلقائية بالمواعيد النهائية
        — سجل نشاط كامل للموظفين المسؤولين عن الفواتير والتعديلات`
        },
        transform: { en: "Transform how your company handles invoicing", ar: "حوّل طريقة إدارة الفوترة في شركتك" },
        transformDesc: {
        en: "Kpi delivers tangible improvements across all aspects.",
        ar: "تقدم Kpi تحسينات ملموسة في جميع الجوانب."
        },
        faq: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
        streamline: { en: "Is your business ready for ZATCA Phase 2 compliance?", ar: "هل عملك جاهز للامتثال للمرحلة الثانية من ZATCA؟" },
        join: {
        en: "Join companies across Saudi Arabia who are already saving time and staying compliant with Kpi.com",
        ar: "انضم إلى الشركات التي بدأت التوفير وضمان الامتثال مع Kpi.com"
        },
        tryNow: { en: "Try for Free", ar: "احجز عرضًا توضيحيًا" },
        schedule: { en: "Get started", ar: "ابدأ الآن" },
        orCall: { en: "Or call us at:", ar: "أو اتصل بنا:" },
        cards: {
        time: { en: " Cloud-Based Platform", ar: " منصة قائمة على السحابة" },
        time_desc: { en: "Kpi.com operates entirely in the cloud, so you can manage and issue invoices from anywhere with internet access. It enables seamless communication with ZATCA’s official system without the need for local installations.", ar: "يعمل نظام Kpi.com بالكامل من خلال السحابة، مما يتيح لك إصدار وإدارة الفواتير من أي مكان يتوفر فيه اتصال بالإنترنت. كما يدعم النظام التكامل المباشر مع منصة هيئة الزكاة (ZATCA) دون الحاجة إلى تثبيتات محلية." },
        revenue: { en: " Integrated with ZATCA API", ar: " تكامل مباشر مع واجهة ZATCA البرمجية (API)" },
        revenue_desc: { en: "The platform is directly connected to the ZATCA e-Invoicing Integration Portal through certified API access, ensuring that invoices are submitted securely and in real-time.", ar: "يرتبط النظام مباشرة ببوابة التكامل الإلكتروني الخاصة بـ ZATCA عبر واجهة API معتمدة، مما يضمن إرسال الفواتير بشكل آمن وفي الوقت الفعلي." },
        staff: { en: " Tamper-Proof Infrastructure", ar: " بنية محمية ضد التلاعب" },
        staff_desc: { en: "Kpi.com includes built-in protection against invoice manipulation. The system prevents unauthorized changes and ensures that invoice data remains intact and legally compliant.", ar: "يوفر Kpi.com آلية حماية مدمجة تمنع أي تعديل غير مصرح به على الفواتير. يضمن النظام أن تبقى بيانات الفاتورة سليمة ومتوافقة قانونياً." },
        satisfaction: { en: " Full Invoice Archiving", ar: " أرشفة كاملة لجميع الفواتير" },
        satisfaction_desc: { en: "Every invoice issued through Kpi.com is automatically stored and indexed. This ensures that all records are retained for auditing, reporting, and ZATCA compliance purposes.", ar: "يتم حفظ كل فاتورة يتم إصدارها من خلال Kpi.com بشكل تلقائي ومنظم، مما يضمن إمكانية الرجوع إليها لأغراض التدقيق والتقارير ومتطلبات الامتثال مع ZATCA." },
        add: {en: " Advanced Security Controls", ar: " ضوابط أمان متقدمة"},
        add_desc: {en: "Our system is built to detect and log any manual alterations, suspicious behavior, or tampering attempts. It guarantees that no sensitive information is leaked or lost during invoice creation and transmission.", ar:"يتميز النظام بالقدرة على اكتشاف وتسجيل أي تعديل يدوي أو سلوك مشبوه أو محاولة تلاعب. كما يضمن عدم تسريب أو فقدان أي بيانات أثناء إنشاء الفاتورة أو إرسالها."},
      }
  };
  const faqData = [
    {
        question: {
        en: 'Есть ли ограничение по количеству локаций в WorkPace?',
        ar: 'ما هي فاتورة؟'
        },
        answer: {
        en: 'Нет, количество локаций в WorkPace неограниченно.',
        ar: 'فاتورة" هي منصة الفوترة الإلكترونية الوطنية في المملكة العربية السعودية والتي أطلقتها هيئة الزكاة والضريبة والجمارك (ZATCA). يجب على جميع الشركات إصدار الفواتير إلكترونيًا وإرسالها من خلال هذه المنصة. في المرحلة الثانية، أصبح من الإلزامي إرسال الفواتير مباشرة إلى نظام "فاتورة" باستخدام أنظمة إلكترونية معتمدة مثل Kpi.com'
        }
    },
    {
        question: {
        en: 'Как работает WorkPace через подключение внешних устройств?',
        ar: 'ما الفرق بين الفاتورة الضريبية والفاتورة الضريبية المبسطة؟'
        },
        answer: {
        en: " При интеграции WorkPace с внешними устройствами (например Hikvision) отметка сотрудника происходит автоматически с распознаванием лица через подключенное устройство.",
        ar: 'عادةً ما يتم إصدار الفاتورة الضريبية للمعاملات بين الشركات (B2B) وتحتوي على تفاصيل مثل الرقم الضريبي للمشتري. أما الفاتورة الضريبية المبسطة فتُستخدم في المعاملات مع الأفراد (B2C) وتحتوي على معلومات أقل تفصيلاً.'
        }
    },
    {
        question: {
        en: 'Влияет ли способ подключения на стоимость?',
        ar: 'هل يجب أن تحتوي كل فاتورة على رمز؟ QR'
        },
        answer: {
        en: ' Нет, метод подключения WorkPace не влияет на стоимость сервиса.',
        ar: ' نعم، وفقًا للوائح هيئة الزكاة (ZATCA)، يجب أن تتضمن جميع الفواتير الإلكترونية رمز QR. يقوم نظام Kpi.com بإنشاء رموز QR المطلوبة تلقائيًا لكل من الفواتير القياسية والمبسطة لضمان التوافق الكامل.'
        }
    },
    {
        question: {
        en: 'Какие отчеты имеются в WorkPace?',
        ar: 'هل يجب أن تحتوي كل فاتورة على رمز؟ QR'
        },
        answer: {
        en: ' Workpace формирует все необходимые отчеты по отработанным часам: по посещаемости, опозданиям, переработкам и другие.',
        ar: ' نعم، وفقًا للوائح هيئة الزكاة (ZATCA)، يجب أن تتضمن جميع الفواتير الإلكترونية رمز QR. يقوم نظام Kpi.com بإنشاء رموز QR المطلوبة تلقائيًا لكل من الفواتير القياسية والمبسطة لضمان التوافق الكامل.'
        }
    },
    {
        question: {
        en: 'Как подключить WorkPace?',
        ar: 'هل يجب أن تحتوي كل فاتورة على رمز؟ QR'
        },
        answer: {
        en: 'Оставь заявку на сайте, мы проконсультируем по всем вопросам и поможем с подключением.',
        ar: ' نعم، وفقًا للوائح هيئة الزكاة (ZATCA)، يجب أن تتضمن جميع الفواتير الإلكترونية رمز QR. يقوم نظام Kpi.com بإنشاء رموز QR المطلوبة تلقائيًا لكل من الفواتير القياسية والمبسطة لضمان التوافق الكامل.'
        }
    },
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
             <button className='third_btn third_btn fade-in-up'>leran more</button>
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
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className='sections'>
         <div className="div_box">
            <div className='child'>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <img src="https://static.tildacdn.pro/tild3465-3162-4934-a333-343464386138/Card1.jpg" alt="" />
          </div>
           <div className='child_second'>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className='zkt_flex'>
              <button><i>HIKIVISION</i></button>
            <div className='zkt'>
              <img src="https://logovectorseek.com/wp-content/uploads/2020/04/zkteco-logo-vector.png" alt="" />
            </div>
            </div>
          </div>
         </div>
          <div className="child_third">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div> 
        </div>
        <div className="third_section_one_box white">
          <h2>Lorem ipsum dolor sit amet Lorem, ipsum.</h2>
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

      <h1 className='text'>{t.bestChoice[lang]}</h1>
      <div className='img_box'>
        <div className='box_left'>
          <h3>{t.guestInfo[lang]}</h3>
          <p>{t.guestInfoDesc[lang]}</p>
        </div>
        <div className='box_right sd'>
          <img src={img1} alt="" />
        </div>
      </div>
        <div className="third_team slide-in-left">
          <div className='third_left'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tempore.</p>
          <button>Learn more</button>
          </div>
          <div className='third_right'>
            <img src={banner} alt="" />
          </div>
        </div>

      {/* <img className='img' src={img3} alt="" /> */}

      <div className="third_cards">
        <div className="third_card zoom-in long">
          <p>01</p>
          <h2>Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, dicta.</h2>
          <img src={card2} alt="" />
        </div>
        <div className="third_card zoom-in">
          <p>02</p>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <img src={card2} alt="" />
        </div>
        <div className="third_card zoom-in ">
          <p>03</p>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <img src={card2} alt="" />
        </div>
        <div className="third_card zoom-in long">
          <p>04</p>
          <h2>Lorem ipsum dolor sit amet.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, dicta.</h2>
          <img src={card2} alt="" />
        </div>
      </div>

      <h1 className='text'>{t.transform[lang]}</h1>
      {/* <p className='text_p'>{t.transformDesc[lang]}</p> */}

      {/* <div className="cards">
        <div className="card">
          <h2>{t.cards.time[lang]}</h2>
          <p>{t.cards.time_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.revenue[lang]}</h2>
          <p>{t.cards.revenue_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.staff[lang]}</h2>
          <p>{t.cards.staff_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.satisfaction[lang]}</h2>
          <p>{t.cards.satisfaction_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.add[lang]}</h2>
          <p>{t.cards.add_desc[lang]}</p>
        </div>
      </div> */}
      <div className="phoned">
        <div className='phone_box'>
          <div className='phone_text'>
            <h4>01</h4>
            <h3>Web Lorem, ipsum.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit!</p>
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
          {/* <div className='play'>
            <div className='dss'>
              <VscPlay className='add'/>
            </div>
          </div> */}
        </div>
        <div className='phone_box'>
          <div className='phone_text'>
            <h4>02</h4>
            <h3>Web Lorem, ipsum.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit aut!</p>
          </div>
          <div className="phone_img">
            <img src={phoneTwo} alt="" />
          </div>
        </div>
        <div className='phone_box'>
          <div className='phone_text'>
            <h4>03</h4>
            <h3>Web Lorem, ipsum.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti maiores suscipit exercitationem aperiam, architecto quas dolorem maxime odit aut!</p>
          </div>
          <div className="phone_img">
            <img src={phoneTwo} alt="" />
          </div>
        </div>
      </div>

      <div className='third_faq'>
        <div className="faq">
          <div className="faq_dark">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam.</p>
          </div>
          <h1>Loremdjashdkj</h1>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="faq faq_second">
          <div className="faq_dark">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam.</p>
          </div>
          <h1>Loremdjashdkj</h1>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="faq faq_third">
          <div className="faq_dark">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid unde molestias quaerat maiores similique hic nisi amet quas nam.</p>
          </div>
          <h1>Loremdjashdkj</h1>
          <p>Lorem, ipsum.</p>
        </div>
      </div>

      <div className="faq-container">
        <h2 className='text'>{t.faq[lang]}</h2>
        {faqData.map((item, i) => (
          <div className={`faq-item ${activeIndex === i ? 'active fade-in-up' : 'fade-in-up'}`} key={i} onClick={() => toggleFAQ(i)}>
            <button className="faq-question">
              {lang === 'ar' ? item.question.ar : item.question.en}
              <span>{activeIndex === i ? <IoClose/> : <FaPlus/>}</span>
            </button>
            {activeIndex === i && (
              <div className="faq-answer">
                {lang === 'ar' ? item.answer.ar : item.answer.en}
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