import { TASK_STATUSES } from "@/lib/consts";
import type { SidebarSlide } from "@/lib/types";

type SlideButtonProps = {
  slide: SidebarSlide;
  state: string;
  onClick: () => void;
  isActive: boolean;
};

function SlideButton({ slide, state, onClick, isActive }: SlideButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative grid max-h-[68px] w-full cursor-pointer grid-cols-[10%_auto_10%] items-center overflow-hidden rounded-md p-4 before:absolute before:h-full before:w-2 before:content-[''] ${state === "collapsed" ? " " : "gap-2"} ${isActive ? "bg-gray-400" : "bg-gray-100"}
      ${slide.taskStatus === TASK_STATUSES.accepted && "before:bg-green-300"}
       ${slide.taskStatus === TASK_STATUSES.notFullfilled && "before:bg-transparent"}
         ${slide.taskStatus === TASK_STATUSES.retry && "before:bg-red-300"}`}
    >
      <div
        className={`${state === "collapsed" ? "hidden" : ""} flex justify-center font-bold text-3xl text-gray-300`}
      >
        {slide.order}
      </div>
      <div>
        <div
          className={`${state === "collapsed" ? "hidden" : ""} ${isActive ? "text-gray-100" : "text-gray-500"} flex justify-start truncate font-bold text-xs`}
        >
          {slide.taskType}
        </div>
        <div
          className={`${state === "collapsed" ? "hidden" : ""} 
          ${isActive ? "text-gray-100" : "text-gray-400"} flex justify-start truncate font-bold text-s`}
        >
          {slide.taskName}
        </div>
      </div>
      <div
        className={`flex justify-center [&>svg]:h-8 [&>svg]:w-8 ${isActive ? "text-gray-100" : "text-gray-400"} `}
      >
        {slide.taskIcon}
      </div>
    </button>
  );
}

export default SlideButton;
