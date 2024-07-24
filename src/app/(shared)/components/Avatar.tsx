import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      className="w-9 h-9 rounded-full"
      src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      width="24"
      height="24"
    />
  );
}
