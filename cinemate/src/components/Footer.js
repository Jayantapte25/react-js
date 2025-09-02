import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-7 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cineflix</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="https://www.instagram.com/" target="_blank" className="hover:underline me-4 md:me-6">Instagram</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/" target="_blank" className="hover:underline me-4 md:me-6">Linkedin</Link>
          </li>
          <li>
            <Link to="https://twitter.com/" target="_blank" className="hover:underline me-4 md:me-6">Twitter</Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/" target="_blank" className="hover:underline">YouTube</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
