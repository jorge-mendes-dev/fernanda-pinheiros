import FadeIn from 'components/FadeIn';
import Template from 'components/Template';
import Socials from 'components/Socials';
import { AppConfig } from 'config/AppConfig';

export const metadata = {
  title: 'Redes Sociais',
  description: 'Acompanhe a nutricionista Fernanda Souza no Instagram e TikTok. Dicas diárias de nutrição, receitas saudáveis e conteúdo sobre alimentação equilibrada.',
  keywords: ['nutri_fernandasouza', 'instagram nutricionista', 'tiktok nutrição', 'dicas de nutrição', 'receitas saudáveis'],
  openGraph: {
    title: 'Redes Sociais - Nutricionista Fernanda Souza',
    description: 'Siga @nutri_fernandasouza nas redes sociais para dicas de nutrição e receitas.',
    images: [`https://${AppConfig.url}/assets/images/og-image.jpg`],
  },
};

export default function SocialMedia() {
  return (
    <>
      <Template>
        <>
          <FadeIn delay={0.2}>
            <Socials />
          </FadeIn>
        </>
      </Template>
    </>
  );
}
