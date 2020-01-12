import { prisma } from "../../../../generated/prisma-client"
import { generateSecret } from "../../../utils";

export default {
    Mutation:{
        requestSecret:async (_,args) => {
            const{email} = args
            const secret = generateSecret()
            console.log(secret)
            try{
                await prisma.updateUser({
                    data:{loginSecret:secret},
                    where:{email:email}
                })
                return true
            }
            catch{
                return false
            }
        }
    }
}