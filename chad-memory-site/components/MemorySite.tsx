'use client';

import Head from 'next/head';
import { FormEvent, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  Clock3,
  Compass,
  FileText,
  Image as ImageIcon,
  Languages,
  MapPin,
  Menu,
  Mic2,
  Search,
  ShieldCheck,
  UploadCloud,
  Users,
  X,
} from 'lucide-react';

const navItems = [
  ['استكشف', '#explore'],
  ['قبائل القرعان', '#gouran'],
  ['القصص', '#stories'],
  ['الأشخاص', '#people'],
  ['الأماكن', '#places'],
  ['الزمن', '#timeline'],
  ['الصور والوثائق', '#archive'],
];

const searchItems = [
  {
    type: 'قسم',
    title: 'قبائل القرعان',
    description: 'القبائل والفروع والأسر كما يتم توثيقها ومراجعتها',
    href: '#gouran',
  },
  {
    type: 'قصة',
    title: 'رحلات الحج والانتقال إلى الحجاز',
    description: 'ملف بحثي سيجمع الروايات والوثائق والمسارات المرتبطة بالرحلات',
    href: '#stories',
  },
  {
    type: 'موضوع',
    title: 'القرآن والعلم بين الأجيال',
    description: 'حفاظ وقراء ومعلمون وإنجازات موثقة عبر الأجيال',
    href: '#stories',
  },
  {
    type: 'مكان',
    title: 'تيبستي',
    description: 'مدخل مكاني للمواد والقصص والوثائق المرتبطة بالمنطقة',
    href: '#places',
  },
  {
    type: 'مكان',
    title: 'إنيدي',
    description: 'استكشاف المواد الأرشيفية بحسب المكان عند إضافتها',
    href: '#places',
  },
  {
    type: 'مكان',
    title: 'فايا',
    description: 'مدخل مكاني للبحث في الذاكرة التشادية',
    href: '#places',
  },
  {
    type: 'قسم',
    title: 'الصور والوثائق',
    description: 'مواد أصلية مع وصفها ومصدرها وسياقها',
    href: '#archive',
  },
];

const storyCards = [
  {
    eyebrow: 'ملف بحثي قيد البناء',
    title: 'من تشاد إلى الحجاز',
    text: 'رحلات الحج والعمرة، طرق الوصول، ثم قصص الاستقرار ونشوء أجيال جديدة كما تثبتها الشهادات والوثائق.',
    meta: 'هجرة • ذاكرة عائلية • وثائق',
    className: 'story-card story-card--sand',
  },
  {
    eyebrow: 'مسار توثيق',
    title: 'القرآن بين الأجيال',
    text: 'حفظ أسماء القراء والحفاظ والمعلمين والمسابقات والإجازات والإنجازات مع مصادرها، بعيدًا عن القوائم غير الموثقة.',
    meta: 'قرآن • علم • سير',
    className: 'story-card story-card--ink',
  },
  {
    eyebrow: 'ذاكرة المكان',
    title: 'شمال تشاد كما تتذكره العائلات',
    text: 'الأماكن ليست نقاطًا على خريطة فقط؛ سنربطها بالصور والقصص والأسماء والرحلات التي مرت بها.',
    meta: 'أماكن • خرائط • تاريخ شفهي',
    className: 'story-card story-card--stone',
  },
];

const placeNames = ['كانم', 'أسلند', 'بحر الغزال', 'موسو', 'مساقط'];

export default function MemorySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [tribeOpen, setTribeOpen] = useState(true);
  const [formMessage, setFormMessage] = useState('');

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchItems;
    return searchItems.filter(item =>
      `${item.title} ${item.description} ${item.type}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  function closeSearch() {
    setSearchOpen(false);
    setQuery('');
  }

  function handleContribution(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage(
      'هذه نسخة تأسيسية للواجهة. سيتم تفعيل الإرسال الآمن بعد ربط قاعدة البيانات في المرحلة التالية.'
    );
  }

  return (
    <>
      <Head>
        <title>ذاكرة تشاد — التاريخ والإنسان والذاكرة التشادية</title>
        <meta
          name="description"
          content="مشروع أرشيف رقمي مستقل لحفظ التاريخ والإنسان والذاكرة التشادية، يبدأ بتوثيق القرعان وشمال تشاد."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="site-shell" dir="rtl">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="ذاكرة تشاد - الرئيسية">
            <span className="brand-mark" aria-hidden="true">
              ذ
            </span>
            <span className="brand-copy">
              <strong>ذاكرة تشاد</strong>
              <small>Chad Memory</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="top-actions">
            <button
              className="icon-button"
              onClick={() => setSearchOpen(true)}
              aria-label="ابحث في الذاكرة"
            >
              <Search size={19} />
            </button>
            <a className="contribute-button desktop-only" href="#contribute">
              ساهم بذاكرتك
            </a>
            <button
              className="icon-button mobile-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="فتح القائمة"
            >
              <Menu size={21} />
            </button>
          </div>
        </header>

        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="hero-content">
            <span className="status-pill">
              <ShieldCheck size={15} /> مشروع أرشيفي رقمي مستقل • نسخة تأسيسية
            </span>
            <h1>
              ذاكرة لا ينبغي
              <br />
              أن تضيع
            </h1>
            <p>
              نحفظ تاريخ تشاد، ناسها، أرضها وقصص أجدادها للأجيال الجديدة — ونبدأ
              بتوثيق عميق للقرعان وشمال تشاد، بمصادر واضحة وروايات محفوظة كما
              هي.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#explore">
                استكشف الذاكرة <ArrowLeft size={18} />
              </a>
              <button
                className="secondary-button"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={18} /> اعثر على شخص أو مكان
              </button>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="تكوين بصري مستوحى من تضاريس شمال تشاد"
          >
            <div className="sun-disc" />
            <div className="mountain mountain--back" />
            <div className="mountain mountain--mid" />
            <div className="mountain mountain--front" />
            <div className="hero-caption">
              <span>شمال تشاد</span>
              <strong>الأرض تحفظ أثر من مرّ بها</strong>
            </div>
          </div>
          <a className="scroll-cue" href="#explore">
            ابدأ الاستكشاف <ChevronDown size={17} />
          </a>
        </section>

        <section className="section section--light" id="explore">
          <div className="section-heading">
            <div>
              <span className="kicker">استكشف</span>
              <h2>من أين تريد أن تبدأ؟</h2>
            </div>
            <p>
              صممنا الذاكرة لتُكتشف بالقصة والمكان والإنسان، لا عبر ملفات معقدة.
            </p>
          </div>
          <div className="explore-grid">
            <a className="explore-card explore-card--large" href="#gouran">
              <span className="card-icon">
                <Users size={22} />
              </span>
              <span className="card-index">01</span>
              <div>
                <strong>قبائل القرعان</strong>
                <p>
                  القبائل وما يندرج تحتها من فروع وأسر، مرتبطة بالأشخاص والأماكن
                  والوثائق.
                </p>
              </div>
              <ArrowLeft size={22} />
            </a>
            <a className="explore-card" href="#stories">
              <span className="card-icon">
                <BookOpen size={22} />
              </span>
              <span className="card-index">02</span>
              <div>
                <strong>القصص</strong>
                <p>التاريخ بصياغة سهلة مرتبطة بمصادرها.</p>
              </div>
              <ArrowLeft size={22} />
            </a>
            <a className="explore-card" href="#places">
              <span className="card-icon">
                <MapPin size={22} />
              </span>
              <span className="card-index">03</span>
              <div>
                <strong>الأماكن</strong>
                <p>من الأرض إلى مسارات الهجرة والمهجر.</p>
              </div>
              <ArrowLeft size={22} />
            </a>
            <a className="explore-card" href="#archive">
              <span className="card-icon">
                <ImageIcon size={22} />
              </span>
              <span className="card-index">04</span>
              <div>
                <strong>الصور والوثائق</strong>
                <p>الأصل أولًا، ثم الشرح والسياق.</p>
              </div>
              <ArrowLeft size={22} />
            </a>
          </div>
        </section>

        <section className="section section--dark gouran-section" id="gouran">
          <div className="section-heading section-heading--dark">
            <div>
              <span className="kicker kicker--gold">قسم رئيسي</span>
              <h2>قبائل القرعان</h2>
            </div>
            <p>
              مدخل واضح لتاريخ القرعان وبنيتهم الاجتماعية كما تثبتها المصادر
              والروايات المراجعة، دون فرض تسلسل غير موثق.
            </p>
          </div>

          <div className="tribe-browser">
            <div className="tribe-browser__intro">
              <span className="mini-label">طريقة العرض</span>
              <h3>من الجذر إلى التفاصيل، دون أن نضيع السياق</h3>
              <p>
                كل قبيلة ستُربط بفروعها، ثم بالأشخاص والأماكن والقصص والصور
                والوثائق. وإذا اختلفت الروايات، يظهر الخلاف بدل إخفائه.
              </p>
              <button
                className="outline-light-button"
                onClick={() => setTribeOpen(value => !value)}
                aria-expanded={tribeOpen}
              >
                {tribeOpen ? 'إخفاء البنية' : 'استكشف البنية'}{' '}
                <ChevronDown
                  className={tribeOpen ? 'rotate-icon' : ''}
                  size={17}
                />
              </button>
            </div>

            <div className="tribe-tree" aria-label="بنية قسم قبائل القرعان">
              <div className="tree-root">
                <small>المستوى الرئيسي</small>
                <strong>القرعان</strong>
                <span>بوابة التاريخ والقبائل والفروع</span>
              </div>
              {tribeOpen && (
                <div className="tree-levels">
                  <div className="tree-line" />
                  <div className="tree-card">
                    <span>01</span>
                    <strong>القبائل</strong>
                    <small>تُضاف الأسماء بعد التوثيق والمراجعة</small>
                  </div>
                  <div className="tree-card">
                    <span>02</span>
                    <strong>الفروع</strong>
                    <small>كل فرع مرتبط بسياقه ومصادره</small>
                  </div>
                  <div className="tree-card">
                    <span>03</span>
                    <strong>الأسر والبيوت</strong>
                    <small>عند توفر مادة موثوقة تسمح بعرضها</small>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="accuracy-note">
            <ShieldCheck size={21} />
            <div>
              <strong>قاعدة هذا القسم</strong>
              <span>
                لن نضع اسم قبيلة أو فرع أو نسب كحقيقة لمجرد تداوله؛ الموثق يُعرض
                كموثق، والشفهي كرواية، والمختلف عليه يظهر بوضوح.
              </span>
            </div>
          </div>
        </section>

        <section className="section section--cream" id="stories">
          <div className="section-heading">
            <div>
              <span className="kicker">قصص الذاكرة</span>
              <h2>
                التاريخ يُقرأ كقصة،
                <br />
                ويُراجع كمصدر
              </h2>
            </div>
            <p>
              هذه موضوعات تأسيسية سنملؤها بالمحتوى الحقيقي تدريجيًا. لا تعرض
              النسخة الحالية ادعاءات تاريخية غير موثقة.
            </p>
          </div>
          <div className="stories-grid">
            {storyCards.map(card => (
              <article className={card.className} key={card.title}>
                <span className="story-eyebrow">{card.eyebrow}</span>
                <div className="story-spacer" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="story-meta">
                  <span>{card.meta}</span>
                  <ArrowLeft size={20} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section people-section" id="people">
          <div className="people-copy">
            <span className="kicker">الأشخاص</span>
            <h2>
              ليسوا أسماء في قائمة.
              <br />
              لكل شخص مسار وذاكرة.
            </h2>
            <p>
              صفحة الشخص ستجمع سيرته الموثقة، الأماكن المرتبطة به، صوره ووثائقه،
              وشهادات من عرفوه — مع فصل واضح بين المعلومة المثبتة والرواية
              الشفوية.
            </p>
            <div className="feature-chips">
              <span>السيرة</span>
              <span>الخط الزمني</span>
              <span>الصور</span>
              <span>المصادر</span>
            </div>
          </div>
          <div className="person-prototype">
            <div className="portrait-placeholder">
              <span>صورة أرشيفية</span>
            </div>
            <div className="person-demo-copy">
              <small>نموذج صفحة شخص</small>
              <h3>الاسم كما يرد في المصادر</h3>
              <p>نبذة قصيرة موثقة تظهر هنا بعد المراجعة.</p>
              <div className="person-stat-row">
                <span>
                  <b>الميلاد</b> عند التوثيق
                </span>
                <span>
                  <b>المكان</b> عند التوثيق
                </span>
              </div>
              <button className="text-button">
                عرض نموذج الصفحة <ArrowLeft size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="section section--map" id="places">
          <div className="map-copy">
            <span className="kicker kicker--gold">الأماكن</span>
            <h2>الأرض جزء من الرواية</h2>
            <p>
              تبدأ الخريطة من كانم، ثم أسلند، بحر الغزال، موسو ومساقط، وسنواصل
              توسيعها بالترتيب الذي يُعتمد مع إضافة المناطق والمواد الموثقة.
            </p>
            <div className="place-list">
              {placeNames.map((place, index) => (
                <span key={place}>
                  <b>0{index + 1}</b>
                  {place}
                </span>
              ))}
            </div>
          </div>
          <div
            className="abstract-map"
            aria-label="تمثيل بصري لخريطة الاستكشاف"
          >
            <div className="map-shape" />
            <span className="map-dot map-dot--1">
              <i /> كانم
            </span>
            <span className="map-dot map-dot--2">
              <i /> أسلند
            </span>
            <span className="map-dot map-dot--3">
              <i /> بحر الغزال
            </span>
            <span className="map-dot map-dot--4">
              <i /> موسو
            </span>
            <span className="map-dot map-dot--5">
              <i /> مساقط
            </span>
            <div className="map-label">
              <Compass size={19} /> بداية المسار المكاني • تُضاف المناطق تباعًا
            </div>
          </div>
        </section>

        <section className="section section--light" id="timeline">
          <div className="section-heading">
            <div>
              <span className="kicker">الزمن</span>
              <h2>خط تاريخ يبدأ بالدليل، لا بالتخمين</h2>
            </div>
            <p>
              لن نملأ قرونًا فارغة بأحداث افتراضية. يبدأ الخط من أقدم مادة
              نستطيع توثيقها، ثم ينمو مع البحث.
            </p>
          </div>
          <div className="timeline-track">
            <div className="timeline-line" />
            <div className="timeline-stop">
              <span>
                <Clock3 size={17} />
              </span>
              <strong>أقدم مادة موثقة</strong>
              <small>نقطة البداية</small>
            </div>
            <div className="timeline-stop">
              <span>+</span>
              <strong>التحولات التاريخية</strong>
              <small>تُضاف بالمصادر</small>
            </div>
            <div className="timeline-stop">
              <span>+</span>
              <strong>الهجرة والمهجر</strong>
              <small>رحلات وقصص عائلية</small>
            </div>
            <div className="timeline-stop timeline-stop--current">
              <span>●</span>
              <strong>الأجيال الجديدة</strong>
              <small>ذاكرة مستمرة</small>
            </div>
          </div>
        </section>

        <section className="section section--archive" id="archive">
          <div className="section-heading section-heading--dark">
            <div>
              <span className="kicker kicker--gold">الأرشيف المرئي</span>
              <h2>
                الصورة أولًا.
                <br />
                ثم قصتها ومصدرها.
              </h2>
            </div>
            <p>
              المواد الأصلية ستظهر بصورة نظيفة ومريحة، مع التفاصيل لمن يريد
              التحقق والبحث.
            </p>
          </div>
          <div className="archive-grid">
            <article className="archive-tile archive-tile--photo">
              <ImageIcon size={27} />
              <span>صور عائلية وتاريخية</span>
              <small>مع هوية الأشخاص والمكان عند التحقق</small>
            </article>
            <article className="archive-tile archive-tile--doc">
              <FileText size={27} />
              <span>وثائق ومراسلات</span>
              <small>الأصل الرقمي + الوصف + المصدر</small>
            </article>
            <article className="archive-tile archive-tile--voice">
              <Mic2 size={27} />
              <span>التاريخ الشفهي</span>
              <small>أصوات كبار السن وشهاداتهم</small>
            </article>
            <article className="archive-tile archive-tile--lang">
              <Languages size={27} />
              <span>لغات متعددة</span>
              <small>الأصل محفوظ والترجمة طبقة إضافية</small>
            </article>
          </div>
        </section>

        <section className="section contribute-section" id="contribute">
          <div className="contribute-copy">
            <span className="kicker">ساهم بذاكرتك</span>
            <h2>
              عندك صورة قديمة؟
              <br />
              قد تكون نسخة لا يملكها أحد غيرك.
            </h2>
            <p>
              الصور، الرسائل، الوثائق، التسجيلات وقصص كبار السن قد تختفي خلال
              جيل واحد. نريد حفظها دون أن ننشرها قبل المراجعة.
            </p>
            <div className="trust-row">
              <ShieldCheck size={20} />
              <span>المساهمة لا تعني النشر التلقائي</span>
            </div>
          </div>
          <form className="contribution-form" onSubmit={handleContribution}>
            <label>
              اسمك
              <input name="name" placeholder="الاسم" required />
            </label>
            <label>
              وسيلة التواصل
              <input
                name="contact"
                placeholder="رقم أو بريد إلكتروني"
                required
              />
            </label>
            <label>
              ما المادة التي لديك؟
              <textarea
                name="description"
                placeholder="مثال: صورة عائلية قديمة، وثيقة، تسجيل صوتي..."
                rows={4}
                required
              />
            </label>
            <button className="primary-button form-button" type="submit">
              <UploadCloud size={18} /> بدء المساهمة
            </button>
            {formMessage && (
              <p className="form-message" role="status">
                {formMessage}
              </p>
            )}
          </form>
        </section>

        <footer className="footer">
          <div className="footer-brand">
            <span className="brand-mark">ذ</span>
            <div>
              <strong>ذاكرة تشاد</strong>
              <small>مشروع مستقل لحفظ التاريخ والإنسان والذاكرة التشادية</small>
            </div>
          </div>
          <div className="footer-note">
            <span>نحفظ التاريخ لنُبقيه حيًا</span>
            <small>
              النسخة التأسيسية • المحتوى التاريخي سيُنشر بعد التوثيق والمراجعة
            </small>
          </div>
        </footer>

        {menuOpen && (
          <div
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="القائمة"
          >
            <div className="drawer-head">
              <strong>ذاكرة تشاد</strong>
              <button
                className="icon-button"
                onClick={() => setMenuOpen(false)}
                aria-label="إغلاق القائمة"
              >
                <X size={21} />
              </button>
            </div>
            <nav>
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                  <ArrowLeft size={18} />
                </a>
              ))}
              <a href="#contribute" onClick={() => setMenuOpen(false)}>
                ساهم بذاكرتك <ArrowLeft size={18} />
              </a>
            </nav>
          </div>
        )}

        {searchOpen && (
          <div
            className="search-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="البحث في الذاكرة"
          >
            <div className="search-panel">
              <div className="search-head">
                <div>
                  <small>بحث موحد</small>
                  <strong>ابحث في الذاكرة</strong>
                </div>
                <button
                  className="icon-button"
                  onClick={closeSearch}
                  aria-label="إغلاق البحث"
                >
                  <X size={21} />
                </button>
              </div>
              <div className="search-input-wrap">
                <Search size={20} />
                <input
                  autoFocus
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="اكتب اسمًا، مكانًا، موضوعًا..."
                />
              </div>
              <div className="search-results">
                <span className="results-label">
                  {query ? `نتائج البحث عن «${query}»` : 'مداخل مقترحة'}
                </span>
                {results.length > 0 ? (
                  results.map(item => (
                    <a
                      href={item.href}
                      key={`${item.type}-${item.title}`}
                      onClick={closeSearch}
                    >
                      <span className="result-type">{item.type}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <small>{item.description}</small>
                      </div>
                      <ArrowLeft size={18} />
                    </a>
                  ))
                ) : (
                  <div className="empty-results">
                    <Search size={24} />
                    <strong>لا توجد نتيجة في النسخة الحالية</strong>
                    <span>
                      هذا لا يعني أن المادة غير موجودة تاريخيًا؛ فقط لم تُضف إلى
                      الأرشيف بعد.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
