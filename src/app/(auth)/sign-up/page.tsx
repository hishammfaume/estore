"use client"
import React from 'react'
import { icons } from '../../../components/icons';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { AuthCredentialsValidator, TAuthCredentialsValidator } from '@/lib/validators/account-credentials-validator';

const page = () => {




//react hook form
const { 
    register, 
    handleSubmit, 
    formState:{errors} 
// eslint-disable-next-line react-hooks/rules-of-hooks
} = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
});

//handle submission of form
const onSubmit = ({email, password}: TAuthCredentialsValidator) => {
    console.log(email , password)
    //send data to the server

}
  return (
    <>
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
                <icons.logo className='h-20 w-20' />
                <h1 className='text-2xl font-bold'>
                    Create an account
                </h1>
                <Link className={buttonVariants({
                    variant: 'link',
                    className: 'text-muted-foreground text-blue-500 gap-1.5'
                    
                }
                )} href='/sign-in'>Already have an account? Sign-in 
                <ArrowRight className='h-4 w-4' />
                </Link>
            </div>
            <div className="grid gap-6 ">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid gap-2">
                        <div className="grid gap-1 py-2">
                             <Label htmlFor='email'>Email</Label>
                             <Input 
                             {...register('email')}
                             className={cn({
                                "focus-visible:ring-red-500": errors.email
                             })} 
                             type='email' id='email' name='email' placeholder='you@example.com' />
                        </div>
                        <div className="grid gap-1 py-2">
                             <Label htmlFor='password'>Password</Label>
                             <Input 
                             {...register('password')}
                             className={cn({
                                "focus-visible:ring-red-500": errors.password
                             })} 
                             type='password' id='password' name='password' placeholder='password' />
                        </div>
                        <Button>Sign up</Button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default page
