export interface Hero {
  title: string;
  subtitle: string;
  button: string;
  secondaryButton?: string;

  telegram: string;
  telegramLink: string;
}

export interface Company {
  name: string;
  logo: string;
  phone: string;
  email: string;
  telegram: string;
  whatsapp: string;
  address: string;
  workingHours: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Site {
  company: Company;
  hero: Hero;
  features: Feature[];
  services: Service[];
}