// @ts-check

import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import functionalPlugin from "eslint-plugin-functional";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["dist", "node_modules"],
  },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  tsEslint.configs.recommended,
  tsEslint.configs.eslintRecommended,
  // @ts-expect-error 型定義がおかしいため
  functionalPlugin.configs.noMutations,
  eslintConfigPrettier,

  // 非Reactプロジェクトの場合は以下のブロックと関連するimportを削除してください
  // @ts-expect-error 型定義がおかしいため
  storybook.configs["flat/recommended"],
  // @ts-expect-error 型定義がおかしいため
  reactHooks.configs.flat.recommended,

  {
    plugins: {
      "react-refresh": reactRefresh,
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs["recommended-error"]?.rules,
    },
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
  },

  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "index", "sibling", "object"],
          ],

          pathGroups: [
            {
              pattern: "*.scss",

              patternOptions: {
                matchBase: true,
              },

              group: "unknown",
              position: "after",
            },
          ],

          "newlines-between": "always",

          alphabetize: {
            order: "asc",
          },
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "import/named": 0,
      "import/no-unresolved": 0,
      "no-undef": 0,
      "no-unused-vars": 0,
      "no-var": 2,
      "object-shorthand": 2,
      "compat/compat": 0,
      "functional/prefer-immutable-types": 0,
      "functional/type-declaration-immutability": 0,
    },
  },
);
