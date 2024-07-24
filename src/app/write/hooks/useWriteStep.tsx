"use client";

import { atom, useAtom } from "jotai";

interface Step {
  name: "title" | "content" | "match" | "user";
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

const _atom = atom<Step>(stepList[0]);

export function useWriteStep() {
  return useAtom(_atom);
}
