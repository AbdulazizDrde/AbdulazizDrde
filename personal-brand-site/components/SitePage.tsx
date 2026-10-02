import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Languages, Menu, X } from 'lucide-react';

type PageKey = 'home' | 'work' | 'writing' | 'field-notes' | 'lab' | 'frameworks' | 'about';
type Locale = 'en' | 'ar';

const routes: Record<PageKey, string> = {
  home: '/', work: '/work/', writing: '/writing/', 'field-notes': '/field-notes/', lab: '/lab/', frameworks: '/frameworks/', about: '/about/'
};

const nav: Record<Locale, Record<PageKey, string>> = {
  en: { home: 'Home', work: 'Work', writing: 'Writing', 'field-notes': 'Field Notes', lab: 'Lab', frameworks: 'Frameworks', about: 'About' },
  ar: { home: 'الرئيسية', work: 'الأعمال', writing: 'الكتابة', 'field-notes': 'ملاحظات ميدانية', lab: 'المختبر', frameworks: 'الأطر', about: 'عني' }
};

const work = {
  en: [
    ['Village Market — Digital Commerce & Operations Transformation', 'Building the operating model, cross-functional workflows, digital systems, fulfillment routines, customer operations, and performance discipline behind a growing digital commerce operation.', ['BUILT','OPERATED','MEASURED']],
    ['VPick — Store Operations System', 'Turning fragmented fulfillment and delivery workflows into a structured operating system with assignment, visibility, monitoring, exception handling, and operational control.', ['BUILT','TESTED','OPERATED']],
    ['Digital Loyalty Infrastructure', 'Designing a practical loyalty layer around customer identity, digital passes, points, operational adoption, and future system integrations.', ['BUILT','TESTED']]
  ],
  ar: [
    ['Village Market — تحول التجارة الرقمية والعمليات', 'بناء نموذج التشغيل وسير العمل متعدد الوظائف والأنظمة الرقمية والتجهيز وخدمة العميل وانضباط الأداء خلف عملية تجارة رقمية نامية.', ['BUILT','OPERATED','MEASURED']],
    ['VPick — نظام عمليات المتجر', 'تحويل التجهيز والتوصيل من إجراءات متفرقة إلى نظام تشغيل منظم يشمل الإسناد والرؤية والمتابعة ومعالجة الاستثناءات والتحكم التشغيلي.', ['BUILT','TESTED','OPERATED']],
    ['البنية الرقمية للولاء', 'تصميم طبقة ولاء عملية تربط هوية العميل والبطاقة الرقمية والنقاط والتبني التشغيلي والتكاملات المستقبلية.', ['BUILT','TESTED']]
  ]
};

const territories = {
  en: [
    ['01','Digital Operations','Workflows, fulfillment, SLA, process design, operating models, customer operations, and operational control.'],
    ['02','AI & Automation at Work','Agents, automation, decision support, human-in-the-loop systems, and practical AI inside real operations.'],
    ['03','Digital Systems & Products','Internal tools, product thinking, system design, interfaces, integration, and build-vs-buy decisions.'],
    ['04','Commerce as a Living Lab','Retail, e-commerce, customer experience, delivery, loyalty, and data as a real-world laboratory for systems thinking.']
  ],
  ar: [
    ['01','العمليات الرقمية','سير العمل والتجهيز وSLA وتصميم العمليات ونماذج التشغيل وعمليات العميل والتحكم التشغيلي.'],
    ['02','الذكاء الاصطناعي والأتمتة في العمل','الوكلاء والأتمتة ودعم القرار والإنسان داخل الحلقة وتطبيقات الذكاء الاصطناعي في العمليات الفعلية.'],
    ['03','الأنظمة والمنتجات الرقمية','الأدوات الداخلية وتفكير المنتج وتصميم الأنظمة والواجهات والتكامل وقرارات البناء مقابل الشراء.'],
    ['04','التجارة كمختبر حي','التجزئة والتجارة الإلكترونية وتجربة العميل والتوصيل والولاء والبيانات كمختبر واقعي للتفكير بالأنظمة.']
  ]
};

const notes = {
  en: [
    ['ESSAY','Technology Is Not Digital Transformation','Editorial thesis'],
    ['FIELD NOTE','From WhatsApp Orders to Structured Operations','In development'],
    ['DEEP DIVE','What a Real Delivery SLA Engine Actually Needs','In development'],
    ['ESSAY','Stop Buying Tools. Start Designing Systems.','In development']
  ],
  ar: [
    ['مقال','التقنية ليست تحولًا رقميًا','أطروحة تحريرية'],
    ['ملاحظة ميدانية','من طلبات واتساب إلى عمليات منظمة','قيد التطوير'],
    ['تحليل معمق','ما الذي يحتاجه محرك SLA فعلي للتوصيل؟','قيد التطوير'],
    ['مقال','توقف عن شراء الأدوات. ابدأ بتصميم الأنظمة.','قيد التطوير']
  ]
};

function Seo({ page, locale }: { page: PageKey; locale: Locale }) {
  const title = page === 'home' ? 'Abdulaziz Drde — Digital Transformation & Technology Operations' : `${nav[locale][page]} — Abdulaziz Drde`;
  const description = locale === 'en' ? 'Digital Transformation & Technology Operations. Building digital operating systems at the intersection of technology, operations, data, AI, and business.' : 'عبدالعزيز دردي — التحول الرقمي والعمليات التقنية. بناء أنظمة تشغيل رقمية عند تقاطع التقنية والعمليات والبيانات والذكاء الاصطناعي والأعمال.';
  const schema = { '@context':'https://schema.org', '@type':'ProfilePage', mainEntity:{ '@type':'Person', name:'Abdulaziz Drde', alternateName:'عبدالعزيز دردي', jobTitle:'Digital Transformation & Technology Operations', description, knowsAbout:['Digital Transformation','Technology Operations','Digital Operations','Artificial Intelligence','Automation','Digital Commerce','Operational Systems'] } };
  return <Head><title>{title}</title><meta name='description' content={description}/><meta property='og:title' content={title}/><meta property='og:description' content={description}/><meta property='og:type' content='website'/><script type='application/ld+json' dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></Head>;
}

function WorkCards({ locale }: { locale: Locale }) {
  return <div className='work-grid'>{work[locale].map((item, i) => <article className='work-card' key={item[0] as string}><div><div className='card-topline'><span className='card-index'>0{i+1}</span><div className='evidence-row'>{(item[2] as string[]).map(label => <span className='evidence' key={label}>{label}</span>)}</div></div><h3>{item[0] as string}</h3><p>{item[1] as string}</p></div></article>)}</div>;
}

function NoteRows({ locale }: { locale: Locale }) {
  return <div className='note-list'>{notes[locale].map(item => <div className='note-row' key={item[1]}><div className='type'>{item[0]}</div><h3>{item[1]}</h3><div className='status'>{item[2]}</div></div>)}</div>;
}

function TerritoryGrid({ locale }: { locale: Locale }) {
  return <div className='territory-grid'>{territories[locale].map(item => <article className='territory' key={item[0]}><div className='territory-num'>{item[0]}</div><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>;
}

function Shell({ page, locale, setLocale, children }: { page: PageKey; locale: Locale; setLocale: (l: Locale)=>void; children: React.ReactNode }) {
  const [menuOpen,setMenuOpen] = useState(false);
  const order: PageKey[] = ['work','writing','field-notes','lab','frameworks','about'];
  return <div className='site-shell'><header className='site-header'><div className='header-inner'><a className='brand-lockup' href='/'><span className='brand-name'>Abdulaziz Drde</span><span className='brand-mark'/></a><nav className='desktop-nav'>{order.map(item=><a className={`nav-link ${page===item?'active':''}`} href={routes[item]} key={item}>{nav[locale][item]}</a>)}</nav><div className='header-actions'><button className='lang-button' onClick={()=>setLocale(locale==='en'?'ar':'en')}><Languages size={15}/>{locale==='en'?'AR':'EN'}</button><button className='icon-button' onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={18}/>:<Menu size={18}/>}</button></div>{menuOpen&&<nav className='mobile-menu'>{order.map(item=><a className='nav-link' href={routes[item]} key={item}>{nav[locale][item]}</a>)}</nav>}</div></header><main>{children}</main><footer className='footer'><div className='container footer-grid'><div className='footer-title'>{locale==='en'?'Building a compounding body of work around digital operations, systems, AI, and business.':'أبني مكتبة معرفية تتراكم حول العمليات الرقمية والأنظمة والذكاء الاصطناعي والأعمال.'}</div><div className='footer-meta'>Abdulaziz Drde · عبدالعزيز دردي<br/>Digital Transformation & Technology Operations</div></div></footer></div>;
}

function Home({locale}:{locale:Locale}) {
  const ar=locale==='ar';
  const signals = ar ? [['النموذج','مشغّل × باني × باحث × كاتب'],['نقطة الاختراق','العمليات الرقمية المدعومة بالذكاء الاصطناعي'],['المختبر التطبيقي','التجارة الرقمية وعمليات التجزئة'],['المنهج','ابنِ ← قِس ← وثّق ← راكم']] : [['MODEL','Operator × Builder × Researcher × Writer'],['BEACHHEAD','AI-Enabled Digital Operations'],['FIELD','Digital Commerce & Retail Operations'],['METHOD','Build → Measure → Document → Compound']];
  return <><div className='container'><section className='hero'><div><div className='eyebrow'>{ar?'التحول الرقمي والعمليات التقنية':'Digital Transformation & Technology Operations'}</div><h1>{ar?'أنظمة تجعل':'Systems that'}<br/><span className='accent'>{ar?'العمل يعمل.':'make work work.'}</span></h1></div><div className='hero-copy'><p>{ar?'أبني أنظمة تشغيل رقمية تربط التقنية والعمليات والبيانات والذكاء الاصطناعي بنتائج أعمال قابلة للقياس.':'I build digital operating systems that connect technology, operations, data, and AI to measurable business outcomes.'}</p><div className='cta-row'><a className='button primary' href='/work/'>{ar?'استكشف أعمالي':'Explore my work'}<ArrowUpRight size={16}/></a><a className='button secondary' href='/writing/'>{ar?'اقرأ أفكاري':'Read my thinking'}</a></div></div></section></div><div className='signal-strip'><div className='container signal-grid'>{signals.map(([k,v])=><div className='signal' key={k}><span className='signal-kicker'>{k}</span><strong>{v}</strong></div>)}</div></div><section className='section'><div className='container'><div className='section-head'><div className='section-label'>{ar?'أعمال مختارة':'Selected work'}</div><div><h2 className='section-title'>{ar?'الدليل قبل الادعاء.':'Evidence over claims.'}</h2><p className='section-intro'>{ar?'تُعرض الأعمال كأنظمة تشغيل ودراسات حالة، لا كقائمة مسؤوليات. وتبقى المؤشرات التجارية الحساسة خاصة حتى يتم اعتماد نشرها صراحة.':'The work is presented as operating systems and case studies — not as a list of responsibilities. Sensitive commercial metrics stay private until explicitly approved for publication.'}</p></div></div><WorkCards locale={locale}/></div></section><section className='section'><div className='container'><div className='section-head'><div className='section-label'>{ar?'أفكار وكتابة':'Latest thinking'}</div><div><h2 className='section-title'>{ar?'الكتابة من الميدان.':'Writing from the field.'}</h2><p className='section-intro'>{ar?'تخرج الملاحظات والمقالات من مشكلات تشغيلية وقرارات واختبارات ودروس حقيقية، لا من جدول محتوى مصطنع.':'Notes and essays are generated from real operating problems, decisions, tests, and lessons — not from a content calendar.'}</p></div></div><NoteRows locale={locale}/></div></section><section className='section'><div className='container'><div className='section-head'><div className='section-label'>{ar?'المجال الفكري':'Intellectual territory'}</div><div><h2 className='section-title'>{ar?'سؤال واحد، أربع عدسات.':'One question, four lenses.'}</h2><p className='section-intro'>{ar?'كيف نحوّل التقنية والذكاء الاصطناعي إلى أنظمة تشغيل تجعل الأعمال تعمل بصورة أفضل؟':'How do we turn technology and AI into operating systems that make businesses actually work better?'}</p></div></div><TerritoryGrid locale={locale}/></div></section></>;
}

function PageHero({page,locale}:{page:Exclude<PageKey,'home'>;locale:Locale}) {
  const ar=locale==='ar';
  const data: Record<Exclude<PageKey,'home'>,[string,string,string]> = ar ? {
    work:['الأعمال','أنظمة تشغيل، لا أوصاف وظيفية.','أعمال مختارة في الأنظمة والتحول تُعرض من خلال المشكلة والقرار والتنفيذ والدليل.'],
    writing:['الكتابة','أفكار تعيش أطول من الخلاصة.','مقالات دائمة القيمة وتحليلات معمقة وبحث موثق حول التقنية والعمليات والذكاء الاصطناعي والأنظمة والأعمال.'],
    'field-notes':['ملاحظات ميدانية','أوثق العمل وهو ما يزال حيًا.','ملاحظات قصيرة ناتجة عن مشكلات تشغيلية وقرارات واختبارات وواجهات وتصميم عمليات فعلية.'],
    lab:['المختبر','حيث تُختبر الأنظمة.','نماذج أولية وأدوات داخلية وتدفقات AI وتجارب تشغيلية واستكشافات تقنية.'],
    frameworks:['الأطر','الأنماط لا تستحق اسمًا قبل الدليل.','تنشأ الأطر من تكرار الحالات: حالات ← أنماط ← إطار ← دليل تطبيقي ← منتج.'],
    about:['عني','أبني عند تقاطع التقنية والعمليات.','يعمل عبدالعزيز دردي عبر التحول الرقمي والعمليات التقنية وأنظمة التجارة الرقمية والذكاء الاصطناعي والأتمتة والبيانات والمنتجات الداخلية.']
  } : {
    work:['Work','Operating systems, not job descriptions.','Selected systems and transformation work shown through problems, decisions, implementation, and evidence.'],
    writing:['Writing','Ideas that survive the feed.','Evergreen essays, deep dives, and research-backed analysis on technology, operations, AI, systems, and business.'],
    'field-notes':['Field Notes','Documenting the work while it is still alive.','Short observations from real operating problems, decisions, tests, interfaces, and process design.'],
    lab:['Lab','Where systems get tested.','Prototypes, internal tools, AI workflows, operational experiments, and technical explorations.'],
    frameworks:['Frameworks','Patterns earn names only after evidence.','Frameworks emerge from repeated cases: cases → repeated patterns → framework → playbook → product.'],
    about:['About','Building at the intersection of technology and operations.','Abdulaziz Drde works across digital transformation, technology operations, digital commerce systems, AI, automation, data, and internal products.']
  };
  const [label,title,body]=data[page];
  return <section className='page-hero'><div className='container'><div className='eyebrow'>{label}</div><h1>{title}</h1><p>{body}</p></div></section>;
}

function InnerPage({page,locale}:{page:Exclude<PageKey,'home'>;locale:Locale}) {
  const ar=locale==='ar';
  if(page==='work') return <><PageHero page={page} locale={locale}/><section className='section'><div className='container'><WorkCards locale={locale}/></div></section></>;
  if(page==='writing') return <><PageHero page={page} locale={locale}/><section className='section'><div className='container'><NoteRows locale={locale}/></div></section><section className='section'><div className='container two-col'><div className='sticky-label section-label'>{ar?'السياسة التحريرية':'Editorial standard'}</div><div className='prose'><h2>{ar?'السلطة تُستنتج من العمل، لا تُعلن.':'Authority is inferred from the work, not announced.'}</h2><p>{ar?'كل مادة يجب أن تميز بوضوح بين التجربة والقياس والملاحظة والبحث والفرضية.':'Every piece should make the difference between experience, measurement, observation, research, and hypothesis obvious.'}</p><div className='manifesto'>{ar?'AI يساعد العملية. لا يختلق التجربة.':'AI assists the process. It does not invent the experience.'}</div></div></div></section></>;
  if(page==='field-notes') return <><PageHero page={page} locale={locale}/><section className='section'><div className='container two-col'><div className='sticky-label section-label'>{ar?'صيغة الملاحظة':'Field-note format'}</div><div className='prose'><h2>{ar?'المشكلة ← القرار ← السبب ← النتيجة ← التعلم':'Problem → Decision → Why → Result → Learning'}</h2><p>{ar?'الملاحظة الميدانية وحدة معرفة مرتبطة بواقعة عمل محددة ويمكن أن تنمو لاحقًا إلى تحليل أو دراسة حالة أو إطار.':'A field note is a knowledge unit tied to a specific piece of work, with the potential to grow into a deep dive, case study, or framework.'}</p><NoteRows locale={locale}/></div></div></section></>;
  if(page==='lab') return <><PageHero page={page} locale={locale}/><section className='section'><div className='container'><TerritoryGrid locale={locale}/></div></section></>;
  if(page==='frameworks') return <><PageHero page={page} locale={locale}/><section className='section'><div className='container two-col'><div className='sticky-label section-label'>{ar?'منهج الملكية الفكرية':'IP method'}</div><div className='prose'><h2>{ar?'لا نخترع إطارًا ثم نبحث له عن أدلة.':'We do not invent a framework and then search for evidence.'}</h2><p>{ar?'تبدأ الملكية الفكرية من العمل. عندما يظهر النمط نفسه عبر حالات متعددة يصبح من المشروع تسميته وتحويله إلى إطار قابل للاستخدام.':'Intellectual property starts with the work. When the same pattern appears across multiple cases, it earns a name and can become a reusable framework.'}</p></div></div></section></>;
  return <><PageHero page='about' locale={locale}/><section className='section'><div className='container two-col'><div className='sticky-label section-label'>{ar?'النموذج':'The model'}</div><div className='prose'><h2>Operator × Builder × Researcher × Writer</h2><p>{ar?'الهدف ليس بناء صورة شخص يتحدث عن التقنية، بل توثيق شخص يشغّل ويبني ويبحث ثم يحول التجربة إلى معرفة قابلة للنقل.':'The goal is not to look like someone who talks about technology. It is to document the work of an operator who builds, researches, and turns experience into transferable knowledge.'}</p><div className='manifesto'>{ar?'أحوّل التقنية من أدوات متفرقة إلى أنظمة رقمية متكاملة ترفع كفاءة التشغيل وتحسن تجربة العميل وتدعم نمو الأعمال.':'I turn technology into integrated digital systems that improve operations, strengthen customer experience, and enable scalable business growth.'}</div></div></div></section></>;
}

export function SitePage({page}:{page:PageKey}) {
  const [locale,setLocale]=useState<Locale>('en');
  useEffect(()=>{const saved=window.localStorage.getItem('abd-locale'); if(saved==='ar'||saved==='en') setLocale(saved);},[]);
  useEffect(()=>{document.documentElement.lang=locale; document.documentElement.dir=locale==='ar'?'rtl':'ltr'; window.localStorage.setItem('abd-locale',locale);},[locale]);
  return <><Seo page={page} locale={locale}/><Shell page={page} locale={locale} setLocale={setLocale}>{page==='home'?<Home locale={locale}/>:<InnerPage page={page} locale={locale}/>}</Shell></>;
}
