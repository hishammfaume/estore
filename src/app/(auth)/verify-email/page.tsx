import React from "react";
import Image from 'next/image';
import VerifyEmail from "@/components/VerifyEmail";
interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token
    const toEmail = searchParams.to
    
return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w[350px]">
            {token && typeof token === "string" ? (
                    <div className="grid gap-6">
                        <VerifyEmail />
                    </div>
            ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                                    <Image
                                            src='/image-sent.gif'
                                            fill
                                            alt='email sent image'
                                    />
                            </div>
                            <div className="text-center">
                                    <h3 className="font-semibold text-2xl">Check yo email</h3>
                                    {toEmail ? (
                                            <p className="text-muted-foreground">
                                                    We&apos;ve sent a verification link to{' '} <span className="font-semibold">{toEmail}</span>.
                                            </p>
                                    ) : (
                                            <p className="text-muted-foreground">
                                                    We&apos;ve sent a verification link to your email.
                                            </p>
                                    )}
                            </div>
                    </div>
            )}
        </div>
    </div>
);
};

export default VerifyEmailPage;
