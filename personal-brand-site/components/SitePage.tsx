import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  Cpu,
  Languages,
  Menu,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';

type PageKey =
  | 'home'
  | 'work'
  | 'writing'
  | 'field-notes'
  | 'lab'
  | 'frameworks'
  | 'about';
type Locale = 'ar' | 'en';

const projects = {
  ar: [
    {
      no: '01',
      title: 'Village Market',
      subtitle: 'تحول التجارة الرقمية والعمليات',
      body: 'بناء نموذج تشغيل رقمي يربط الفريق والطلبات والتجهيز والتوصيل وتجربة العميل والبيانات ضمن منظومة واحدة قابلة للقياس والتطوير.',
      tags: ['Digital Transformation', 'Operations', 'Commerce'],
      visual: 'commerce',
    },
    {
      no: '02',
      title: 'VPick',
      subtitle: 'نظام عمليات المتجر',
      body: 'تحويل إجراءات التجهيز والتوصيل المتفرقة إلى نظام تشغيلي يركز على الإسناد والمتابعة والاستثناءات والرؤية التشغيلية.',
      tags: ['Internal Product', 'Fulfillment', 'Automation'],
      visual: 'vpick',
    },
    {
      no: '03',
      title: 'Digital Loyalty',
      subtitle: 'بنية ولاء رقمية',
      body: 'تصميم تجربة تربط هوية العميل والبطاقة الرقمية والنقاط والتشغيل، مع بنية قابلة للتوسع والتكامل مستقبلًا.',
      tags: ['Loyalty', 'Customer Systems', 'Integration'],
      visual: 'loyalty',
    },
  ],
  en: [
    {
      no: '01',
      title: 'Village Market',
      subtitle: 'Digital Commerce & Operations Transformation',
      body: 'Building a digital operating model that connects teams, orders, fulfillment, delivery, customer experience, and data into one measurable system.',
      tags: ['Digital Transformation', 'Operations', 'Commerce'],
      visual: 'commerce',
    },
    {
      no: '02',
      title: 'VPick',
      subtitle: 'Store Operations System',
      body: 'Turning fragmented fulfillment and delivery routines into a structured operating system focused on assignment, visibility, exceptions, and control.',
      tags: ['Internal Product', 'Fulfillment', 'Automation'],
      visual: 'vpick',
    },
    {
      no: '03',
      title: 'Digital Loyalty',
      subtitle: 'Digital Loyalty Infrastructure',
      body: 'Designing a loyalty experience that connects customer identity, digital passes, points, operations, and future system integrations.',
      tags: ['Loyalty', 'Customer Systems', 'Integration'],
      visual: 'loyalty',
    },
  ],
};

const expertise = {
  ar: [
    ['01', 'التحول الرقمي والعمليات', 'أحوّل الأدوات والإجراءات المتفرقة إلى نماذج تشغيل رقمية واضحة، قابلة للقياس والتحسين والتوسع.', Workflow],
    ['02', 'الأنظمة والمنتجات الرقمية', 'أبني وأطوّر أدوات داخلية ومنتجات رقمية تبدأ من مشكلة تشغيلية حقيقية، لا من ميزة تبحث عن استخدام.', Cpu],
    ['03', 'AI والأتمتة في العمل', 'أستخدم الذكاء الاصطناعي والأتمتة داخل العمليات والقرار والتوثيق، مع إبقاء الإنسان حيث تكون مسؤوليته ضرورية.', Sparkles],
  ],
  en: [
    ['01', 'Digital Transformation & Operations', 'I turn fragmented tools and workflows into digital operating models that can be measured, improved, and scaled.', Workflow],
    ['02', 'Digital Systems & Products', 'I build internal tools and digital products that start with a real operating problem, not a feature looking for a use case.', Cpu],
    ['03', 'AI & Automation at Work', 'I use AI and automation inside operations, decisions, and documentation while keeping humans responsible where they matter.', Sparkles],
  ],
};

const ideas = {
  ar: [
    ['ESSAY', 'التقنية ليست تحولًا رقميًا'],
    ['FIELD NOTE', 'من طلبات واتساب إلى عمليات منظمة'],
    ['DEEP DIVE', 'ما الذي يحتاجه محرك SLA فعلي للتوصيل؟'],
  ],
  en: [
    ['ESSAY', 'Technology Is Not Digital Transformation'],
    ['FIELD NOTE', 'From WhatsApp Orders to Structured Operations'],
    ['DEEP DIVE', 'What a Real Delivery SLA Engine Actually Needs'],
  ],
};

function Seo({ page, locale }: { page: PageKey; locale: Locale }) {
  const title = page === 'home' ? 'Abdulaziz Drde — Digital Transformation & Technology Operations' : `${page.replace('-', ' ')} — Abdulaziz Drde`;
  const description = locale === 'ar'
    ? 'عبدالعزيز دردي — التحول الرقمي والعمليات التقنية. أبني أنظمة رقمية تربط التقنية والعمليات والبيانات والذكاء الاصطناعي بنتائج أعمال قابلة للقياس.'
    : 'Abdulaziz Drde — Digital Transformation & Technology Operations. Building digital operating systems across technology, operations, data, AI, and business.';
  const schema = {
    '@context': 'https://schema.org', '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person', name: 'Abdulaziz Drde', alternateName: 'عبدالعزيز دردي',
      jobTitle: 'Digital Transformation & Technology Operations', description,
      sameAs: ['https://github.com/AbdulazizDrde'],
      knowsAbout: ['Digital Transformation','Technology Operations','Digital Operations','Artificial Intelligence','Automation','Digital Commerce'],
    },
  };
  return <Head><title>{title}</title><meta name="description" content={description}/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></Head>;
}

function Header({ locale, setLocale }: { locale: Locale; setLocale: (locale: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const ar = locale === 'ar';
  return <header className="topbar-wrap"><div className="topbar">
    <a href="/" className="mini-brand"><span className="avatar-mark">AD</span><span><strong>{ar?'عبدالعزيز دردي':'Abdulaziz Drde'}</strong><small>Digital Systems</small></span></a>
    <nav className="pill-nav"><a href="/#work">{ar?'أعمالي':'Work'}</a><a href="/#about">{ar?'عني':'About'}</a><a href="/#ideas">{ar?'أفكار':'Ideas'}</a><a href="/lab/">{ar?'المختبر':'Lab'}</a></nav>
    <div className="top-actions"><button className="lang-pill" onClick={()=>setLocale(ar?'en':'ar')}><Languages size={14}/>{ar?'EN':'ع'}</button><a className="contact-pill" href="https://github.com/AbdulazizDrde" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><button className="mobile-menu-btn" onClick={()=>setOpen(!open)}>{open?<X size={18}/>:<Menu size={18}/>}</button></div>
    {open&&<nav className="mobile-popover"><a href="/#work">{ar?'أعمالي':'Work'}</a><a href="/#about">{ar?'عني':'About'}</a><a href="/#ideas">{ar?'أفكار':'Ideas'}</a><a href="/lab/">{ar?'المختبر':'Lab'}</a></nav>}
  </div></header>;
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'vpick') return <div className="project-visual visual-vpick" aria-hidden="true"><div className="phone phone-a"><div className="phone-top"><span/><span/></div><div className="phone-title"/><div className="task task-active"><b/><span/></div><div className="task"><b/><span/></div><div className="task"><b/><span/></div><div className="phone-action"/></div><div className="phone phone-b"><div className="phone-top"><span/><span/></div><div className="metric-line"><b/><b/><b/></div><div className="map-block"><i/><i/><i/></div><div className="sheet-block"><span/><span/><span/></div></div><div className="floating-chip">Operations OS</div></div>;
  if (type === 'loyalty') return <div className="project-visual visual-loyalty" aria-hidden="true"><div className="loyalty-card"><div className="loyalty-brand">VM</div><div className="loyalty-copy"><span/><strong/></div><div className="qr-grid">{Array.from({length:25}).map((_,i)=><i key={i}/>)}</div></div><div className="wallet-card"><span className="wallet-dot"/><div><b/><small/></div></div><div className="points-bubble">+500</div></div>;
  return <div className="project-visual visual-commerce" aria-hidden="true"><div className="dash-window"><div className="window-bar"><span/><span/><span/></div><div className="dash-grid"><div className="dash-sidebar"><i/><i/><i/><i/></div><div className="dash-main"><div className="dash-head"><b/><span/></div><div className="kpi-row"><i/><i/><i/></div><div className="chart"><span/><span/><span/><span/><span/><span/></div></div></div></div><div className="floating-order">Live operations</div></div>;
}

function Home({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  return <>
    <section className="hero-modern"><div className="hero-glow glow-one"/><div className="hero-glow glow-two"/><div className="hero-inner">
      <div className="status-chip"><span className="live-dot"/>{ar?'أبني وأوثّق باستمرار':'Building and documenting continuously'}</div>
      <p className="hello">{ar?'أهلين، أنا عبدالعزيز 👋':'Hey, I’m Abdulaziz 👋'}</p>
      <h1>{ar?<>أحوّل التقنية والـ AI إلى <span>أنظمة تشغيل</span> تصنع أثرًا حقيقيًا.</>:<>I turn technology and AI into <span>operating systems</span> that create real impact.</>}</h1>
      <p className="hero-sub">{ar?'قائد في التحول الرقمي والعمليات التقنية، أبني أنظمة تربط التقنية والعمليات والبيانات بالنمو — من داخل العمل الفعلي، لا من بعيد.':'Digital Transformation & Technology Operations leader building systems that connect technology, operations, data, and growth — from inside real operations.'}</p>
      <div className="hero-actions"><a className="btn btn-dark" href="#work">{ar?'شوف أعمالي':'View my work'} <ArrowLeft className="rtl-arrow" size={16}/></a><a className="btn btn-light" href="#about">{ar?'اعرف أكثر عني':'More about me'}</a></div>
      <div className="hero-meta"><span>Digital Transformation</span><i/><span>Technology Operations</span><i/><span>AI & Automation</span></div>
    </div></section>
    <section className="projects-section" id="work"><div className="wrap"><div className="section-top modern-section-top"><div><span className="tiny-label">{ar?'أعمال مختارة':'Selected work'}</span><h2>{ar?'أنظمة بنيتها من مشاكل حقيقية.':'Systems built from real problems.'}</h2></div><p>{ar?'أعرض العمل كأنظمة وقرارات وتجارب، وليس كقائمة مهام وظيفية.':'I present the work as systems, decisions, and operating experience — not a responsibility list.'}</p></div><div className="project-stack">{projects[locale].map(project=><article className="project-card-modern" key={project.no}><ProjectVisual type={project.visual}/><div className="project-copy-modern"><div className="project-no">{project.no}</div><p className="project-kicker">{project.subtitle}</p><h3>{project.title}</h3><p className="project-desc">{project.body}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="text-link" href="/work/">{ar?'تفاصيل العمل':'View work'} {ar?<ArrowUpLeft size={15}/>:<ArrowUpRight size={15}/>}</a></div></article>)}</div></div></section>
    <section className="about-modern" id="about"><div className="wrap about-grid-modern"><div className="about-sticky"><span className="tiny-label">{ar?'عني':'About'}</span><h2>{ar?'أبني بين التقنية والتشغيل.':'I build between technology and operations.'}</h2></div><div className="about-story"><p className="about-lead">{ar?'عملي يبدأ من الواقع التشغيلي: أين يتعطل العمل؟ ما الذي لا يراه الفريق؟ أين تتكرر الأخطاء؟ ثم أحوّل هذه المشاكل إلى نظام أو منتج أو قرار أو أتمتة.':'My work starts in operating reality: where does work break, what can the team not see, where do errors repeat — then I turn those problems into systems, products, decisions, or automation.'}</p><p>{ar?'التجارة الرقمية هي أحد أقوى مختبراتي الحالية، لكنها ليست حدود هويتي. المظلة الأكبر هي التحول الرقمي والعمليات التقنية، مع امتداد في AI والأتمتة والمنتجات والبيانات.':'Digital commerce is one of my strongest current laboratories, but not the boundary of my identity. The wider umbrella is digital transformation and technology operations, extending into AI, automation, products, and data.'}</p><div className="principle-row"><span>Operator</span><span>Builder</span><span>Researcher</span><span>Writer</span></div></div></div></section>
    <section className="expertise-modern"><div className="wrap"><div className="section-top modern-section-top"><div><span className="tiny-label">{ar?'مجالات التركيز':'Focus areas'}</span><h2>{ar?'خبرات تتقاطع بدل أن تعيش منفصلة.':'Capabilities that work together.'}</h2></div></div><div className="expertise-grid-modern">{expertise[locale].map(([no,title,body,Icon])=>{const IconComp=Icon as typeof Workflow;return <article className="expertise-card-modern" key={String(no)}><div className="expertise-head"><span>{String(no)}</span><IconComp size={22} strokeWidth={1.7}/></div><h3>{String(title)}</h3><p>{String(body)}</p></article>})}</div></div></section>
    <section className="ideas-modern" id="ideas"><div className="wrap"><div className="section-top modern-section-top"><div><span className="tiny-label">{ar?'أفكار من الميدان':'Thinking from the field'}</span><h2>{ar?'أكتب عمّا أختبره وأبنيه.':'I write about what I test and build.'}</h2></div><a href="/writing/" className="text-link">{ar?'كل الكتابات':'All writing'} {ar?<ArrowUpLeft size={15}/>:<ArrowUpRight size={15}/>}</a></div><div className="idea-list-modern">{ideas[locale].map(([type,title],i)=><a href="/writing/" className="idea-row-modern" key={title}><span className="idea-no">0{i+1}</span><div><small>{type}</small><h3>{title}</h3></div><span className="idea-arrow">{ar?<ArrowUpLeft/>:<ArrowUpRight/>}</span></a>)}</div></div></section>
    <section className="final-cta-modern"><div className="cta-glow"/><div className="wrap cta-inner-modern"><span className="tiny-label inverse">Abdulaziz Drde</span><h2>{ar?'التقنية ليست الهدف. النظام الذي يعمل هو الهدف.':'Technology is not the goal. A system that works is.'}</h2><p>{ar?'أبني، أختبر، أقيس، أوثّق — ثم أكرر.':'Build, test, measure, document — then repeat.'}</p><a className="btn btn-white" href="https://github.com/AbdulazizDrde" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a></div></section>
  </>;
}

const innerCopy: Record<Exclude<PageKey,'home'>,{ar:[string,string,string];en:[string,string,string]}> = {
  work:{ar:['الأعمال','من المشكلة إلى النظام.','مشاريع وتجارب تشغيلية أوثق فيها السياق والقرار والتنفيذ والدروس، مع إبقاء البيانات الحساسة خاصة حتى اعتماد نشرها.'],en:['Work','From problem to system.','Projects and operating experiences documented through context, decision, execution, and lessons, while sensitive data remains private until approved for publication.']},
  writing:{ar:['الكتابة','أفكار من داخل العمل.','مقالات وملاحظات وتحليلات تبدأ من تجربة أو بحث أو قرار فعلي، لا من جدول محتوى.'],en:['Writing','Ideas from inside the work.','Essays, field notes, and analysis grounded in actual experience, research, or decisions — not a content calendar.']},
  'field-notes':{ar:['ملاحظات ميدانية','أوثّق العمل وهو حي.','المشكلة ← القرار ← السبب ← النتيجة ← التعلم.'],en:['Field Notes','Documenting work while it is alive.','Problem → Decision → Why → Result → Learning.']},
  lab:{ar:['المختبر','مساحة البناء والاختبار.','نماذج أولية وأدوات داخلية وتجارب AI وأتمتة وواجهات تشغيلية.'],en:['Lab','A space to build and test.','Prototypes, internal tools, AI experiments, automation, and operational interfaces.']},
  frameworks:{ar:['الأطر','الأنماط تستحق أسماءها بعد الدليل.','حالات ← أنماط متكررة ← إطار ← Playbook ← منتج.'],en:['Frameworks','Patterns earn names after evidence.','Cases → repeated patterns → framework → playbook → product.']},
  about:{ar:['عني','أبني عند تقاطع التقنية والعمليات.','عبدالعزيز دردي — التحول الرقمي والعمليات التقنية، مع تركيز عملي على الأنظمة والمنتجات والبيانات والذكاء الاصطناعي.'],en:['About','Building at the intersection of technology and operations.','Abdulaziz Drde — Digital Transformation & Technology Operations, with practical focus across systems, products, data, and AI.']},
};

function InnerPage({page,locale}:{page:Exclude<PageKey,'home'>;locale:Locale}) {
  const ar=locale==='ar'; const [label,title,body]=innerCopy[page][locale];
  return <main className="inner-modern"><section className="inner-hero-modern"><div className="wrap"><span className="tiny-label">{label}</span><h1>{title}</h1><p>{body}</p></div></section>
    {page==='work'&&<section className="projects-section inner-projects"><div className="wrap project-stack">{projects[locale].map(project=><article className="project-card-modern" key={project.no}><ProjectVisual type={project.visual}/><div className="project-copy-modern"><div className="project-no">{project.no}</div><p className="project-kicker">{project.subtitle}</p><h3>{project.title}</h3><p className="project-desc">{project.body}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>}
    {page==='writing'&&<section className="ideas-modern inner-ideas"><div className="wrap"><div className="idea-list-modern">{ideas[locale].map(([type,item],i)=><div className="idea-row-modern static" key={item}><span className="idea-no">0{i+1}</span><div><small>{type}</small><h3>{item}</h3></div><span className="status-soft">{ar?'قيد التطوير':'In development'}</span></div>)}</div><div className="editorial-note"><span>AI</span><p>{ar?'يساعد الذكاء الاصطناعي في البحث والتحليل والتنظيم والتحرير، لكنه لا يختلق تجربتي أو نتائجي أو مواقفي.':'AI can assist research, analysis, structure, and editing. It does not invent my experience, results, or opinions.'}</p></div></div></section>}
    {page==='about'&&<section className="about-modern inner-about"><div className="wrap about-grid-modern"><div className="about-sticky"><span className="tiny-label">{ar?'النموذج':'The model'}</span><h2>Operator × Builder × Researcher × Writer</h2></div><div className="about-story"><p className="about-lead">{ar?'لا أريد أن تبدو هويتي كحساب يتحدث عن التقنية. أريدها أن توثّق شخصًا يشغّل ويبني ويبحث ثم يحوّل التجربة إلى معرفة قابلة للنقل.':'I do not want my identity to look like a profile that talks about technology. I want it to document an operator who builds, researches, and turns experience into transferable knowledge.'}</p><p>{ar?'الدليل قبل الادعاء. الأنظمة قبل الأدوات. الخبرة الميدانية قبل التجريد.':'Evidence before claims. Systems before tools. Field experience before abstraction.'}</p></div></div></section>}
    {(page==='lab'||page==='frameworks'||page==='field-notes')&&<section className="minimal-cards-section"><div className="wrap expertise-grid-modern">{expertise[locale].map(([no,t,b,Icon])=>{const IconComp=Icon as typeof Workflow;return <article className="expertise-card-modern" key={String(no)}><div className="expertise-head"><span>{String(no)}</span><IconComp size={22}/></div><h3>{String(t)}</h3><p>{String(b)}</p></article>})}</div></section>}
  </main>;
}

function Footer({locale}:{locale:Locale}) { const ar=locale==='ar'; return <footer className="footer-modern"><div className="wrap footer-inner-modern"><div><strong>{ar?'عبدالعزيز دردي':'Abdulaziz Drde'}</strong><p>Digital Transformation & Technology Operations</p></div><div className="footer-links-modern"><a href="/work/">{ar?'الأعمال':'Work'}</a><a href="/writing/">{ar?'الكتابة':'Writing'}</a><a href="https://github.com/AbdulazizDrde" target="_blank" rel="noreferrer">GitHub</a></div></div></footer>; }

export function SitePage({ page }: { page: PageKey }) {
  const [locale,setLocaleState]=useState<Locale>('ar');
  useEffect(()=>{const saved=window.localStorage.getItem('abd-locale');if(saved==='ar'||saved==='en')setLocaleState(saved)},[]);
  useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr';window.localStorage.setItem('abd-locale',locale)},[locale]);
  return <><Seo page={page} locale={locale}/><Header locale={locale} setLocale={setLocaleState}/>{page==='home'?<Home locale={locale}/>:<InnerPage page={page} locale={locale}/>}<Footer locale={locale}/></>;
}
