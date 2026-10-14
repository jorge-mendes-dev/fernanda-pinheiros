import { AppConfig } from 'config/AppConfig';

// dicas/page.jsx is a client component and can't export metadata
export const metadata = {
  title: 'Materiais e Guias',
  description: 'Guias da nutricionista Fernanda Souza sobre o atendimento nutricional: como funciona a consulta, opções de acompanhamento e o que está incluso.',
  openGraph: {
    title: 'Materiais e Guias - Nutricionista Fernanda Souza',
    images: [`https://${AppConfig.url}/assets/images/og-image.jpg`],
  },
};

export default function DicasLayout({ children }) {
  return children;
}
