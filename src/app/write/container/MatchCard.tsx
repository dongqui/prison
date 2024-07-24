import Image from "next/image";

export default function MatchCard() {
  return (
    <div className="hover:bg-black-10 flex g-8 rounded-lg items-center justify-between bg-gray-10 px-8 py-4 cursor-pointer">
      <div className="flex flex-col justify-between">
        <div>
          <div>솔로랭크</div>
          <span>07/07</span>
        </div>
        <div className="h-3" />
        <div>
          <div>WIN</div>
          <span>30:14</span>
        </div>
      </div>

      <div className="flex flex-col ">
        <Image
          alt="Player Profile Icon"
          width={50}
          height={50}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLtH2byECCSSZPNaYe4NBIreKZtsa97kkEA&s"
        />
        <span>14/5/4</span>
      </div>

      <div className="flex gap-12">
        <UserList />
        <UserList />
      </div>
    </div>
  );
}

function UserList() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((v) => (
        <li className="flex gap-1 mt-2" key={v}>
          <Image
            alt="Player Profile Icon"
            width={20}
            height={20}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLtH2byECCSSZPNaYe4NBIreKZtsa97kkEA&s"
          />
          <span>동징어#KR1 13/4/6</span>
        </li>
      ))}
    </ul>
  );
}
