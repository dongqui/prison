import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  return (
    <div>
      {[1, 2, 3].map((v) => (
        <ArticleCard key={v} />
      ))}
    </div>
  );
}
