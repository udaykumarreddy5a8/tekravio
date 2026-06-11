import type { ComponentType, SVGProps } from "react";
import {
  SiAndroid,
  SiAngular,
  SiCypress,
  SiFastapi,
  SiGo,
  SiGooglecloud,
  SiHuggingface,
  SiIos,
  SiKubernetes,
  SiLangchain,
  SiNodedotjs,
  SiPytorch,
  SiReact,
  SiSpring,
  SiTensorflow,
} from "@icons-pack/react-simple-icons";
import { Cloud } from "lucide-react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  "Java & Spring": SiSpring,
  "Python & FastAPI": SiFastapi,
  "Node.js & TypeScript": SiNodedotjs,
  "React & Next.js": SiReact,
  Angular: SiAngular,
  "QA & Test Automation": SiCypress,
  "DevOps & SRE": SiKubernetes,
  "Data Science": SiPytorch,
  Golang: SiGo,
  Android: SiAndroid,
  iOS: SiIos,
  AWS: Cloud,
  Azure: Cloud,
  GCP: SiGooglecloud,
  "AI / LLM Engineering": SiHuggingface,
  "ML & MLOps": SiTensorflow,
  "RAG & Embeddings": SiLangchain,
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
