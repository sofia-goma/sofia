import Link from 'next/link';


export default function Header(): JSX.Element {
   return (
      <header className="text-indigo-600 p-4">
         <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">Sofia</div>
            <nav>
               <ul className="flex space-x-4">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
               </ul>
            </nav>
         </div>
      </header>
   );
}