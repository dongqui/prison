import Image from "next/image";

export default function UserCard() {
  return (
    <div className="hover:bg-black-10 flex g-8 rounded-lg justify-between bg-gray-10 px-8 py-4 cursor-pointer">
      <UserList />
      <UserList />
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
            width={30}
            height={30}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLtH2byECCSSZPNaYe4NBIreKZtsa97kkEA&s"
          />
          <span>동징어#KR1 13/4/6</span>
        </li>
      ))}
    </ul>
  );
}
