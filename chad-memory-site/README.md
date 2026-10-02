# ذاكرة تشاد — Chad Memory

هذا المجلد هو المصدر المملوك للمشروع بعد ترحيله من بيئة AppDeploy في 2 أكتوبر 2026.

## الحالة
- المشروع: نسخة تأسيسية لموقع أرشيف رقمي تشادي حديث
- النطاق الأولي: القرعان وشمال تشاد
- قسم رئيسي: قبائل القرعان وما يندرج تحتها بعد التوثيق
- التقنية: Next.js 15 + React 19 + TypeScript + Tailwind/PostCSS
- نمط البناء: Static Export

## مصدر الترحيل
- AppDeploy app id: `app-aprclz`
- AppDeploy snapshot: `1790908073076`
- آخر نسخة منسوخة تتضمن ترتيب الأماكن: كانم، أسلند، بحر الغزال، موسو، مساقط

## التشغيل المحلي
```bash
npm install
npm run dev
```

## التحقق والبناء
```bash
npm run check
npm run build
```

ينتج البناء الثابت في مجلد `out/`.

## Vercel
عند ربط هذا المستودع في Vercel استخدم:
- Repository: `AbdulazizDrde/AbdulazizDrde`
- Root Directory: `chad-memory-site`
- Framework: Next.js
- Build Command: `npm run build`

لا توجد أسرار أو متغيرات بيئة مطلوبة للنسخة الحالية.

## قاعدة الاستدامة
GitHub هو مصدر الحقيقة للكود من هذه النقطة. لا تعتمد أي نسخة مستقبلية على AppDeploy كمصدر وحيد، ولا تُحذف النسخة القديمة قبل التحقق من نشر النسخة المملوكة ومطابقة الواجهة.
