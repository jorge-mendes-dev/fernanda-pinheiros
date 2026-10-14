// Builds /llms.txt and /llms-full.txt (https://llmstxt.org) from AppConfig, so
// what AI assistants (ChatGPT, Gemini, Perplexity, Claude…) read about prices,
// services and contact always matches the site.
import { AppConfig } from 'config/AppConfig';
import { phone, siteUrl as baseUrl } from 'config/site';

const { about, consult, curriculum, evaluation, office, pricing, social } =
  AppConfig;

const list = items => items.map(item => `- ${item}`).join('\n');

const plans = () =>
  pricing.plans
    .map(
      plan =>
        `### ${plan.name}: ${plan.price}\n${plan.description}\n${list(plan.details)}${plan.note ? `\n\n${plan.note}` : ''}`
    )
    .join('\n\n');

const summary = `# ${AppConfig.site_name}

> ${AppConfig.description}

${about.description} ${evaluation.description}

## Atendimento

- ${consult.description[0]}
- Presencial: ${office.address}
${list(evaluation.includes.map(item => [item.title, item.description].filter(Boolean).join(' ')))}
- ${pricing.payment}

## Valores

${pricing.plans.map(plan => `- ${plan.name}: ${plan.price}. ${plan.description}`).join('\n')}

## Contato

- Agendamento pelo WhatsApp: ${AppConfig.whatsapp} (${phone})
- Instagram: ${social.instagram}
- TikTok: ${social.tiktok}
- LinkedIn: ${social.linkedin}

## Páginas

- [Início](${baseUrl}/): serviços, como funciona a consulta, consultório, planos e valores, depoimentos
- [Sobre](${baseUrl}/sobre): formação acadêmica, certificados e experiência profissional
- [Dicas](${baseUrl}/dicas): guias em PDF sobre o atendimento nutricional
- [Redes sociais](${baseUrl}/redes-sociais): vídeos do TikTok com dicas de nutrição
`;

export function llmsTxt() {
  return `${summary}
## Optional

- [Conteúdo completo](${baseUrl}/llms-full.txt): todo o conteúdo do site em um só arquivo
`;
}

export function llmsFullTxt() {
  return `${summary}
## Sobre a Fernanda

${about.paragraph.join('\n\n')}

## Formação acadêmica

${curriculum.education.map(item => `### ${item.course}\n${item.institution}\n\n${item.description}`).join('\n\n')}

## Como funciona a consulta

${consult.description.join('\n\n')}

## Planos e valores

${plans()}

${pricing.payment}

## Consultório

${office.description}

Endereço: ${office.address}, CEP ${office.addressParts.postalCode}
`;
}
