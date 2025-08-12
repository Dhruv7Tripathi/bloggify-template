import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
const Footer = () => {

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Phoenix</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences. Let&apos;s collaborate and
              bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Link>
              <Link
                href="https://twitter.com"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Link>
              <Link
                href="mailto:phoenix@example.com"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 dark:text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">UI/UX Design</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">API Development</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">Consulting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
