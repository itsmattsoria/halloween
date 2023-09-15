import { defineCollection } from 'astro:content';

const yearsCollection = defineCollection({});

export const collections = {
  years: yearsCollection,
};
