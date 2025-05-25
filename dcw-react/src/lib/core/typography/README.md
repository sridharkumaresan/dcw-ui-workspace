# @functions/dcw-react/typography

A responsive, scalable, theme-aware typography system built on Fluent UI v9 for enterprise-grade React applications.

## 🚀 Features

- ✅ Fluid `clamp()`-based scaling for large displays
- ✅ Hybrid Griffel + inline styling for performance + flexibility
- ✅ Easy customization via context
- ✅ Supports multiple preset token maps (e.g., `default`, `marketing`, or custom)
- ✅ Zero runtime CSS injection for default presets

---

## 📦 Installation

```bash
npm install @functions/dcw-react

---

## 🔧 Usage

### 1. Wrap your app with `TypographyProvider`

```tsx
import {
  TypographyProvider,
  getTypographyPreset,
} from '@functions/dcw-react/typography';

<TypographyProvider tokens={getTypographyPreset('default')}>
  <App />
</TypographyProvider>
```

### 2. Use the `FluidText` component

```tsx
import { FluidText } from '@functions/dcw-react/typography';

<FluidText preset="Title1">Enterprise Title</FluidText>
```

---

## 🎛 Available Presets

| Name        | Description                                 |
|-------------|---------------------------------------------|
| `default`   | Based on Fluent UI v9 tokens                |
| `marketing` | Fluid display fonts for expressive UI       |

Switch presets easily:

```tsx
<TypographyProvider tokens={getTypographyPreset('marketing')}>
  <App />
</TypographyProvider>
```

---

## 🧩 Custom Tokens

You can define your own typography scale:

```tsx
const customTokens = {
  Title1: {
    fontSize: 'clamp(2rem, 2vw + 1rem, 3rem)',
    fontWeight: 700,
    lineHeight: '1.2',
  },
};

<TypographyProvider tokens={customTokens}>
  <FluidText preset="Title1">Custom Title</FluidText>
</TypographyProvider>
```

---

## 💡 Best Practices

- Use `FluidText` instead of raw `<h1>` or `<p>` for consistent scale
- Define all typography via `TypographyTokenMap`
- Use `className` when Griffel can optimize static styles
- Use `style={}` fallback for dynamic, runtime tokens

---

## 🛠 Maintainers

Built by the DCW UI Team at Functions Technology  
---

## 🏷 License

MIT