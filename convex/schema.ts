import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    article: defineTable({
        title: v.string(),
        userId: v.optional(v.string()),
        category: v.string(),
        author: v.string(),
        hashtags: v.optional(v.string()),
        content: v.string(),
        createAt: v.string(),
        likes: v.optional(v.number()),
        dislikes: v.optional(v.number()),
    }),
});