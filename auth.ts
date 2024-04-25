import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { createUser, getUserByEmail } from "@/app/api/profile/code";
export const { handlers, auth, signIn, signOut } = NextAuth({
  basePath: "/auth",

  providers: [
    // Google,
    GitHub,
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signin");

      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async session({ session, user, token }) {
      // console.log("token",token);
      // session.user.userId=user.id;
      return session;
    },
    async jwt({token, account}) {
      
      // if (token.email) {
      //   const response = await getUserByEmail(token.email);
      //   console.log(response);

      //   if (response) {
      //     token.id = response.id;
      //   } else {
      //     const newUser = await createUser({
      //       name: token.name || "",
      //       Dname: "",
      //       role: "",
      //       website: "",
      //       about: "",
      //       email: token.email || "",
      //       image: token.picture || "",
      //     });
      //     console.log(newUser,"newuser");
      //     if (newUser) {
      //       token.id = newUser.id;
      //     } else {
      //     }
      //   }
      // } else {
      //   console.log("User email not provided.");
      // }
      return token
    },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
});


// async session({session, token}) {
//   // console.log('token', token);
//   session.user.userId = token.id;
//   session.user.accessToken = token.accessToken;
//   return session
// },
// async signIn({ user, account, profile, email, credentials }) {
//   console.log("signin");

//   if (user?.email) {
//     const response = await getUserByEmail(user.email);

//     console.log(response);

//   } else {

//   }
//   return true;
// },
