import Link from "next/link";
import { getMockPapers } from "@/lib/mock-papers";
import MockPaperQuestionBank from "@/components/mock-paper-question-bank";

export default function MockPapersPage() {
  const mockPapers = getMockPapers();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_50%),linear-gradient(135deg,_#020617,_#111827)] px-4 py-10 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Mock Papers
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Two full-length mock question papers
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Each paper is built from the real unit banks and contains 100 questions so students can revise across all topics in one place.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-500 hover:text-white"
            >
              ← Back to home
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          {mockPapers.map((paper) => (
            <MockPaperQuestionBank
              key={paper.id}
              title={paper.title}
              description={paper.description}
              questions={paper.questions}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
