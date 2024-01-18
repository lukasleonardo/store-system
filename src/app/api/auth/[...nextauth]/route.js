import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

import User from "../../../../models/user";
import { connectToDb } from "../../../../utils/database";

const handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,

    })],
    async session({session}){
      const sessionUser = await User.findOne({email:session.user.email})
      session.user.id=session_id.tostring()
      return session
    },
    
    async signIn({profile}){
      try {
        await connectToDb()

        const userExists = await User.findOne({email:profile.email}).then(this.redirect('/'))
        if(!userExists){
          await User.create(
            {
              email:profile.email,
              username:profile.username.replace(' ','').toLowerCase(),
              password:profile.password.replace(' ','').toLowerCase(),
              image:profile.image
            }
          )
        }
      } catch (error) {
        
      }
      
    },

    async signUp({Profile}){
      try {
        await connectToDb()

        const userExists = await User.findOne({email:profile.email})
        if(!userExists){
          await User.create(
            {
              email:profile.email,
              username:profile.username.replace(' ','').toLowerCase(),
              password:profile.password.replace(' ','').toLowerCase(),
              image:profile.image
            }
          )
        }
      } catch (error) {
        console.log(e)
      }
      return 'This email is already exists in the database'
    }
    
})
export { handler as GET, handler as POST }