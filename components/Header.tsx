import Link from 'next/link';


export default function Header(): JSX.Element {
   return (
      <header className="bg-blue-500 text-white p-4">
         <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">SOFIA</div>
            <nav>
               <ul className="flex space-x-4">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/">About</Link></li>
                  <li><Link href="/">Services</Link></li>
                  <li><Link href="/">Contact</Link></li>
               </ul>
            </nav>
         </div>
      </header>
   );
}