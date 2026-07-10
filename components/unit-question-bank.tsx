"use client";

import { useMemo, useState } from "react";
import type { Question, UnitData } from "@/types/unit";

interface UnitQuestionBankProps {
  unit: UnitData;
}

export default function UnitQuestionBank({ unit }: UnitQuestionBankProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const score = useMemo(() => {
    return unit.questions.reduce((acc, question) => {
      if (selectedAnswers[question.id] === question.answer) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [selectedAnswers, unit.questions]);

  const handleSelect = (questionId: string, option: string) => {
    setSelectedAnswers((current) => ({ ...current, [questionId]: option }));
  };

  const handleReveal = (questionId: string) => {
    setRevealedAnswers((current) => ({ ...current, [questionId]: true }));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Practice mode
            </p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {unit.questions.length} multiple-choice questions
            </h2>
          </div>
          <div className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
            Score: {score}/{unit.questions.length}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {unit.questions.map((question: Question) => {
          const selectedAnswer = selectedAnswers[question.id];
          const isRevealed = revealedAnswers[question.id];
          const isCorrect = selectedAnswer === question.answer;

          return (
            <article
              key={question.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  {question.year}
                </p>
              </div>
              <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                {question.prompt}
              </p>
              <div className="mt-4 grid gap-3">
                {question.options.map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectOption = isRevealed && option === question.answer;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(question.id, option)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                        isSelected
                          ? "border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400 dark:bg-sky-950/50 dark:text-sky-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      } ${isCorrectOption ? "ring-2 ring-emerald-500" : ""}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleReveal(question.id)}
                  disabled={!selectedAnswer}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 dark:bg-sky-600 dark:hover:bg-sky-500"
                >
                  Check answer
                </button>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedAnswer ? "Your choice is saved." : "Select an option to start."}
                </span>
              </div>

              {isRevealed && (
                <div
                  className={`mt-4 rounded-xl border p-4 text-sm ${
                    isCorrect
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
                      : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200"
                  }`}
                >
                  <p className="font-semibold">{isCorrect ? "Correct answer" : "Correct answer"}</p>
                  <p className="mt-1">{question.answer}</p>
                  <p className="mt-2">{question.explanation}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
