import NextAuth from "next-auth"
import User from "@/models/user"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { connectToDB } from "./utils/database"

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    GitHub,Google
  ],
  basePath: "/auth",
  callbacks: {
    async signIn({ profile, account }) {
      try {
        await connectToDB();
        const provider = account?.provider;
        const email = profile?.email;
        const user = await User.findOne({ email, provider });

        if (!user) {
          await User.create({
            email,
            provider,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.picture || profile?.avatar_url, // Use conditional operator to handle missing 'picture'
          });
        }
        return true;
      } catch (error : any) {
        console.error("Error: ", error.message);
        return false;
      }
    },
    jwt({ token, trigger, session }) {
        if (trigger === "update") token.name = session.user.name
        return token
      },
    async session({ session, token }: { session: any; token: any }) {
      session.user.userId = token.userId;
      return session;
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)