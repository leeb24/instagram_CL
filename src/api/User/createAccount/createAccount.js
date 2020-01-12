import {prisma} from "../../../../generated/prisma-client"
export default {
    Mutation:{
        createAccount: async(_,args)=>{
            // some parameters not required have default null strings
            const { username, email, firstName ="", lastName="", bio=""} = args
            const createdUser = await prisma.createUser({
                userName:username,
                email:email, 
                firstName:firstName, 
                lastName:lastName, 
                bio:bio
            })
            return createdUser
        }
    }
}