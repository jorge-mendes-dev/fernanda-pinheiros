import { AppConfig } from 'config/AppConfig';

const title = 'Materiais e Guias';
const description =
  'Guias da nutricionista Fernanda Souza sobre o atendimento nutricional: como funciona a consulta, opções de acompanhamento e o que está incluso.';
const image = { url: `https://${AppConfig.url}/assets/images/og-image.jpg`, width: 1200, height: 630, alt: AppConfig.site_name };

// dicas/page.jsx is a client component and can't export metadata. Next
// replaces openGraph and twitter as whole objects, so both are complete here.
export const metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: AppConfig.locale,
    siteName: AppConfig.site_name,
    url: `https://${AppConfig.url}/dicas`,
    title: `${title} - ${AppConfig.site_name}`,
    description,
    images: [image],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} - ${AppConfig.site_name}`,
    description,
    images: [image.url],
  },
};

export default function DicasLayout({ children }) {
  return children;
}
