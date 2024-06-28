import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function Layout({ children }: { children: ReactNode }): JSX.Element {
   return (
      <div className='flex flex-col min-h-screen'>
         <Header />
         <main role='main' className='flex-1 bg-gray-100 p-8'>
            {children}
         </main>
         <Footer />
      </div>
   );
}