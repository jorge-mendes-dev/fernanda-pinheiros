# Guia de Otimização SEO - Nutricionista Fernanda Souza

## ✅ Implementações Realizadas

### 1. Metadados Avançados
- **Open Graph tags** completos para compartilhamento em redes sociais
- **Twitter Cards** para melhor visualização no Twitter
- **Canonical URLs** para evitar conteúdo duplicado
- **Viewport e mobile optimization** configurados
- **Robots meta tags** otimizados para indexação

### 2. Estrutura de Dados (Schema.org)
- **LocalBusiness** - Informações completas do negócio
- **ProfessionalService** - Serviços oferecidos com catálogo
- **Person** - Credenciais profissionais da Fernanda
- **WebSite** - Estrutura do site com SearchAction
- Implementação completa com @graph para múltiplas entidades

### 3. Sitemap Otimizado
- URLs corrigidas (antes tinha erro: "https:www.//")
- Prioridades definidas (1.0 para home, 0.8-0.6 para outras)
- Frequência de atualização configurada
- Todas as páginas incluídas (/, /sobre, /dicas, /redes-sociais)

### 4. Robots.txt Melhorado
- Permissões claras para crawlers
- Bloqueio de áreas privadas (/api/, /_next/)
- Sitemap corretamente referenciado
- Crawl-delay configurado

### 5. Metadados por Página
- **Home**: Foco em serviços principais e localização
- **Sobre**: Credenciais e formação acadêmica
- **Redes Sociais**: Engajamento e conteúdo social
- Cada página com keywords específicas

### 6. Keywords Estratégicas (47 termos)
Organizadas por prioridade:
- **Core Services**: nutricionista são paulo, nutricionista online, etc.
- **Especializações**: introdução alimentar, nutrição materno infantil
- **Objetivos de Saúde**: emagrecimento saudável, saúde intestinal
- **Credenciais**: CRN-3 91282/P, pós graduação
- **Público-alvo**: gestantes, bebês, crianças, adultos

### 7. Arquivos Gerados
- `/src/app/sitemap.js` - Gerador dinâmico de sitemap
- `/src/app/robots.js` - Gerador dinâmico de robots.txt
- `/public/manifest.json` - PWA manifest para mobile

---

## 📋 Próximas Ações Recomendadas

### Ações Imediatas (Faça Hoje)

#### 1. Google Search Console
```
1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: www.nutrifernandasouza.com.br
3. Verifique a propriedade usando um dos métodos:
   - Tag HTML (recomendado)
   - Google Analytics
   - Google Tag Manager
   - DNS record
4. Envie o sitemap: https://www.nutrifernandasouza.com.br/sitemap.xml
5. Solicite indexação das páginas principais
```

**Código de verificação**: Adicione no layout.jsx dentro de <head>:
```javascript
<meta name="google-site-verification" content="SEU-CODIGO-AQUI" />
```

#### 2. Google Business Profile (GMB)
```
1. Acesse: https://business.google.com
2. Crie/reivindique seu perfil
3. Preencha TODAS as informações:
   - Nome: Nutricionista Fernanda Souza
   - Categoria: Nutricionista
   - Endereço: Se atende presencial
   - Telefone: (11) 97827-1175
   - Site: https://www.nutrifernandasouza.com.br
   - Horário de atendimento
   - Descrição completa
   - Fotos profissionais
4. Peça avaliações aos clientes satisfeitos
```

#### 3. Criar Imagem OG (Open Graph)
```
Dimensões: 1200x630px
Conteúdo sugerido:
- Logo + nome "Nutricionista Fernanda Souza"
- CRN-3 91282/P
- "Nutrição Clínica e Materno-Infantil"
- Cores: fundo branco, destaques em #ff7da4

Salvar como: /public/assets/images/og-image.jpg
```

### Otimizações de Conteúdo (Semana 1)

#### 1. Adicionar Seção de FAQ
Crie uma seção com perguntas frequentes usando schema FAQ:
```javascript
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Quanto custa uma consulta nutricional?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Os valores variam conforme o tipo de atendimento..."
    }
  }]
}
```

Perguntas sugeridas:
- Quanto custa uma consulta?
- Como funciona a consulta online?
- Preciso fazer exames antes da consulta?
- Qual a diferença entre nutricionista e nutrólogo?
- Aceita convênio?
- Quantas consultas são necessárias?

#### 2. Blog/Artigos
Crie conteúdo regular sobre:
- Introdução alimentar (guia completo)
- Nutrição na gravidez
- Alimentação infantil saudável
- Mitos e verdades sobre emagrecimento
- Dicas de lanches saudáveis para crianças

#### 3. Otimizar Imagens
```bash
# Instalar ferramenta de otimização
npm install next/image

# Para cada imagem:
- Usar formato WebP/AVIF
- Adicionar alt text descritivo
- Lazy loading automático
- Dimensões apropriadas
```

Exemplo de alt text bom:
❌ "foto1.jpg"
✅ "Nutricionista Fernanda Souza atendendo gestante em consultório"

### Performance (Semana 2)

#### 1. Google PageSpeed Insights
```
1. Teste em: https://pagespeed.web.dev/
2. URL: https://www.nutrifernandasouza.com.br
3. Meta: 90+ em Mobile e Desktop
```

Otimizações típicas:
- Comprimir imagens
- Minificar CSS/JS (já feito pelo Next.js)
- Usar cache de navegador
- CDN para assets estáticos

#### 2. Core Web Vitals
Métricas importantes:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

#### 3. Next.js Config Optimization
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nutrifernandasouza.com.br',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  swcMinify: true,
};
```

### Link Building (Contínuo)

#### 1. Backlinks Locais
- Cadastro em diretórios locais de saúde
- Parcerias com clínicas e hospitais
- Artigos em blogs de saúde
- Entrevistas em podcasts de nutrição

#### 2. Redes Sociais
Mantenha ativos e com links para o site:
- Instagram: @nutri_fernandasouza (✓ já tem)
- TikTok: @nutri_fernandasouza (✓ já tem)
- YouTube: Crie canal com vídeos educativos
- LinkedIn: Perfil profissional
- Pinterest: Receitas e dicas visuais

#### 3. Diretórios Profissionais
```
1. CRN-3: Cadastro no site do conselho
2. Doctoralia: Perfil profissional
3. Google Meu Negócio (GMB)
4. Páginas Amarelas
5. GetNinjas
6. Profissionais da Saúde
```

### Métricas e Monitoramento

#### 1. Google Analytics 4
```javascript
// Adicionar no layout.jsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

#### 2. Acompanhar Mensalmente
- Posição no Google para keywords principais
- Tráfego orgânico (Google Analytics)
- Taxa de conversão (contatos via WhatsApp)
- Backlinks novos (Google Search Console)
- Erros de rastreamento (Search Console)

#### 3. Ferramentas Essenciais
- **Google Search Console**: Monitoramento de indexação
- **Google Analytics**: Análise de tráfego
- **Google Business**: Gestão de avaliações
- **Ubersuggest/SEMrush**: Análise de keywords (grátis com limitações)

---

## 🎯 Keywords Alvo Prioritárias

### Alta Prioridade (Foque nessas primeiro)
1. "nutricionista são paulo"
2. "nutricionista online"
3. "nutrição materno infantil"
4. "nutricionista gestante"
5. "introdução alimentar"
6. "consulta nutricional online"

### Média Prioridade
7. "nutricionista bebê"
8. "emagrecimento saudável"
9. "nutricionista sp"
10. "nutrição para gestantes"

### Long-tail (Específicas, menor concorrência)
- "nutricionista especializada em introdução alimentar são paulo"
- "consulta nutricional online gestante"
- "nutricionista materno infantil zona sul sp"
- "como funciona introdução alimentar BLW"

---

## 📊 Checklist Semanal

### Semana 1
- [ ] Configurar Google Search Console
- [ ] Criar Google Business Profile
- [ ] Criar imagem OG (1200x630)
- [ ] Adicionar ícones PWA (192x192, 512x512)
- [ ] Pedir 5 avaliações no Google

### Semana 2
- [ ] Otimizar todas as imagens do site
- [ ] Criar seção FAQ
- [ ] Escrever primeiro artigo de blog
- [ ] Configurar Google Analytics 4
- [ ] Cadastrar em 3 diretórios locais

### Semana 3
- [ ] Publicar 2 artigos novos
- [ ] Conseguir primeiro backlink
- [ ] Analisar primeiras métricas
- [ ] Ajustar estratégia baseada em dados
- [ ] Otimizar performance (PageSpeed)

### Semana 4
- [ ] Criar conteúdo para YouTube
- [ ] Expandir presença no LinkedIn
- [ ] Revisar e atualizar keywords
- [ ] Analisar concorrentes
- [ ] Planejar próximo mês

---

## 🚀 Resultados Esperados

### Curto Prazo (1-3 meses)
- Indexação completa no Google
- Primeiras posições em keywords long-tail
- Aumento de 50-100% no tráfego orgânico
- Primeiras avaliações no Google

### Médio Prazo (3-6 meses)
- Top 10 em 5+ keywords principais
- 200-500 visitantes orgânicos/mês
- 20+ avaliações 5 estrelas
- 10+ backlinks de qualidade

### Longo Prazo (6-12 meses)
- Top 3 em keywords principais locais
- 500-1000 visitantes orgânicos/mês
- Autoridade de domínio 20+
- ROI positivo em marketing orgânico

---

## ⚠️ Avisos Importantes

### O que NÃO fazer
- ❌ Comprar backlinks
- ❌ Keyword stuffing (excesso de palavras-chave)
- ❌ Conteúdo duplicado
- ❌ Cloaking ou técnicas black hat
- ❌ Ignorar mobile optimization
- ❌ Títulos clickbait enganosos

### Boas Práticas
- ✅ Conteúdo original e relevante
- ✅ Atualização regular
- ✅ Foco na experiência do usuário
- ✅ Velocidade de carregamento
- ✅ Mobile-first
- ✅ Backlinks naturais e relevantes

---

## 📞 Suporte

Para dúvidas sobre implementação técnica:
1. Documentação Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo
2. Google Search Central: https://developers.google.com/search
3. Schema.org: https://schema.org/

**Última atualização**: Janeiro 2026
**Próxima revisão**: Fevereiro 2026
