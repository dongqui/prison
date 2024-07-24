import { useAtom, atom } from "jotai";

const _atom = atom(0);

export function useWriteData() {
  return useAtom(_atom);
}
