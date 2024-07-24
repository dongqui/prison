import ImageAndViedoIcon from "@/(shared)/components/icons/ImageAndViedoIcon";

export default function EventContent() {
  return (
    <div>
      <div>
        <h2>증거 01.</h2>
        <div className="border-dashed border-2 rounded-lg aspect-square flex justify-center items-center w-3/6">
          <div className="flex justify-center items-center flex-col gap-2">
            <ImageAndViedoIcon />
            <span>사진이나 동영상을 여기에 끌어다 놓으세요</span>
            <button>컴퓨터에서 선택</button>
          </div>
        </div>

        <textarea
          className="border-none outline-none resize-none mt-4 w-full"
          placeholder="Tell your story.."
        />
      </div>

      <div>
        <button className="border-soild border-2 rounded-full p-4">+</button>
      </div>
    </div>
  );
}
