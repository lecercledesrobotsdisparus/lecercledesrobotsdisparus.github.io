import { useEffect, useState } from "react";
import {
  audiences,
  helpActions,
  impactStats,
  missionCards,
} from "../content/landingContent";

const CONTACT_EMAIL = "lecercledesrobotsdisparus@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/le-cercle-des-robots-disparus/";
const WEBSITE_URL = "http://lecercledesrobotsdisparus.org/";

function IconRobot(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="5" y="8" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 4v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9.5" cy="13" r="1.3" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1.3" fill="currentColor" />
      <path d="M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconSpark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 3 1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="m18.5 14 .9 2 .1.1 2 .9-2 .9-.1.1-.9 2-.9-2-.1-.1-2-.9 2-.9.1-.1.9-2Z" fill="currentColor" />
    </svg>
  );
}

function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20s-6.5-3.9-8.6-8a5 5 0 0 1 8.2-5.4L12 7.1l.4-.5A5 5 0 0 1 20.6 12C18.5 16.1 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTools(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m14.5 6.5 3 3-8 8-3.5.5.5-3.5 8-8Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m13 8 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m3 21 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconSchool(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m3 9 9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconHospital(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconPalette(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4a8 8 0 1 0 0 16h1.5a2.5 2.5 0 0 0 0-5H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8.2" cy="10" r="1.2" fill="currentColor" />
      <circle cx="10.8" cy="7.8" r="1.2" fill="currentColor" />
      <circle cx="15.2" cy="8.4" r="1.2" fill="currentColor" />
      <circle cx="16.5" cy="12.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const missionIcons = [IconRobot, IconTools, IconSchool, IconHospital, IconPalette];

function SectionHeading({ eyebrow, title, description, headingId }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={headingId} className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

function MissionCard({ title, description, Icon }) {
  return (
    <article className="group rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-soft)] hover:shadow-[0_24px_40px_-24px_rgba(14,116,144,0.45)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-accent)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}

function ActionCard({ title, description, cta, onClick }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:border-[var(--color-accent-soft)] hover:bg-[var(--color-surface)]">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      >
        {cta}
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

function HelpModal({ action, isOpen, onClose, onCopyEmail, onSpreadWord, copyState, spreadState }) {
  if (!isOpen) {
    return null;
  }

  const spreadLabel =
    spreadState === "done" ? "Message copié" : spreadState === "error" ? "Partage indisponible" : "Faire connaître le projet";
  const copyLabel = copyState === "done" ? "Email copié" : copyState === "error" ? "Copie indisponible" : "Copier l'email";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Fermer la fenêtre d'aide"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/45 backdrop-blur-[1px]"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-modal-title"
        className="relative z-10 w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)] md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
        >
          Fermer
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">Merci</p>
        <h3 id="help-modal-title" className="mt-2 text-2xl font-bold text-slate-900">
          Merci de vouloir aider le cercle.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Votre choix <span className="font-semibold text-slate-900">"{action?.title}"</span> est précieux. Vous
          pouvez nous contacter directement, relayer notre initiative autour de vous, ou nous suivre pour rester
          connectés.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Contact direct</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <code className="rounded-lg bg-white px-3 py-2 text-sm text-slate-700">{CONTACT_EMAIL}</code>
            <button
              type="button"
              onClick={onCopyEmail}
              className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              {copyLabel}
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-600">
            Site:{" "}
            <a href={WEBSITE_URL} className="font-semibold text-[var(--color-accent)] hover:underline">
              {WEBSITE_URL}
            </a>
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Aide pour Le cercle des robots disparus")}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
          >
            Envoyer un email
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
          >
            Suivre sur LinkedIn
          </a>
          <button
            type="button"
            onClick={onSpreadWord}
            className="sm:col-span-2 inline-flex items-center justify-center rounded-full border border-[var(--color-accent-soft)] bg-[var(--color-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--color-accent-dark)] transition hover:border-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] focus-visible:ring-offset-2"
          >
            {spreadLabel}
          </button>
        </div>
      </section>
    </div>
  );
}

function ImpactCard({ value, suffix, label }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_14px_30px_-26px_rgba(15,23,42,0.55)]">
      <p className="text-4xl font-bold text-slate-900">
        {value}
        <span className="text-[var(--color-accent)]">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export default function LandingPage() {
  const showImpact = false;
  const [activeHelpAction, setActiveHelpAction] = useState(null);
  const [copyState, setCopyState] = useState("idle");
  const [spreadState, setSpreadState] = useState("idle");
  const isHelpModalOpen = Boolean(activeHelpAction);

  useEffect(() => {
    if (!isHelpModalOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveHelpAction(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isHelpModalOpen]);

  const openHelpModal = (action) => {
    setActiveHelpAction(action);
    setCopyState("idle");
    setSpreadState("idle");
  };

  const closeHelpModal = () => {
    setActiveHelpAction(null);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyState("done");
    } catch {
      setCopyState("error");
    }
  };

  const handleSpreadWord = async () => {
    const url = WEBSITE_URL;
    const text = "Je soutiens Le cercle des robots disparus : sauver des robots pour apprendre, créer et transmettre.";

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Le cercle des robots disparus",
          text,
          url,
        });
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
      }
      setSpreadState("done");
    } catch {
      setSpreadState("error");
    }
  };

  return (
    <div className="relative overflow-hidden bg-[var(--color-page)] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-8rem] h-[28rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,187,141,0.26),transparent_60%),radial-gradient(circle_at_82%_30%,rgba(86,164,176,0.18),transparent_55%)]"
      />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="inline-flex items-center gap-3 text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-accent)]">
            <IconRobot className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Association</span>
            <span className="block text-sm font-semibold">Le cercle des robots disparus</span>
          </span>
        </a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#mission" className="hover:text-slate-900">
            Mission
          </a>
          <a href="#ateliers" className="hover:text-slate-900">
            Ateliers
          </a>
          <a href="#partenariats" className="hover:text-slate-900">
            Partenariats
          </a>
          <a href="#partenariats" className="hover:text-slate-900">
            Dons
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900">
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-20 md:space-y-28 md:px-10">
        <section className="grid items-center gap-12 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] md:pt-12">
          <div className="rise-in">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-soft)] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              <IconSpark className="h-4 w-4" />
              Sauver les robots de la recherche. Inspirer les humains.
            </p>
            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl md:leading-[1.05]">
              Les robots oubliés ont encore une histoire à transmettre.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Le cercle des robots disparus récupère des technologies destinées à l'abandon, les remet en mouvement
              et les transforme en expériences éducatives, artistiques et sociales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#partenariats"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                Faire un don
              </a>
              <a
                href="#ateliers"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
              >
                Organiser un atelier
              </a>
            </div>
          </div>

          <aside className="fade-in relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[var(--color-accent-soft)]/30 blur-2xl" aria-hidden="true" />
            <div className="absolute -right-6 -top-8 h-40 w-40 rounded-full bg-[var(--color-warm)]/40 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-white/80 bg-white/95 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] backdrop-blur">
              <div className="rounded-2xl bg-gradient-to-br from-[var(--color-surface)] via-[#f4f9fb] to-[#fff7ee] p-6">
                <div className="grid gap-4">
                  <div className="rounded-xl border border-white/90 bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Avant</p>
                    <p className="mt-1 text-sm text-slate-700">Robot pédagogique inutilisé depuis 6 ans</p>
                  </div>
                  <div className="rounded-xl border border-white/90 bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Après</p>
                    <p className="mt-1 text-sm text-slate-700">
                      Révisé, adapté et déployé pour des ateliers en médiathèque et en pédiatrie
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <IconHeart className="h-5 w-5 text-[var(--color-accent)]" />
                    Transmission vivante
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Réemploi</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="mission" aria-labelledby="mission-title" className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <SectionHeading
            headingId="mission-title"
            eyebrow="Pourquoi cette association existe"
            title="Trop de robots dorment dans des placards, alors qu'ils peuvent encore émerveiller."
            description="Chaque année, des équipements de recherche et de médiation disparaissent discrètement : obsolescence, manque de temps, manque de passerelles. Nous voulons éviter cette perte et créer un lien concret entre réemploi technologique, transmission des savoirs et émerveillement collectif."
          />
          <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white p-7">
            <p className="text-base leading-relaxed text-slate-700">
              Un robot inutilisé n'est pas un déchet. C'est une mémoire technique, un objet de curiosité, un support
              d'apprentissage et parfois une étincelle artistique.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              En lui donnant une seconde vie, nous relions celles et ceux qui conçoivent la technologie à celles et
              ceux qui en héritent : enfants, enseignants, soignants, artistes, publics éloignés du numérique.
            </p>
            <p className="text-base font-semibold text-slate-900">Le réemploi devient ici un geste culturel et social.</p>
          </div>
        </section>

        <section id="ateliers" aria-labelledby="actions-title">
          <SectionHeading
            headingId="actions-title"
            eyebrow="Ce que nous faisons"
            title="Des robots sauvés, des usages concrets."
            description="Nous intervenons du diagnostic matériel jusqu'à la mise en scène pédagogique ou artistique, avec une approche adaptée à chaque lieu."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {missionCards.map((card, index) => {
              const Icon = missionIcons[index] ?? IconRobot;
              return <MissionCard key={card.title} title={card.title} description={card.description} Icon={Icon} />;
            })}
          </div>
        </section>

        <section aria-labelledby="publics-title">
          <SectionHeading
            headingId="publics-title"
            eyebrow="Pour qui ?"
            title="Un projet pensé pour des publics variés."
            description="Nos formats sont conçus pour être inclusifs, adaptables et utiles dans des contextes éducatifs, culturels, de soin et de recherche."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[var(--color-accent-soft)] hover:text-slate-900"
              >
                {audience}
              </li>
            ))}
          </ul>
        </section>

        <section id="partenariats" aria-labelledby="aider-title">
          <SectionHeading
            headingId="aider-title"
            eyebrow="Comment aider"
            title="Quatre façons de faire partie du cercle."
            description="Chaque contribution compte : matérielle, financière, humaine ou partenariale."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {helpActions.map((action) => (
              <ActionCard key={action.title} {...action} onClick={() => openHelpModal(action)} />
            ))}
          </div>
        </section>

        {showImpact ? (
          <section id="impact" aria-labelledby="impact-title">
            <SectionHeading
              headingId="impact-title"
              eyebrow="Impact"
              title="Un impact local, concret et mesurable."
              description="Ces chiffres sont des valeurs de départ éditables facilement dans le fichier de contenu."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat) => (
                <ImpactCard key={stat.label} {...stat} />
              ))}
            </div>
          </section>
        ) : null}

        <section aria-labelledby="manifeste-title" className="rounded-3xl border border-[var(--color-accent-soft)]/70 bg-white p-8 md:p-10">
          <SectionHeading
            headingId="manifeste-title"
            eyebrow="Témoignage / manifeste"
            title="Ne laissons pas ces robots disparaître en silence."
            description="Derrière chaque machine abandonnée, il y a du travail, de la recherche, des essais, des émotions et des découvertes. Les sauver, c'est préserver une mémoire technique et ouvrir de nouveaux récits pour celles et ceux qui apprendront avec eux demain. Nous ne collectionnons pas des objets : nous ravivons des possibilités."
          />
        </section>

        <section
          aria-label="Sections à venir"
          className="rounded-3xl border border-dashed border-slate-300/90 bg-white/70 p-6 text-sm text-slate-600"
        >
        </section>
      </main>

      <HelpModal
        action={activeHelpAction}
        isOpen={isHelpModalOpen}
        onClose={closeHelpModal}
        onCopyEmail={handleCopyEmail}
        onSpreadWord={handleSpreadWord}
        copyState={copyState}
        spreadState={spreadState}
      />

      <footer id="contact" className="border-t border-slate-200/80 bg-white/90">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_1fr_1fr] md:px-10">
          <div>
            <p className="text-lg font-semibold text-slate-900">Le cercle des robots disparus</p>
            <p className="mt-2 text-sm text-slate-600">Sauver les robots de la recherche. Inspirer les humains.</p>
          </div>
          <nav aria-label="Liens de pied de page" className="grid grid-cols-2 gap-2 text-sm text-slate-600">
            <a href="#mission" className="hover:text-slate-900">
              Mission
            </a>
            <a href="#ateliers" className="hover:text-slate-900">
              Ateliers
            </a>
            <a href="#partenariats" className="hover:text-slate-900">
              Partenariats
            </a>
            <a href="#partenariats" className="hover:text-slate-900">
              Dons
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900">
              Contact
            </a>
          </nav>
          <div className="text-sm text-slate-600">
            <p className="font-medium text-slate-900">Réseaux sociaux</p>
            <div className="mt-3 flex gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-3 py-1 hover:border-slate-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
