import Link from "next/link";
import { units } from "@/lib/units";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_50%),linear-gradient(135deg,_#020617,_#111827)] px-4 py-10 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            UGC NET CS Preparation
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Master previous-year questions unit by unit.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            This project organizes the core Computer Science units into practice sections with MCQs, answer checks, and explanations inspired by the previous paper archive.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.ugcnetonline.in/previous_question_papers.php"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Open source archive
            </a>
            <Link
              href="/mock-papers"
              className="rounded-full border border-sky-500/50 px-5 py-2.5 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:text-white"
            >
              Try 2 mock papers
            </Link>
            <span className="rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300">
              10 units covered
            </span>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                Mock papers
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">Practice full-length papers</h2>
            </div>
            <Link
              href="/mock-papers"
              className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Open mock papers
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {units.map((unit) => (
            <Link
              key={unit.slug}
              href={`/units/${unit.slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-slate-800/80"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                Unit {units.indexOf(unit) + 1}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white">{unit.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{unit.description}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-sky-300">
                Start practicing →
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
