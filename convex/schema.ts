import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    profile: defineTable({
        user: v.id('users'),
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        address: v.string(),
        address2: v.string(),
        city: v.string(),
        province: v.string(),
    }),
    users: defineTable({
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    })
    
})