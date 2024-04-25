import { createUser, getUserByEmail } from "@/app/api/profile/code";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}
export default async function AuthSessionProvider({ children }: Props) {
  const session = await auth();

  if (session?.user) {
    if (session.user.email) {
      try {
        const response = await getUserByEmail(session.user.email);
        console.log(response);

        if (response) {
          // If user exists, update session with user data
          session.user = {
            ...session.user,
            ...response,
          };
        } else {
          // If user doesn't exist, create a new user and update session
          const newUser = await createUser({
            name: session.user.name || "",
            Dname: "",
            role: "",
            website: "",
            about: "",
            email: session.user.email || "",
            image: session.user.image || "",
          });

          if (newUser) {
            // Update session with new user data
            session.user = newUser;
          } else {
            // Handle failed user creation
            console.error("Failed to create new user.");
          }
        }
      } catch (error) {
        console.error("Error fetching or creating user data:", error);
      }
    } else {
      console.log("User email not provided.");
    }

    // Ensure that only necessary fields are kept in the session
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      id: session.user.id,
    };
  }

  console.log(JSON.stringify(session), "session");

  return (
    <SessionProvider basePath={"/auth"} session={session}>
      {children}
    </SessionProvider>
  );
}
