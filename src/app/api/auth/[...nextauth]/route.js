import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          email: "safaart@gmail.com",
          password: "123456@As",
          name: "Admin User",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return { id: "1", name: user.name, email: user.email };
        }

        return null; // unauthorized
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
