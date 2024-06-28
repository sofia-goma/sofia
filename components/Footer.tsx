export default function Footer(): JSX.Element {
   return (
      <footer className="bg-blue-500 text-white p-4 text-center">
         <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Sofia. All rights reserved.</p>
         </div>
      </footer>
   );
}