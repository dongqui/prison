import Avatar from "@/(shared)/components/Avatar";

export default function ArticleCard() {
  return (
    <article className="max-w-3xl">
      <div className="flex gap-2 items-center">
        <Avatar />
        <span>Amt Das</span>
        <span>4 days ago</span>
        <div />
      </div>
      <h2 className="mt-2">
        Your potfoli is stopping you from getting that job
      </h2>

      <p className="mt-2">
        An intense way to learn about the process and practice your designs
        skills — My 1st hackathon Hackathons have been on my mind since I heard
        it was a good way to gain experience as a junior UX designer. As my
        portfolio...
      </p>
      <footer className="mt-9"></footer>
    </article>
  );
}
