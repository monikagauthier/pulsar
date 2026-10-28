import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { HeroArt } from "@/components/ui/HeroArt";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-deep-900 pb-16 pt-[120px]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <HeroArt />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 15%, rgba(16,39,29,0) 0%, rgba(11,28,21,0.55) 62%, rgba(11,28,21,0.94) 100%), linear-gradient(90deg, rgba(11,28,21,0.95) 0%, rgba(11,28,21,0.6) 42%, rgba(11,28,21,0.1) 100%)",
        }}
      />

      <div className="relative z-[2] mx-auto grid w-full max-w-shell gap-5 px-6 md:px-14">
        <Kicker>Pulverização Agrícola · Tecnologia de Aplicação</Kicker>
        <h1
          id="hero-title"
          className="max-w-[16ch] font-display text-[clamp(2.6rem,1.9rem+5vw,6.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
        >
          Precisão não é
          <br />
          <span className="text-energy">sorte.</span>{" "}
          <span className="text-transparent [-webkit-text-stroke:1.5px_#9fb0a2]">
            É técnica.
          </span>
        </h1>
        <p className="max-w-[46ch] text-lg leading-[1.5] text-[#9fb0a2]">
          PULSAR é o treinamento que transforma operadores em aplicadores de
          alta precisão — da regulagem do pulverizador à leitura das condições
          de campo.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <Button href="#oferta">Dominar a pulverização</Button>
          <Button href="#treinamento" variant="ghost">
            Ver o treinamento
          </Button>
        </div>
      </div>
    </section>
  );
}
