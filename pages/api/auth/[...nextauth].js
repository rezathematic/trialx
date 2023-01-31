import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// Lib imports
import prisma from "@/lib/prisma";

export default NextAuth({
  // Configure Google authentication Provider
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  // Configure database connection
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
});
