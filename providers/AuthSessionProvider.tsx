import { createUser, getUserByEmail } from "@/app/api/profile/code";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}
export default async function AuthSessionProvider({ children }: Props) {
  const session = await auth();

  return (
    <SessionProvider basePath={"/auth"} session={session}>
      {children}
    </SessionProvider>
  );
}
