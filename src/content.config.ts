import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  lang: z.enum(["en", "ca"]),
  slug: z.string(),
  translationKey: z.string(),
  draft: z.boolean().default(false),
});

const thinkingEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thinking-en" }),
  schema: baseArticleSchema,
});

const thinkingCa = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thinking-ca" }),
  schema: baseArticleSchema,
});

export const collections = {
  "thinking-en": thinkingEn,
  "thinking-ca": thinkingCa,
};