import { z, defineCollection } from "astro:content";

const ansCppCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    ans_cpp: ansCppCollection,
};

