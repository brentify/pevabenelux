import antfu from '@antfu/eslint-config';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    stylistic: {
      semi: true,
    },
    typescript: true,
    jsonc: true,
    yaml: true,
    jsx: false,
    test: false,
    ignores: [
      '**/bin/*.ts',
    ],
    vue: false,
    astro: true,
  },
  tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: './tailwind.config.mjs',
      },
    },
  },
);
