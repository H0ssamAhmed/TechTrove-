import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
    args: {
        title: v.string(),
        category: v.string(),
        hashtags: v.optional(v.string()),
        author: v.string(),
        content: v.string(),
        createAt: v.string(),
        userId: v.optional(v.string()),
        likes: v.number(),
        dislikes: v.number(),
    },
    handler: async (ctx, args) => {
        const newArticle = await ctx.db.insert('article', {
            title: args.title,
            category: args.category,
            hashtags: args.hashtags,
            author: args.author,
            content: args.content,
            createAt: args.createAt,
            userId: args.userId,
            likes: args.likes,
            dislikes: args.dislikes,
        });
        return newArticle;
    },
});

export const get = query({
    handler: async (ctx) => {
        const articles = await ctx.db.query('article').collect()
        return articles
    }
})

export const getOneArticle = query({
    args: { id: v.string() },
    handler: async (ctx, args) => await ctx.db.get(args.id)


})
export const getByCategory = query({
    args: { category: v.string() },

    handler: async (ctx, arg) => await ctx.db.query("article")
        .filter((q) => q.eq(q.field("category"), arg.category))
        .collect()
})

export const popularity = mutation({
    args: {
        id: v.string(),
        likes: v.number(),
    },
    handler: async (ctx, args) => await ctx.db.patch(args.id, { likes: args.likes + 1 })

})

export const unPopularity = mutation({
    args: {
        id: v.string(),
        dislikes: v.number()
    },
    handler: async (ctx, args) => await ctx.db.patch(args.id, { dislikes: args.dislikes + 1 })

})