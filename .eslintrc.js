import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // 1. Masukkan file yang ingin diabaikan di paling atas
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      '**/build/**',
      'next-env.d.ts',
      'public/**',
    ],
  },

  // 2. Load base config dari Next.js
  ...compat.extends('next/core-web-vitals'),

  // 3. Load config TypeScript (Jika menggunakan TS)
  ...compat.extends('next/typescript'),

  // 4. Custom Rules & Overrides
  {
    rules: {
      // Tambahkan rule custom kamu di sini jika ada
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default eslintConfig;
