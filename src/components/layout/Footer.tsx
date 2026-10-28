import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-energy/10 bg-deep-900 py-12">
      <div className="mx-auto max-w-shell px-6 md:px-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="w-[132px]" />
            <p className="mt-4 max-w-[36ch] text-xs text-[#9fb0a2]">
              Educação técnica em pulverização agrícola, tecnologia de aplicação
              e boas práticas operacionais.
            </p>
          </div>
          <nav aria-label="Treinamento">
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#9fb0a2]">
              Treinamento
            </h4>
            <ul className="grid gap-2">
              {[
                ["#treinamento", "Visão geral"],
                ["#modulos", "Módulos"],
                ["#tecnologia", "Tecnologia"],
                ["#materiais", "Materiais"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-energy"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Institucional">
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#9fb0a2]">
              PULSAR
            </h4>
            <ul className="grid gap-2">
              {[
                ["#para-quem", "Para quem é"],
                ["#oferta", "Oferta"],
                ["#faq", "Dúvidas"],
                ["#contato", "Contato"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-energy"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-energy/10 pt-7 font-mono text-xs text-[#9fb0a2]">
          <span>
            © {new Date().getFullYear()} PULSAR · Domínio da Pulverização
            Agrícola
          </span>
          <span>Precisão no campo · Tecnologia de aplicação</span>
        </div>
      </div>
    </footer>
  );
}
