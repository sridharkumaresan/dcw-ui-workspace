# Changelog — @functions/dcw-react/typography

All notable changes to this package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2025-05-24
### Added
- Initial release of responsive typography system
- `FluidText` component with `preset` prop
- `TypographyProvider` for context-based overrides
- Preset map with `default` and `marketing` tokens
- `getTypographyPreset()` utility function
- `createTypographyStylesFromTokens()` Griffel adapter
- Hybrid support: Griffel + inline styles
- Full Storybook documentation with MDX and usage examples
- Production-ready `README.md`

---

## Upcoming
### Planned
- Add `compact`, `accessibility`, and `legacy` preset groups
- Support for localization-aware line-height and font choices
- Token validator CLI for preset linting
- CSS variable fallbacks for theming consistency