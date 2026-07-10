"use client";

import { useMemo, useState } from "react";
import type { Question } from "@/types/unit";

interface MockPaperQuestionBankProps {
  title: string;
  description: string;
  questions: Question[];
}

export default function MockPaperQuestionBank({
  title,
  description,
  questions,
}: MockPaperQuestionBankProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const score = useMemo(() => {
    return questions.reduce((acc, question) => {
      if (selectedAnswers[question.id] === question.answer) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [questions, selectedAnswers]);

  const handleSelect = (questionId: string, option: string) => {
    setSelectedAnswers((current) => ({ ...current, [questionId]: option }));
  };

  const handleReveal = (questionId: string) => {
    setRevealedAnswers((current) => ({ ...current, [questionId]: true }));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Practice Paper</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
          </div>
          <div className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-200">
            Score: {score}/{questions.length}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((question) => {
          const selectedAnswer = selectedAnswers[question.id];
          const isRevealed = revealedAnswers[question.id];
          const isCorrect = selectedAnswer === question.answer;

          return (
            <article
              key={question.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                  {question.year}
                </p>
                {question.sourceUnit ? (
                  <p className="text-sm text-slate-400">{question.sourceUnit}</p>
                ) : null}
              </div>
              <p className="mt-3 text-base font-semibold text-white">{question.prompt}</p>

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
                          ? "border-sky-500 bg-sky-950/70 text-sky-200"
                          : "border-slate-700 bg-slate-950/50 text-slate-200 hover:border-slate-500"
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
                  className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700"
                >
                  Check answer
                </button>
                <span className="text-sm text-slate-400">
                  {selectedAnswer ? "Your choice is saved." : "Select an option to start."}
                </span>
              </div>

              {isRevealed && (
                <div
                  className={`mt-4 rounded-xl border p-4 text-sm ${
                    isCorrect
                      ? "border-emerald-800 bg-emerald-950/50 text-emerald-200"
                      : "border-amber-800 bg-amber-950/50 text-amber-200"
                  }`}
                >
                  <p className="font-semibold">Correct answer</p>
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
