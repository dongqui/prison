"use client";
import { atom, useAtom } from "jotai";

import type { WriteStep } from "@/(shared)/types";

interface Step {
  name: WriteStep;
  title: string;
}

const stepList: Step[] = [
  {
    name: "match",
    title: "01. 이거 언제 벌어진 사건입니까요?",
  },
  {
    name: "user",
    title: "02. 어떤 놈인가요?",
  },
  {
    name: "content",
    title: "03. 증거 자료를 작성해주세요.",
  },
  {
    name: "title",
    title: "04. 사건 제목은 무엇으로 할까요?",
  },
];

const _atom = atom<number>(0);

export function useWriteStep(): {
  step: Step;
  goNextStep: () => void;
  goPreviousStep: () => void;
} {
  const [stepOrder, setStepOrder] = useAtom(_atom);

  const isFirstStep = stepOrder === 0;
  const isLastStep = stepOrder === stepList.length - 1;

  function goNextStep() {
    if (!isLastStep) {
      setStepOrder(stepOrder + 1);
    }
  }

  function goPreviousStep() {
    if (!isFirstStep) {
      setStepOrder(Math.max(0, stepOrder - 1));
    }
  }

  return {
    step: stepList[stepOrder],
    goNextStep,
    goPreviousStep,
  };
}
