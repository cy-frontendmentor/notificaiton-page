"use client";
import Comments from "../components/comments";
import { useContext } from "react";
import { NotificationsContext } from "../contexts/notifications.context";

const Page = () => {
  const { notifications, setAllToRead, notificationsCount } =
    useContext(NotificationsContext);
  return (
    <div className=" max-w-[730px] bg-white px-4 py-6 md:px-[30px] md:py-[33px] ">
      <div className="mb-[31px] flex items-center justify-between ">
        <div className="flex items-center space-x-[9px] md:space-x-[11px]">
          <h2 className=" text-xl font-extrabold text-very-dark-blue md:text-2xl">
            Notifications
          </h2>
          <span className=" inline-block rounded-md bg-blue px-[11px] pt-[1px] pb-1 font-extrabold text-white ">
            {notificationsCount}
          </span>
        </div>
        <p
          className="cursor-pointer text-sm font-medium text-dark-grayish-blue transition-all hover:text-blue md:text-base"
          onClick={() => {
            setAllToRead();
          }}
        >
          Mark all as read
        </p>
      </div>
      <div className=" grid gap-y-2">
        {notifications.map(({ commentType, details, date, read, id }) => (
          <Comments
            commentType={commentType}
            details={details}
            date={date}
            read={read}
            key={id}
            id={id}
          ></Comments>
        ))}
      </div>
    </div>
  );
};

export default Page;
