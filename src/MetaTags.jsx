// MetaTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ lang }) => {
  const meta = {
    en: {
      title: "KPI - HR bot",
      description: "KPI Software’s ERP seamlessly integrates with ZATCA e-invoicing system. Compliant, smart, and ideal for SMEs in Saudi Arabia.",
      ogTitle: "KPI - HR bot",
      ogDescription: "Full e-invoicing and tax compliance integration with ZATCA through KPI ERP.",
      url: "https://zatka.kpi.com/en/",
      locale: "en_US"
    },
    ru: {
      title: "تكامل ZATCA ERP - برنامج KPI",
      description: "يتكامل نظام ERP الخاص ببرنامج KPI بسلاسة مع نظام الفوترة الإلكترونية ZATCA. متوافق وذكي ومثالي للشركات الصغيرة والمتوسطة في المملكة العربية السعودية.",
      ogTitle: "تكامل ZATCA ERP - برنامج KPI",
      ogDescription: "تكامل كامل مع الفوترة الإلكترونية والامتثال الضريبي عبر ZATCA باستخدام برنامج KPI ERP.",
      url: "https://zatka.kpi.com/ar/",
      locale: "ar_SA"
    }
  };

  const data = meta[lang] || meta.en;

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:locale" content={data.locale} />
      <meta property="og:title" content={data.ogTitle} />
      <meta property="og:description" content={data.ogDescription} />
      <meta property="og:url" content={data.url} />
    </Helmet>
  );
};

export default MetaTags;