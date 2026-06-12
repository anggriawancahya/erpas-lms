import type { Config } from "tailwindcss";
import daisyui from "daisyui";

interface CustomConfig extends Config {
  daisyui?: {
    themes?: boolean | string[] | Record<string, Record<string, string>>[];
    darkTheme?: string;
    base?: boolean;
    styled?: boolean;
    utils?: boolean;
    prefix?: string;
    logs?: boolean;
    themeRoot?: string;
  };
}

const config: CustomConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light", "winter"], // Winter memberikan kesan bersih untuk aplikasi edukasi
  },
} satisfies CustomConfig;
export default config;