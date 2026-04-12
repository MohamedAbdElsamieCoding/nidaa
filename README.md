# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# تفاصيل تقنية لتصميم واجهة "مواقيت الصلاة" المستقبلية

يعتمد هذا التصميم على جمالية "الزجاج الشبكي المتوهج" (Futuristic Glassmorphism) مع تباين قوي بين الألوان الباردة والداكنة. فيما يلي العناصر الأساسية لتنفيذه برمجياً:

---

## 1. لوحة الألوان (Color Palette)

الألوان هي مفتاح هذا التصميم، حيث تخلق التباين بين الـ Teal/Cyan المتوهج والـ Deep Purple الغامق.

| العنصر | اللون (Hex Code) | ملاحظات الاستخدام |
| :--- | :--- | :--- |
| **اللون الرئيسي (Cyan)** | `#00F2EA` | للخطوط المتوهجة (Glow)، الإطارات، والعناصر النشطة. |
| **اللون الثانوي (Purple)** | `#4A148C` | لظلال الخلفية العميقة والانتقالات اللونية. |
| **الخلفية الداكنة (Background)** | `#0F0F1B` | كحلي مائل للسواد، لتوفير أقصى تباين. |
| **لون النص الأساسي** | `#FFFFFF` | أبيض نقي للعناوين والساعة. |
| **لون النص الفرعي** | `#B0BEC5` | رمادي فاتح للنصوص الأقل أهمية (التوقيت، Transliteration). |

---

## 2. أنواع الخطوط المقترحة (Typography)

عشان توصل لنفس الروح، محتاج خطوط "Sans Serif" عصرية وواضحة (متاحة على Google Fonts):

* **للغة العربية والعناوين:**
    * **Cairo:** خط ممتاز ومثالي للواجهات التقنية (نوصي بـ `Bold` للعناوين و `Regular` للنصوص).
    * **Tajawal:** بديل جيد بلمسة أنعم قليلاً.
* **للغة الإنجليزية والأرقام (الساعة والمواعيد):**
    * **Rajdhani:** خط "Square-ish" بيدي طابع تكنولوجي جداً.
    * **Orbitron:** لو عايز شكل مستقبلي صريح (مثالي للساعة الرقمية والأرقام).

---

## 3. أحجام الخطوط والتنسيق (Sizing)

لضمان وضوح النص على مختلف الأجهزة، نوصي باستخدام الأحجام التالية (مع اعتماد `Responsive Design`):

| العنصر | الحجم المقترح (Desktop) | الحجم المقترح (Mobile) | تنسيق إضافي |
| :--- | :--- | :--- | :--- |
| **العنوان الرئيسي** (مواقيت الصلاة) | `48px` | `32px` | `Font-weight: Bold (700)` |
| **الساعة الرقمية** | `64px` | `48px` | `Orbitron` / `letter-spacing: 2px` |
| **أسماء الصلوات** (Fajr, Dhuhr) | `20px` | `16px` | `Font-weight: Medium (500)` / لون أبيض |
| **توقيت الصلاة** (07:03, 14:34) | `22px` | `18px` | `Font-weight: Semi-bold (600)` / لون رمادي فاتح |

---

## 4. كود CSS لتأثير الزجاج (Glassmorphism)

عشان تطلع الـ **Card** (اللوحة) اللي فيها المواعيد بنفس الشكل الشفاف المتوهج، استخدم هذا الكود كأساس:

```css
/* تنسيق لوحة المواعيد (الزجاج الشفاف) */
.prayer-times-panel {
    background: rgba(15, 23, 42, 0.7); /* خلفية داكنة شفافة جداً */
    backdrop-filter: blur(10px); /* تأثير التغبيش */
    -webkit-backdrop-filter: blur(10px); /* لدعم سفاري */
    border: 1px solid rgba(0, 242, 234, 0.3); /* إطار بلون السيان شفاف جداً */
    border-radius: 15px; /* حواف ناعمة */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8); /* ظل داكن لعمق الـ Card */
    overflow: hidden; /* لمنع تسرب التوهج */
}

/* إضافة توهج (Glow) حول اللوحة (اختياري) */
.prayer-times-panel::after {
    content: "";
    position: absolute;
    top: -10px; left: -10px; right: -10px; bottom: -10px;
    background: inherit;
    filter: blur(15px);
    opacity: 0.5;
    z-index: -1;
}