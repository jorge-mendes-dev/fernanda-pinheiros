import { AppConfig } from 'config/AppConfig';

export const siteUrl = `https://${AppConfig.url}`;

// wa.me/5511978271175 -> +55 11 97827-1175
export const phone = AppConfig.whatsapp
  .replace(/\D/g, '')
  .replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 $2 $3-$4');
