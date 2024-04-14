import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  basePath: "/auth",
  providers: [Google, GitHub],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("user",user);
      // console.log( "account", account);
      // console.log("profile", profile);
      // console.log( "email",email);
      // console.log("credentials",credentials);

      return true;
    },
    async redirect({ url, baseUrl }) {
      
      return baseUrl;
    },
    async session({ session, user, token }) {
      
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
