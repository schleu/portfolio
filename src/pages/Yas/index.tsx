import { useState, useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

interface AreaCard {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  text: string;
  author: string;
  city: string;
}

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface FormState {
  nome: string;
  telefone: string;
  area: string;
  mensagem: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#areas" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const AREAS: AreaCard[] = [
  {
    icon: "⚖️",
    title: "Direito de Família",
    description:
      "Divórcio, guarda de filhos, pensão alimentícia e inventários tratados com sensibilidade e rigor técnico.",
  },
  {
    icon: "🏢",
    title: "Direito Empresarial",
    description:
      "Constituição de empresas, contratos, fusões e aquisições, recuperação judicial e proteção patrimonial.",
  },
  {
    icon: "👷",
    title: "Direito Trabalhista",
    description:
      "Defesa de empresas e trabalhadores em ações trabalhistas, rescisões e acordos coletivos.",
  },
  {
    icon: "🏠",
    title: "Direito Imobiliário",
    description:
      "Compra, venda, locação, regularização de imóveis e resolução de conflitos condominiais.",
  },
  {
    icon: "🛡️",
    title: "Direito do Consumidor",
    description:
      "Indenizações, cobranças indevidas, vícios de produto e responsabilidade civil.",
  },
  {
    icon: "📋",
    title: "Consultoria Jurídica",
    description:
      "Assessoria preventiva para pessoas físicas e jurídicas, contratos e compliance empresarial.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    text: "A Dra. Yasmin foi fundamental no processo de divórcio da minha família. Profissional, empática e extremamente competente. Conseguiu a guarda compartilhada em tempo recorde.",
    author: "Mariana Ferreira",
    city: "São Paulo, SP",
  },
  {
    text: "Contratei para assessorar minha empresa numa disputa trabalhista difícil. A estratégia dela foi impecável. Saímos vitoriosos e a empresa ficou protegida. Recomendo muito!",
    author: "Carlos Andrade",
    city: "Campinas, SP",
  },
  {
    text: "Precisava regularizar meu imóvel que estava em situação complicada há anos. Em poucos meses, a Dra. Yasmin resolveu tudo. Atendimento humano e resultado extraordinário.",
    author: "Juliana Costa",
    city: "Santo André, SP",
  },
];

const GALLERY: GalleryItem[] = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0RRWRof7chky4zv0GerL2sZ4XG3PVlIyPo2vVtSTbiA&s=10",
    alt: "Obelisco de Buenos Aires",
    caption: "Buenos Aires",
    tall: true,
  },
  {
    src: "https://f.i.uol.com.br/fotografia/2025/09/04/175703713068ba424a788a8_1757037130_3x2_md.jpg",
    alt: "Argentina Futebol",
    caption: "La Selección",
  },
  {
    src: "https://s2-ge.glbimg.com/ZxEKDU819FwkL29FlZLJxCtrmv4=/0x0:5684x3622/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/W/9/q1Aw1wTEKsv8QNEOshPQ/2022-12-18t150231z-1238266206-up1eici15s4em-rtrmadp-3-soccer-worldcup-arg-fra-report.jpg",
    alt: "Patagônia Argentina",
    caption: "Patagônia",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2G-n-bt2XmKjVt2mzxLC0Oj_KzbvBtaov9Q4zTRK_w&s=10",
    alt: "Cultura Argentina",
    caption: "Cultura & Garra",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyBeOHXkK2ZfcS47r7saIxSyMaDEuI1tyZCAwiuB2MQ&s=10",
    alt: "Tango Buenos Aires",
    caption: "El Tango",
  },
];

const CONTACT_INFO: ContactInfo[] = [
  { icon: "📱", label: "WhatsApp", value: "(11) 99999-9999" },
  { icon: "📧", label: "E-mail", value: "contato@yasminarrays.adv.br" },
  {
    icon: "📍",
    label: "Endereço",
    value: "R. Dr. Mário Malzoni, 899 - Lagoa Seca, Juazeiro do Norte - CE, 63040-680",
  },
  {
    icon: "🕐",
    label: "Horário",
    value: "Seg, Ter e Qui: 19h às 22h | Dom: 9h às 13h",
  },
];

const WHATSAPP_NUMBER = "5511999999999";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// ─── Section: Navbar ─────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 h-16 transition-all duration-300 border-b-2 border-yellow-500 ${
        scrolled
          ? "bg-[#1A2B4A]/98 backdrop-blur-md shadow-xl"
          : "bg-[#1A2B4A]"
      }`}
    >
      {/* Logo */}
      <div>
        <p className="font-serif text-white font-semibold text-base leading-tight tracking-wide">
          Yasmin Arrays
        </p>
        <p className="text-[10px] font-light text-sky-300 tracking-[0.2em] uppercase">
          Advocacia & Consultoria Jurídica
        </p>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <button
              onClick={() => scrollTo(item.href)}
              className="text-white/75 hover:text-yellow-400 text-xs uppercase tracking-widest font-medium transition-colors duration-200 bg-transparent border-0 cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => scrollTo("#contato")}
            className="bg-yellow-500 hover:bg-yellow-400 text-[#1A2B4A] text-xs uppercase tracking-widest font-bold px-5 py-2 rounded-sm transition-colors duration-200 cursor-pointer border-0"
          >
            Consulta Gratuita
          </button>
        </li>
      </ul>
    </nav>
  );
};

// ─── Section: Hero ───────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-[#1A2B4A] overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage:
          "url('https://chatgpt.com/backend-api/estuary/content?id=file_000000002238720e9ca7d67b3ee96a4b&ts=495427&p=fs&cid=1&sig=4c48ca93d59725a1ebaf5be921f66a70cfae566fe0383bb543115c23906d6a4c&v=0  ')",
      }}
    />

    {/* Diagonal celeste stripe */}
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-sky-400 opacity-10"
        style={{ transform: "skewX(-12deg) translateX(10%)" }}
      />
    </div>

    {/* Bottom border gradient */}
    <div
      className="absolute bottom-0 left-0 right-0 h-1"
      style={{
        background:
          "linear-gradient(90deg, #74ACDF, #C9A227, #74ACDF)",
      }}
    />

    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-7 h-0.5 bg-yellow-500" />
          <span className="text-sky-300 text-[11px] font-bold uppercase tracking-[0.22em]">
            Advocacia de Excelência
          </span>
        </div>

        <h1 className="font-serif text-white leading-[1.06] mb-3">
          <span className="block text-5xl lg:text-6xl font-bold">Dra. Yasmin</span>
          <span className="block text-5xl lg:text-6xl font-bold italic text-sky-400">
            Arrays
          </span>
        </h1>

        <p className="font-serif text-yellow-400 italic text-lg mb-6 tracking-wide">
          Advogada · OAB/CE 000.000
        </p>

        <p className="text-white/70 leading-relaxed text-base max-w-md mb-8">
          Defesa firme dos seus direitos com a paixão e determinação que só os
          verdadeiros campeões conhecem. Do direito de família ao empresarial,
          sua causa é nossa causa.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("#contato")}
            className="bg-yellow-500 hover:bg-yellow-400 text-[#1A2B4A] text-xs uppercase tracking-widest font-bold px-7 py-3.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 border-0 cursor-pointer"
          >
            Fale Conosco
          </button>
          <button
            onClick={() => scrollTo("#areas")}
            className="border border-white/30 hover:border-sky-400 text-white hover:text-sky-400 text-xs uppercase tracking-widest font-medium px-7 py-3.5 rounded-sm transition-all duration-200 bg-transparent cursor-pointer"
          >
            Nossas Áreas
          </button>
        </div>
      </div>

      {/* Image card */}
      <div className="hidden lg:block relative">
        <div className="relative rounded-sm overflow-hidden border border-white/10 aspect-[3/4]">
          <img
            src="yas.png"
            alt="Buenos Aires"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          {/* Badge */}
          <div className="absolute bottom-5 left-5 bg-[#1A2B4A] border border-yellow-500 px-4 py-3 rounded-sm">
            <span className="block font-serif text-white font-semibold text-base">
              Dra. Yasmin Arrays
            </span>
            <span className="block text-sky-300 text-[10px] uppercase tracking-widest mt-0.5">
              Advocacia & Consultoria
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section: Ribbon ─────────────────────────────────────────────────────────

const Ribbon = () => (
  <div className="bg-sky-400 py-3.5 px-6 flex flex-wrap justify-center gap-6 lg:gap-10">
    {[
      "Direito de Família",
      "Direito Empresarial",
      "Direito Trabalhista",
      "Direito Civil",
      "Consultoria Jurídica",
    ].map((item) => (
      <div key={item} className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 block flex-shrink-0" />
        <span className="text-[#1A2B4A] text-xs font-bold uppercase tracking-widest">
          {item}
        </span>
      </div>
    ))}
  </div>
);

// ─── Section: Sobre ──────────────────────────────────────────────────────────

const Sobre = () => (
  <section id="sobre" className="py-24 bg-[#F8F6F0] px-6 lg:px-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Images */}
      <div className="relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=700&q=85"
          alt="Seleção Argentina"
          className="w-full aspect-[4/5] object-cover rounded-sm"
        />
        <img
          src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=85"
          alt="Patagônia Argentina"
          className="absolute -bottom-8 -right-8 w-5/12 aspect-square object-cover rounded-sm border-4 border-[#F8F6F0]"
        />
        {/* Flag stripes */}
        <div className="absolute top-5 left-5 flex flex-col gap-0 overflow-hidden rounded-sm">
          <div className="w-10 h-2.5 bg-sky-400" />
          <div className="w-10 h-2.5 bg-white" />
          <div className="w-10 h-2.5 bg-sky-400" />
        </div>
      </div>

      {/* Text */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sky-700 text-[10px] font-bold uppercase tracking-[0.22em]">
            Conheça a Advogada
          </span>
          <span className="block w-8 h-0.5 bg-yellow-500" />
        </div>

        <h2 className="font-serif text-[#1A2B4A] text-4xl lg:text-5xl font-bold leading-tight mb-5">
          Comprometida com{" "}
          <em className="text-sky-600 not-italic italic">sua vitória</em>
        </h2>

        <p className="text-[#3d4a62] leading-relaxed mb-4">
          A Dra. Yasmin Arrays acredita que o direito é a ferramenta mais
          poderosa de transformação social. Com a mesma garra e determinação da
          Seleção Argentina — tricampeã mundial —, ela luta por cada cliente com
          dedicação total e estratégia apurada.
        </p>
        <p className="text-[#3d4a62] leading-relaxed mb-8">
          Formada em Direito pela USP com especialização em Direito Empresarial
          Internacional, Yasmin construiu uma trajetória de vitórias que se
          traduz em tranquilidade e segurança para seus clientes.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A2B4A]/10">
          {[
            { num: "12+", label: "Anos de Experiência" },
            { num: "500+", label: "Casos Concluídos" },
            { num: "97%", label: "Taxa de Êxito" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="font-serif text-[#1A2B4A] text-3xl font-bold leading-none">
                {num}
              </p>
              <p className="text-[#6b7a95] text-[10px] uppercase tracking-widest mt-1.5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Section: Áreas ──────────────────────────────────────────────────────────

const Areas = () => (
  <section id="areas" className="py-24 bg-white px-6 lg:px-10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sky-700 text-[10px] font-bold uppercase tracking-[0.24em] mb-2">
          Especialidades
        </p>
        <h2 className="font-serif text-[#1A2B4A] text-4xl lg:text-5xl font-bold mb-4">
          Áreas de <em className="italic text-sky-600">Atuação</em>
        </h2>
        <p className="text-[#3d4a62] max-w-xl mx-auto leading-relaxed">
          Atendimento completo com foco em resultados, onde cada estratégia é
          desenvolvida de forma personalizada para o seu caso.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "1.5px", background: "rgba(26,43,74,0.08)" }}
      >
        {AREAS.map((area) => (
          <div
            key={area.title}
            className="bg-white p-10 group hover:bg-[#1A2B4A] transition-colors duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-sm bg-sky-100 group-hover:bg-yellow-500 flex items-center justify-center text-xl mb-5 transition-colors duration-300">
              {area.icon}
            </div>
            <h3 className="font-serif text-[#1A2B4A] group-hover:text-white text-lg font-semibold mb-3 transition-colors duration-300">
              {area.title}
            </h3>
            <p className="text-[#6b7a95] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section: Galeria Argentina ──────────────────────────────────────────────

const Argentina = () => (
  <section className="py-20 bg-[#1A2B4A] px-6 lg:px-10 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-white to-sky-400" />
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-white to-sky-400" />

    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.24em] mb-2">
          Inspiração & Identidade
        </p>
        <h2 className="font-serif text-white text-4xl lg:text-5xl font-bold mb-4">
          Paixão pela <em className="italic text-sky-400">Argentina</em>
        </h2>
        <p className="text-white/55 max-w-lg mx-auto leading-relaxed">
          Como os Campeões do Mundo, a Dra. Yasmin Arrays acredita que
          excelência, garra e trabalho em equipe são os ingredientes de qualquer
          grande vitória — na vida e no direito.
        </p>
      </div>

      {/* Mosaic */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5">
        {GALLERY.map((item) => (
          <div
            key={item.alt}
            className={`relative overflow-hidden rounded-sm group ${
              item.tall ? "row-span-2" : ""
            }`}
            style={{ minHeight: item.tall ? "440px" : "212px" }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {item.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section: Depoimentos ────────────────────────────────────────────────────

const Depoimentos = () => (
  <section id="depoimentos" className="py-24 bg-[#F8F6F0] px-6 lg:px-10">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sky-700 text-[10px] font-bold uppercase tracking-[0.22em]">
            Depoimentos
          </span>
          <span className="block w-8 h-0.5 bg-yellow-500" />
        </div>
        <h2 className="font-serif text-[#1A2B4A] text-4xl font-bold">
          O que dizem{" "}
          <em className="italic text-sky-600">nossos clientes</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="bg-white border-l-4 border-sky-400 p-7 rounded-sm"
          >
            <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
            <p className="font-serif text-4xl text-sky-100 leading-none mb-1">
              "
            </p>
            <p className="text-[#3d4a62] text-sm leading-relaxed italic mb-5">
              {t.text}
            </p>
            <p className="text-[#1A2B4A] text-xs font-bold uppercase tracking-widest">
              {t.author}
            </p>
            <p className="text-[#6b7a95] text-xs mt-0.5">{t.city}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section: Contato ────────────────────────────────────────────────────────

const Contato = () => {
  const [form, setForm] = useState<FormState>({
    nome: "",
    telefone: "",
    area: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    if (!form.nome.trim()) {
      alert("Por favor, informe seu nome.");
      return;
    }

    const areaLabel =
      form.area
        ? {
            familia: "Direito de Família",
            empresarial: "Direito Empresarial",
            trabalhista: "Direito Trabalhista",
            imobiliario: "Direito Imobiliário",
            consumidor: "Direito do Consumidor",
            consultoria: "Consultoria Jurídica",
          }[form.area] ?? ""
        : "";

    let text = `Olá, Dra. Yasmin! 👋\n\nMeu nome é *${form.nome}*`;
    if (form.telefone) text += `\nWhatsApp: ${form.telefone}`;
    if (areaLabel) text += `\nÁrea: *${areaLabel}*`;
    if (form.mensagem) text += `\n\nMensagem: ${form.mensagem}`;
    text += "\n\nGostaria de agendar uma consulta. 🇦🇷⚖️";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-24 bg-white px-6 lg:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sky-700 text-[10px] font-bold uppercase tracking-[0.22em]">
              Fale Conosco
            </span>
            <span className="block w-8 h-0.5 bg-yellow-500" />
          </div>
          <h2 className="font-serif text-[#1A2B4A] text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Agende sua{" "}
            <em className="italic text-sky-600">Consulta Gratuita</em>
          </h2>
          <p className="text-[#3d4a62] leading-relaxed mb-10">
            Dê o primeiro passo para resolver sua questão jurídica. Nossa
            primeira conversa é sem compromisso e totalmente gratuita.
          </p>

          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-50 rounded-sm flex items-center justify-center text-lg flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b7a95] mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-[#1A2B4A] font-medium text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="bg-[#1A2B4A] rounded-sm p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500" />

          <h3 className="font-serif text-white text-2xl font-bold mb-1">
            Envie sua mensagem
          </h3>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            Preencha abaixo e entraremos em contato via WhatsApp em até 2 horas
            úteis.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">
                Nome completo
              </label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="João da Silva"
                className="w-full bg-white/8 border border-white/12 rounded-sm px-3.5 py-2.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-sky-400 transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">
                WhatsApp
              </label>
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full border border-white/12 rounded-sm px-3.5 py-2.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-sky-400 transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">
                Área jurídica
              </label>
              <select
                name="area"
                value={form.area}
                onChange={handleChange}
                className="w-full border border-white/12 rounded-sm px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                style={{ backgroundColor: "#1A2B4A" }}
              >
                <option value="">Selecione a área...</option>
                <option value="familia">Direito de Família</option>
                <option value="empresarial">Direito Empresarial</option>
                <option value="trabalhista">Direito Trabalhista</option>
                <option value="imobiliario">Direito Imobiliário</option>
                <option value="consumidor">Direito do Consumidor</option>
                <option value="consultoria">Consultoria Jurídica</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">
                Descreva sua situação
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Conte um pouco sobre o que você precisa..."
                rows={4}
                className="w-full border border-white/12 rounded-sm px-3.5 py-2.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5 border-0 cursor-pointer mt-1"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enviar pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Section: Footer ─────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="bg-[#1A2B4A] border-t-2 border-yellow-500 py-6 px-6 lg:px-10">
    <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="font-serif text-white font-semibold">Dra. Yasmin Arrays</p>
        <p className="text-[10px] font-light text-sky-300 tracking-[0.18em] uppercase mt-0.5">
          Advocacia & Consultoria Jurídica
        </p>
      </div>

      {/* Bandeira Argentina */}
      <div className="flex flex-col overflow-hidden rounded-sm">
        <div className="w-14 h-2 bg-sky-400" />
        <div className="w-14 h-2 bg-white" />
        <div className="w-14 h-2 bg-sky-400" />
      </div>

      <p className="text-white/35 text-xs text-right">
        © 2024 Dra. Yasmin Arrays · OAB/SP 000.000
        <br />
        Todos os direitos reservados
      </p>
    </div>
  </footer>
);

// ─── WhatsApp FAB ────────────────────────────────────────────────────────────

const WhatsAppFAB = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noreferrer"
    title="Fale pelo WhatsApp"
    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
    style={{
      boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
      animation: "wapulse 2.4s ease-in-out infinite",
    }}
  >
    <WhatsAppIcon className="w-7 h-7" />
    <style>{`
      @keyframes wapulse {
        0%,100%{box-shadow:0 4px 20px rgba(37,211,102,.4)}
        50%{box-shadow:0 4px 28px rgba(37,211,102,.7),0 0 0 8px rgba(37,211,102,.12)}
      }
    `}</style>
  </a>
);

// ─── Root Component ──────────────────────────────────────────────────────────

export default function YasminArrays() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Ribbon />
      <Sobre />
      <Areas />
      <Argentina />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}