// import { typographyClampConfig } from './../../dcw-react/src/lib/core/typography/tokens/typographyClampConfig';

// const fs = await import('fs');
// const path = await import('path');
// const prettier = await import('prettier');

// interface ClampValues {
//   min: number;
//   vw: number;
//   base: number;
//   max: number;
// }

// function toClamp({ min, vw, base, max }: ClampValues): string {
//   return `clamp(${min}px, ${vw}vw + ${base}px, ${max}px)`;
// }

// function validateConfig(config: Record<string, ClampValues>): void {
//   Object.entries(config).forEach(([key, val]) => {
//     const isValid = ['min', 'vw', 'base', 'max'].every(k => typeof val[k as keyof ClampValues] === 'number');
//     if (!isValid) {
//       throw new Error(`❌ Invalid clamp config for preset: ${key}`);
//     }
//   });
// }

// function generateCss(config: Record<string, ClampValues>): string {
//   let css = ':root {\n';
//   for (const [preset, values] of Object.entries(config)) {
//     const varName = `--fs-${preset.charAt(0).toLowerCase()}${preset.slice(1)}`;
//     css += `  ${varName}: ${toClamp(values)};\n`;
//   }
//   css += '}\n';
//   return css;
// }

// async function writeFormattedCss(css: string, outputPath: string): Promise<void> {
//   const formattedCss = await prettier.format(css, { parser: 'css' });
//   await fs.promises.writeFile(outputPath, formattedCss);
//   console.log(`✅ Typography CSS written to: ${outputPath}`);
// }

// // Main runner
// (async () => {
//   try {
//     const outputPath = path.resolve('./../../dcw-react/src/lib/core/typography/tokens/typography.css');
//     validateConfig(typographyClampConfig);
//     const rawCss = generateCss(typographyClampConfig);
//     await writeFormattedCss(rawCss, outputPath);
//   } catch (err) {
//     console.error('🚨 Failed to generate typography CSS:', err);
//     process.exit(1);
//   }
// })();