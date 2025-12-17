import { AppConfig } from "config/AppConfig";
import { FaWhatsapp } from "react-icons/fa6";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import Link from "next/link";

export default function Footer() {
  const { footer, navigation, social } = AppConfig;

  const links = {
  navigation,
  social: [
    {
      name: 'Instagram',
      href: social.instagram,
      icon: props => (
        <CiInstagram fill="currentColor" viewBox="0 0 24 24" {...props} />
      ),
    },
     {
      name: 'WhatsApp',
      href: social.whatsapp,
      icon: props => (
        <FaWhatsapp className='h-6 w-6' />
      ),
    },
     {
      name: 'Linkedin',
      href: social.linkedin,
      icon: props => (
        <CiLinkedin fill="currentColor" viewBox="0 0 24 24" {...props} />
      ),
    }
  ],
};


  return (
    <footer className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {links.navigation.map(item => (
            <Link
              target="_blank"
              key={item.name}
              href={item?.href ? item.href : '#'}
              className="text-gray-600 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {links.social.map(item => (
            <Link
              key={item.name}
              href={item?.href ? item.href : '#'}
              className="text-gray-600 hover:text-gray-800"
              target="_blank"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600">
          &copy; {footer}
        </p>
      </div>
    </footer>
  );
}
