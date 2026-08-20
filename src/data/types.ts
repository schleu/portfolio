type WorkMode = "Remoto" | "Presencial" | "Hibrido"
type ContractType = "CLT"| "PJ" | "Estagio"

interface LocalizedText {
  en: string
  pt: string
}

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  responsible?: string;
}

export interface Experience {
  company: string;
  role: LocalizedText;
  description: LocalizedText;
  startDate: Date;
  finalDate: Date | undefined;
  stack: string[];
  projects: Project[];
  workmode?: WorkMode;
  contractType?: ContractType
  city?: string
}