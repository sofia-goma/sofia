'use client';
import { useEffect } from 'react'


export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      console.error(error)
   }, [error])

   return (
      <div className='flex h-screen items-center flex-col gap-8 pt-20 px-4'>
         <h2 className='text-3xl font-bold text-blue-500 text-center'>Something went wrong!</h2>
         <button
            className='bg-blue-500 rounded-md px-4 h-10 flex items-center justify-center font-bold text-white hover:bg-blue-400'
            onClick={
               () => reset()
            }
         >
            Try again
         </button>
      </div>
   );
}