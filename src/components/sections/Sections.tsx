import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { problems, benefits, modules, techChips, faqs } from "@/data/content";

/* ---------- Desafios ---------- */
export function Problems() {
  return (
    <section id="desafios" className="bg-sand py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-shell gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-14">
        <div data-reveal>
          <Kicker className="!text-graphite">O ponto cego da operação</Kicker>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            O que separa uma aplicação certa de um prejuízo no campo.
          </h2>
          <p className="mt-4 max-w-[54ch] text-lg text-ink-soft">
            A maior parte das falhas de pulverização não está no produto — está
            na aplicação. São decisões técnicas tomadas sob pressão, muitas
            vezes sem o conhecimento que transforma cada passada em resultado.
          </p>
        </div>
        <div>
          {problems.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/10 py-7 last:border-b"
            >
              <span className="font-mono text-xs text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-1 font-display text-2xl">{p.title}</h3>
                <p className="max-w-[48ch] text-ink-soft">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefícios ---------- */
export function Benefits() {
  return (
    <section id="beneficios" className="bg-sand py-24 text-ink md:py-32">
      <div className="mx-auto max-w-shell px-6 md:px-14">
        <div data-reveal className="max-w-[64ch]">
          <Kicker className="!text-graphite">O que você desenvolve</Kicker>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Competência técnica que aparece no resultado da lavoura.
          </h2>
        </div>
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {benefits.map((b, i) => (
            <article
              key={b.title}
              data-reveal
              className={`grid gap-2 border-t border-ink/10 pt-4 ${
                i % 2 === 1 ? "md:mt-12" : ""
              }`}
            >
              <h3 className="font-display text-xl">{b.title}</h3>
              <p className="text-ink-soft">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Módulos ---------- */
export function Modules() {
  return (
    <section id="modulos" className="bg-deep-800 py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6 md:px-14">
        <div data-reveal className="max-w-[64ch]">
          <Kicker>Conteúdo programático</Kicker>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Seis módulos. Uma lógica de operação do começo ao fim.
          </h2>
        </div>
        <div className="mt-16">
          {modules.map((m, i) => (
            <details
              key={m.code}
              data-reveal
              open={i === 0}
              className="group border-t border-energy/10 last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-center gap-6 py-7">
                <span className="font-mono text-xs text-energy">{m.code}</span>
                <span className="flex-1 font-display text-2xl font-semibold">
                  {m.title}
                </span>
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-energy/20 transition-transform duration-300 group-open:rotate-45 group-open:border-energy">
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="grid gap-2 pb-7 text-[#9fb0a2]">
                {m.items.map((it) => (
                  <li
                    key={it}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-3"
                  >
                    <span className="mt-[0.55em] h-[6px] w-[6px] bg-energy" />
                    {it}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tecnologia ---------- */
export function Tech() {
  return (
    <section id="tecnologia" className="bg-sand py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-shell items-center gap-12 px-6 md:grid-cols-[1fr_1.25fr] md:px-14">
        <div
          data-reveal
          className="aspect-[5/4] overflow-hidden rounded-md border border-ink/10 bg-sand-200"
        >
          <svg
            viewBox="0 0 520 416"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
            aria-hidden="true"
          >
            <rect width="520" height="416" fill="#e8e5d6" />
            <g stroke="#303a34" strokeWidth="2" fill="none">
              <path d="M40 210 H480" />
              <path d="M40 200 V220 M480 200 V220" />
            </g>
            {[90, 165, 240, 315, 390, 465].map((x) => (
              <g key={x}>
                <circle cx={x} cy="210" r="5" fill="#10271d" />
                <path
                  d={`M${x} 220 l-14 40 M${x} 220 l14 40`}
                  stroke="#b9dc59"
                  strokeWidth="2"
                />
              </g>
            ))}
            <text
              x="40"
              y="60"
              fontFamily="var(--font-mono)"
              fontSize="13"
              letterSpacing="2"
              fill="#303a34"
            >
              BARRA · ESPAÇAMENTO DE BICOS
            </text>
          </svg>
        </div>
        <div data-reveal>
          <Kicker className="!text-graphite">
            Tecnologias e equipamentos abordados
          </Kicker>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Do circuito hidráulico à geometria da barra.
          </h2>
          <p className="mt-4 max-w-[54ch] text-lg text-ink-soft">
            O treinamento percorre os componentes que determinam a qualidade da
            aplicação — e como ler cada um deles na prática, independentemente
            da marca do seu equipamento.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {techChips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink/10 px-4 py-2 font-mono text-xs text-ink-soft transition-colors hover:border-graphite hover:text-ink"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Oferta ---------- */
export function Offer() {
  const includes = [
    "Seis módulos técnicos, dos fundamentos à inspeção",
    "Vídeo-aulas objetivas, no seu ritmo",
    "Guias técnicos e checklists de regulagem e inspeção",
    "Acesso para consultar no escritório e no campo",
  ];
  return (
    <section id="oferta" className="bg-deep-900 py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6 md:px-14">
        <div
          data-reveal
          className="grid overflow-hidden rounded-md border border-energy/20 bg-deep-700 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="p-7 md:p-14">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Domínio completo da pulverização, em um só programa.
            </h2>
            <ul className="mt-6 grid gap-3">
              {includes.map((it) => (
                <li
                  key={it}
                  className="grid grid-cols-[auto_1fr] gap-3 text-[#9fb0a2]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#b9dc59"
                    strokeWidth="2"
                  >
                    <path d="M4 10l4 4 8-9" />
                  </svg>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid content-center gap-4 border-t border-energy/20 bg-deep-900/40 p-7 md:border-l md:border-t-0 md:p-14">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#9fb0a2]">
              Investimento
            </span>
            <div className="font-display text-5xl leading-none">
              R$ —
              <span className="mt-2 block font-body text-base text-[#9fb0a2]">
                Preço a definir. Entre em contato para liberar sua inscrição.
              </span>
            </div>
            <Button href="#contato" className="mt-2 justify-center">
              Garantir meu acesso
            </Button>
            <p className="text-xs text-[#9fb0a2]">
              Sem informações fictícias: condições comerciais, prazos e formas
              de pagamento são confirmados no momento da inscrição.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section id="faq" className="bg-sand py-24 text-ink md:py-32">
      <div className="mx-auto max-w-shell px-6 md:px-14">
        <div data-reveal className="max-w-[64ch]">
          <Kicker className="!text-graphite">Perguntas frequentes</Kicker>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            O que costumam perguntar antes de começar.
          </h2>
        </div>
        <div className="mt-16 max-w-[860px]">
          {faqs.map((f) => (
            <details
              key={f.q}
              data-reveal
              className="group border-t border-ink/10 last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-display text-lg font-semibold">
                {f.q}
                <span className="grid h-[30px] w-[30px] flex-none place-items-center rounded-full border border-ink/10 transition-transform duration-300 group-open:rotate-45 group-open:border-graphite">
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="max-w-[70ch] pb-7 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */
export function Finale() {
  return (
    <section id="contato" className="bg-deep-900 py-28 text-center md:py-36">
      <div className="mx-auto grid max-w-shell justify-items-center gap-6 px-6 md:px-14">
        <Kicker>PULSAR</Kicker>
        <h2
          data-reveal
          className="max-w-[18ch] font-display text-[clamp(2.4rem,1.8rem+4vw,5.5rem)] font-semibold"
        >
          A próxima aplicação pode ser{" "}
          <span className="text-energy">a mais precisa</span> que você já fez.
        </h2>
        <p data-reveal className="max-w-[54ch] text-lg text-[#9fb0a2]">
          Leve critério técnico para dentro da cabine. Comece o domínio da
          pulverização pela PULSAR.
        </p>
        <div data-reveal>
          <Button href="#oferta" className="px-8 py-4">
            Quero começar
          </Button>
        </div>
      </div>
    </section>
  );
}
