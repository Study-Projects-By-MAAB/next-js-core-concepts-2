import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: "jwt",
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
})

const users = [
    {
        id: 1,
        name: "John",
        email: "john@example.com",
        password: "password",
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        password: "jane123",
    },
    {
        id: 3,
        name: "Admin",
        email: "admin@example.com",
        password: "adminadmin",
    },
    {
        id: 4,
        name: "User1",
        email: "user1@example.com",
        password: "user1user1",
    },
    {
        id: 5,
        name: "User2",
        email: "user2@example.com",
        password: "user2user2",
    },
]

export { handler as GET, handler as POST }
