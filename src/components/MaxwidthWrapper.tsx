import React, { ReactNode } from 'react'
import { cn } from '../lib/utils';

const MaxwidthWrapper = ({
    className,
    children
} : {
    className?: string,
    children: ReactNode
}) => {
  return (
    <div className
    ={cn('mx-auto w-full max-w-screenxl px-2.5 md:px-20',className)}>{children}</div>
  )
}

export default MaxwidthWrapper