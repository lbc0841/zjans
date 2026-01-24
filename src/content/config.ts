import { z, defineCollection } from "astro:content";

const ansCppCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        difficulty: z.number(),
    }),
});

export const collections = {
    ans_cpp: ansCppCollection,
};

