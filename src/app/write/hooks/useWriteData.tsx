import { useAtom, atom } from "jotai";

import type { WriteStep } from "@/(shared)/types";

interface MatchUser {
  puid: string;
  riotId: string;
  icon: string;
  KDA: string;
}

interface WriteData {
  match: {
    id: string;
    users: MatchUser[];
  } | null;
  targetUser: Omit<MatchUser, "KDA"> | null;
  content: {
    image: string;
    text: string;
  }[];
  title: string;
}

const _atom = atom<WriteData>({
  match: null,
  targetUser: null,
  content: [],
  title: "",
});

export function useWriteData() {
  const [data, setData] = useAtom(_atom);

  function stepDataValidation(step: WriteStep) {
    switch (step) {
      case "match":
        return !!data.match;
      case "user":
        return !!data.targetUser;
      case "content":
        return !!data.content.length;
      case "title":
        return !!data.title;
    }
  }

  return { stepDataValidation };
}
