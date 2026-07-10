import Link from "next/link";
import { notFound } from "next/navigation";
import UnitQuestionBank from "@/components/unit-question-bank";
import { getUnitBySlug, units } from "@/lib/units";

export function generateStaticParams() {
  return units.map((unit) => ({ slug: unit.slug }));
}

interface UnitPageProps {
  params: Promise<{ slug: string }>;
}

export default async function UnitPage({ params }: UnitPageProps) {
  const { slug } = await params;
  const unit = getUnitBySlug(slug);

  if (!unit) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
          <Link
            href="/"
            className="text-sm font-medium text-sky-400 transition hover:text-sky-300"
          >
            ← Back to all units
          </Link>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{unit.title}</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-300">{unit.description}</p>
          <a
            href={unit.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-500 hover:text-sky-300"
          >
            Source: UGC NET previous papers
          </a>
        </div>

        <UnitQuestionBank unit={unit} />
      </div>
    </main>
  );
}
