import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "email", type: "text", required: true, placeholder: "Your Email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter Password" },
            },

            async authorize(credentials) {
                const { email, password } = credentials
                if (!credentials) {
                    return null
                }
                if (email) {
                    const currentUser = users.find((user) => user.email === email)
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser
                        }
                    }
                }
                return null
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        },
    },
}

const handler = NextAuth(authOptions)

const users = [
    {
        id: 1,
        name: "John",
        email: "a@b.com",
        password: "BBbb22!!",
        type: "admin",
        image: "https://picsum.photos/200",
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        password: "jane123",
        type: "user",
        image: "https://picsum.photos/200",
    },
    {
        id: 3,
        name: "Admin",
        email: "admin@example.com",
        password: "adminadmin",
        type: "user",
        image: "https://picsum.photos/200",
    },
    {
        id: 4,
        name: "User1",
        email: "user1@example.com",
        password: "user1user1",
        type: "user",
        image: "https://picsum.photos/200",
    },
    {
        id: 5,
        name: "User2",
        email: "user2@example.com",
        password: "user2user2",
        type: "user",
        image: "https://picsum.photos/200",
    },
]

export { handler as GET, handler as POST }
