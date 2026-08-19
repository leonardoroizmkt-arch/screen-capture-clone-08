import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-agro.jpg";

const WHATSAPP = "https://wa.me/+5562982184938";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advogado do Agronegócio em Goiânia | Caldas & Beghini" },
      {
        name: "description",
        content:
          "Assessoria jurídica para produtores rurais em Goiás, Mato Grosso e DF. Usucapião rural, holding rural, dívida bancária e recuperação judicial.",
      },
      {
        property: "og:title",
        content: "Advogado do Agronegócio em Goiânia | Caldas & Beghini",
      },
      {
        property: "og:description",
        content:
          "Direito para quem vive da terra. Regularização de terra, proteção de patrimônio e defesa contra dívida bancária em GO, MT e DF.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.caldasebeghini.com.br/" }],
  }),
  component: Home,
});

const navLinks = [
  { href: "#areas", label: "Áreas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Como trabalhamos" },
  { href: "#faq", label: "Dúvidas" },
];

const areas = [
  {
    href: "/usucapiao-rural",
    title: "Usucapião e regularização de terra",
    text: "Matrícula travada, posse antiga sem documento, área que não fecha no georreferenciamento. Regularizamos para que a terra possa ser vendida, financiada ou herdada.",
    path: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6",
  },
  {
    href: "/holding-rural",
    title: "Holding rural e sucessão",
    text: "Estrutura societária para proteger o patrimônio da família, reduzir carga tributária na transferência e evitar que o inventário paralise a produção.",
    path: "M12 3v18M5 8h14M7 8v13M17 8v13M3 21h18",
  },
  {
    href: "/divida-rural-e-banco",
    title: "Dívida rural e banco",
    text: "Cédula de produto rural, execução de crédito rural, penhora de safra. Renegociação, defesa e revisão de contratos abusivos.",
    path: "M3 10l9-6 9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18",
  },
  {
    href: "/recuperacao-judicial-produtor-rural",
    title: "Recuperação judicial do produtor",
    text: "Quando a dívida passou do ponto de renegociar. Suspensão de execuções e plano de pagamento com proteção legal da atividade.",
    path: "M12 3v18M3 12h18M7 7l10 10M17 7L7 17",
  },
  {
    href: "/tributario-agro",
    title: "Tributário do agro",
    text: "Funrural, ITR, regime de tributação da pessoa física versus jurídica. Planejamento que reduz imposto dentro da lei.",
    path: "M8 7h8M8 11h8M8 15h4",
  },
  {
    href: "/trabalhista-rural",
    title: "Trabalhista rural",
    text: "Contratação por safra, alojamento, NR-31, terceirização. Prevenção de passivo antes da fiscalização chegar.",
    path: "M16 21v-2a4 4 0 00-8 0v2M16 7a4 4 0 11-8 0 4 4 0 018 0",
  },
];

const steps = [
  {
    n: "01",
    title: "Conversa inicial",
    text: "Você explica a situação. Nós dizemos se há caso, qual o caminho e qual o risco de não fazer nada.",
  },
  {
    n: "02",
    title: "Diagnóstico documental",
    text: "Analisamos matrícula, contratos, dívidas e estrutura societária antes de propor qualquer estratégia.",
  },
  {
    n: "03",
    title: "Proposta com escopo e prazo",
    text: "Honorários e etapas definidos por escrito. Sem surpresa no meio do caminho.",
  },
  {
    n: "04",
    title: "Execução e acompanhamento",
    text: "Você recebe atualização periódica, em linguagem que não exige tradução.",
  },
];

const faqs = [
  {
    q: "Vocês atendem produtor rural fora de Goiânia?",
    a: "Sim. Atuamos em Goiás, Mato Grosso e Distrito Federal, com reuniões presenciais na fazenda ou por vídeo. Boa parte do trabalho de regularização e planejamento é feita à distância, com deslocamento apenas quando o caso exige.",
  },
  {
    q: "Quanto tempo demora uma usucapião rural?",
    a: "Depende da via. A usucapião extrajudicial, feita em cartório, pode se resolver em meses quando a documentação está completa e não há oposição. A judicial costuma levar anos. O primeiro passo é analisar a matrícula e a cadeia possessória para saber qual via é possível no seu caso.",
  },
  {
    q: "Holding rural vale a pena para propriedade pequena?",
    a: "Nem sempre. A estrutura tem custo de constituição e de manutenção, e existe ponto abaixo do qual não se paga. Analisamos patrimônio, faturamento, número de herdeiros e regime tributário antes de recomendar. Se não fizer sentido, dizemos.",
  },
  {
    q: "O banco já executou a cédula. Ainda dá para fazer alguma coisa?",
    a: "Sim. Execução em andamento não encerra a defesa. Há caminhos de embargos, revisão de encargos, renegociação e, em situação mais grave, recuperação judicial do produtor rural, que suspende execuções. Quanto antes você procurar, mais opções existem.",
  },
  {
    q: "Quanto custa a consulta?",
    a: "Os honorários são definidos por caso, conforme a Tabela da OAB/GO e a complexidade envolvida. A conversa inicial serve para entender a situação e apresentar a proposta.",
  },
];

const inputClass =
  "w-full bg-night border border-sand/15 rounded px-4 py-3 text-sand placeholder:text-sand/40 focus:border-gold focus:outline-none transition";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-background text-night antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-night/95 backdrop-blur border-b border-sand/10">
        <div className="mx-auto max-w-7xl px-5 h-20 flex items-center justify-between gap-6">
          <a href="#top" className="text-sand font-display text-lg leading-tight">
            CALDAS <span className="text-gold">&amp;</span> BEGHINI
            <span className="block text-[10px] tracking-[0.28em] text-sand/50 font-sans">
              ADVOGADOS ASSOCIADOS
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-sand/80">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-gold transition">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP}
            className="hidden sm:inline-flex items-center gap-2 bg-gold text-night font-semibold text-sm px-5 py-3 rounded hover:bg-gold/90 transition"
          >
            Falar no WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden text-sand"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-sand/10 bg-night px-5 py-4 space-y-3 text-sand/85 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="block" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP} className="block text-gold font-semibold">
              Falar no WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="text-sand bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, oklch(0.194 0.03 257.5 / 0.96) 0%, oklch(0.194 0.03 257.5 / 0.85) 45%, oklch(0.194 0.03 257.5 / 0.55) 100%), url(${heroImg})`,
        }}
      >
        <div className="mx-auto max-w-7xl px-5 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-gold text-xs tracking-[0.3em] mb-6">
              GOIÁS · MATO GROSSO · DISTRITO FEDERAL
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
              O escritorio que entende de safra, não só de processo.
            </h1>
            <p className="text-lg text-sand/80 leading-relaxed mb-9 max-w-xl">
              Assessoria jurídica para produtores rurais e empresas do agronegócio. Regularização de
              terra, proteção de patrimônio e defesa contra dívida bancária.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP}
                className="bg-gold text-night font-semibold px-7 py-4 rounded text-center hover:bg-gold/90 transition"
              >
                Falar com um advogado agora
              </a>
              <a
                href="#areas"
                className="border border-sand/30 text-sand px-7 py-4 rounded text-center hover:border-gold hover:text-gold transition"
              >
                Ver áreas de atuação
              </a>
            </div>
            <p className="text-sm text-sand/50 mt-5">Retorno em até 1 dia útil.</p>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <div className="rule mb-7" />
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">
            Terra irregular, dívida rolando e patrimônio exposto custam mais caro que advogado.
          </h2>
          <div className="space-y-5 text-lg text-night/75 leading-relaxed">
            <p>
              A maior parte dos problemas jurídicos no campo não aparece de uma vez. Aparece quando a
              matrícula trava a venda da fazenda. Quando o banco executa a cédula no meio da safra.
              Quando o inventário divide a terra entre seis herdeiros e paralisa a produção por anos.
            </p>
            <p className="text-night font-medium">
              Nenhum desses problemas nasce no dia em que estoura. Todos podiam ter sido resolvidos
              antes, por uma fração do custo.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="rule mb-7" />
            <h2 className="font-display text-3xl md:text-4xl mb-4">Onde atuamos</h2>
            <p className="text-lg text-night/65">
              Cada área abaixo tem uma página própria, com prazos, requisitos e documentos
              necessários.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="group block border border-night/10 rounded-lg p-7 hover:border-gold hover:shadow-lg transition"
              >
                <div className="text-gold mb-4">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d={a.path} />
                  </svg>
                </div>
                <h3 className="font-display text-xl mb-3 group-hover:text-gold transition">
                  {a.title}
                </h3>
                <p className="text-night/65 leading-relaxed">{a.text}</p>
                <span className="inline-block mt-5 text-sm font-semibold text-gold">
                  Ver página →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-night text-sand">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28 grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="rule mb-7" />
            <h2 className="font-display text-3xl md:text-4xl mb-6">Quem atende você</h2>
            <p className="text-lg text-sand/75 leading-relaxed mb-5">
              Caldas &amp; Beghini é um escritório de advocacia com sede em Goiânia e atuação em
              Goiás, Mato Grosso e Distrito Federal, conduzido por{" "}
              <strong className="text-sand">Dr. Jorge Felipe Caldas de Oliveira</strong> e{" "}
              <strong className="text-sand">Dr. David Pessoa Beghini Siqueira</strong>.
            </p>
            <p className="text-lg text-sand/75 leading-relaxed">
              Trabalhamos com produtores rurais, empresas do agronegócio e famílias que precisam
              organizar patrimônio antes que ele vire disputa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-sand/10 rounded-lg overflow-hidden">
          {[
            ["10", "anos de atuação"],
            ["+ de 130", "fazendas regularizadas"],
            ["179 mil", "hectares sob assessoria"],
            ["3", "estados: GO, MT e DF"],
          ].map(([n, label]) => (
              <div key={label} className="bg-deep p-8">
                <p className="font-display text-4xl text-gold mb-2">{n}</p>
                <p className="text-sm text-sand/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="bg-sand">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
          <div className="rule mb-7" />
          <h2 className="font-display text-3xl md:text-4xl mb-14">Como trabalhamos</h2>
          <ol className="space-y-10">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6">
                <span className="font-display text-3xl text-gold shrink-0 w-12">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl mb-2">{s.title}</h3>
                  <p className="text-night/70 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <div className="rule mb-7" />
          <h2 className="font-display text-3xl md:text-4xl mb-12">Perguntas frequentes</h2>

          <div className="divide-y divide-night/10 border-y border-night/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none font-display text-lg pr-4">
                  {f.q}
                  <span className="text-gold text-2xl group-open:rotate-45 transition shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-night/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-deep text-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 grid gap-14 lg:grid-cols-2">
          <div>
            <div className="rule mb-7" />
            <h2 className="font-display text-3xl md:text-4xl mb-5">Traga o seu caso.</h2>
            <p className="text-lg text-sand/75 leading-relaxed mb-9">
              Descreva a situação em poucas linhas. Retornamos em até 1 dia útil com uma leitura
              inicial e o próximo passo.
            </p>
            <div className="space-y-4 text-sand/70">
              <p>
                <span className="text-gold font-semibold">WhatsApp</span>
                <br />
                62 98218-4938
              </p>
              <p>
                <span className="text-gold font-semibold">E-mail</span>
                <br />
                caldasebeghini@gmail.com
              </p>
              <p>
                <span className="text-gold font-semibold">Escritório</span>
                <br />
                Rua Brasil, n.º 50, Sala 2-H
                <br />
                Setor Bueno, Goiânia - GO, CEP 74.215-070
              </p>
            </div>
          </div>

          <form
            className="bg-night/50 border border-sand/10 rounded-lg p-7 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" className={inputClass} />
              <input type="tel" placeholder="WhatsApp" className={inputClass} />
            </div>
            <input type="text" placeholder="Cidade / Estado" className={inputClass} />
            <select className={inputClass + " text-sand/70"} defaultValue="">
              <option value="">Sobre o que você precisa falar?</option>
              <option>Usucapião / regularização de terra</option>
              <option>Holding rural e sucessão</option>
              <option>Dívida rural e banco</option>
              <option>Recuperação judicial</option>
              <option>Tributário do agro</option>
              <option>Trabalhista rural</option>
              <option>Outro assunto</option>
            </select>
            <textarea rows={5} placeholder="Descreva sua situação" className={inputClass} />
            <label className="flex gap-3 text-sm text-sand/60">
              <input type="checkbox" className="mt-1 shrink-0" />
              <span>
                Autorizo o contato do escritório e o tratamento dos meus dados para essa finalidade,
                conforme a Política de Privacidade.
              </span>
            </label>
            <button
              type="submit"
              className="w-full bg-gold text-night font-semibold py-4 rounded hover:bg-gold/90 transition"
            >
              Enviar para análise
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-night text-sand/60 border-t border-sand/10">
        <div className="mx-auto max-w-7xl px-5 py-14 grid gap-10 md:grid-cols-3 text-sm">
          <div>
            <p className="font-display text-sand text-lg mb-1">
              CALDAS <span className="text-gold">&amp;</span> BEGHINI
            </p>
            <p className="text-xs tracking-[0.25em] text-sand/40 mb-5">ADVOGADOS ASSOCIADOS</p>
            <p className="text-gold">Direito para quem vive da terra.</p>
          </div>
          <div>
            <p className="text-sand font-semibold mb-4">Áreas</p>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a.href}>
                  <a href={a.href} className="hover:text-gold transition">
                    {a.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sand font-semibold mb-4">Contato</p>
            <p className="mb-2">
              Rua Brasil, n.º 50, Sala 2-H
              <br />
              Setor Bueno, Goiânia - GO
              <br />
              CEP 74.215-070
            </p>
            <p className="mb-2">Atendimento em GO, MT e DF.</p>
            <p>
              <a
                href="https://www.instagram.com/caldasebeghini"
                className="hover:text-gold transition"
              >
                @caldasebeghini
              </a>
            </p>
            <p className="mt-2">OAB/GO [inserir nº da sociedade]</p>
          </div>
        </div>
        <div className="border-t border-sand/10">
          <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-sand/40 space-y-2">
            <p>
              Este site tem caráter meramente informativo e não constitui consulta jurídica, em
              observância ao Provimento 205/2021 da OAB.
            </p>
            <p>
              © {new Date().getFullYear()} Caldas &amp; Beghini, Advogados Associados. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-sand w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.1L2 22l5.05-1.32A10 10 0 1012 2z" />
        </svg>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Caldas & Beghini, Advogados Associados",
            description:
              "Advocacia para produtores rurais e empresas do agronegócio em Goiás, Mato Grosso e Distrito Federal.",
            areaServed: ["Goiás", "Mato Grosso", "Distrito Federal"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Brasil, n.º 50, Sala 2-H, Setor Bueno",
              addressLocality: "Goiânia",
              addressRegion: "GO",
              postalCode: "74215-070",
              addressCountry: "BR",
            },
            sameAs: ["https://www.instagram.com/caldasebeghini"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
