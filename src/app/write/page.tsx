"use client";

import EventContent from "./container/EventContent";
import EventTitle from "./container/EventTitle";
import MatchCard from "./container/MatchCard";
import UserCard from "./container/UserCard";
import { useWriteStep } from "./hooks/useWriteStep";

export default function Home() {
  const [step, setStep] = useWriteStep();

  return (
    <main className=" min-h-screen p-24 mx-auto">
      <div className="flex justify-between border-b border-gray-100 py-4 mb-4">
        <h2>{step.title}</h2>

        <div className="flex gap-5">
          <button>이전</button>
          <button>다음</button>
        </div>
      </div>

      {step.name === "match" && <MatchCard />}
      {step.name === "user" && <UserCard />}
      {step.name === "content" && <EventContent />}
      {step.name === "title" && <EventTitle />}
    </main>
  );
}
