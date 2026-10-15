import { AppConfig } from "config/AppConfig";
import { FaWhatsapp, FaTiktok } from "react-icons/fa6";
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
    },
    {
      name: 'TikTok',
      href: social.tiktok,
      icon: props => (
        <FaTiktok className='h-6 w-6' />
      ),
    }
  ],
};


  return (
    <footer className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-14 sm:py-20 lg:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="grid grid-cols-3 text-center text-sm/6 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8"
        >
          {links.navigation.map(item => {
            const href = item?.href ? item.href : '#';
            // Internal pages open in the same tab; only external links (WhatsApp) get a new one
            const external = href.startsWith('http');
            return (
              <Link
                key={item.name}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex min-h-11 items-center justify-center px-2 text-gray-600 hover:text-primary transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="mt-10 flex justify-center gap-x-4 sm:mt-14 sm:gap-x-8">
          {links.social.map(item => (
            <Link
              key={item.name}
              href={item?.href ? item.href : '#'}
              className="text-gray-600 hover:text-gray-800 transition-[color,transform] duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full p-2.5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Seguir no ${item.name}`}
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
