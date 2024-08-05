import NextAuth from "next-auth"

export interface User {
  name: string,
  id: string,
  email: string,
  image: string
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User
  }
}

