import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Company Name</div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-300 transition duration-300">Home</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">About</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Services</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Contact</a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block py-2 hover:bg-blue-800 px-4">Home</a>
          <a href="#" className="block py-2 hover:bg-blue-800 px-4">About</a>
          <a href="#" className="block py-2 hover:bg-blue-800 px-4">Services</a>
          <a href="#" className="block py-2 hover:bg-blue-800 px-4">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar