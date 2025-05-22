// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

const baldursGate = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/dnd/baldurs-gate" }),
  schema: z.object({
    title: z.string().nonempty(),
    author: z.string().nonempty(),
    description: z.string().nonempty(),
    date: z.string().date().pipe(z.coerce.date()),
    act: z.enum(["Prologue", "Act 1", "Act 2", "Act 3"]),
    locations: z.array(z.string()),
  }),
});

export const collections = { baldursGate };
