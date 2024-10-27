import { z } from "zod"

    //auth credentials schema
 export  const AuthCredentialsValidator = z.object({
        email: z.string().email(),
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters long.',
        })
    })
    
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
   export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>