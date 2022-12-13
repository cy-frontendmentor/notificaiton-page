"use client";
import Image from "next/image";
import { useContext } from "react";
import { NotificationsContext } from "../contexts/notifications.context";
const Comments = ({
  commentType,
  details,
  date,
  read,
  id,
}: {
  commentType: string;
  details: {
    userName?: string | null;
    avatarUrl: string;
    groupName?: string | null;
    pictureUrl?: string | null;
    postName?: string | null;
    msg?: string;
  };
  id?: number | null;
  date: string;
  read: boolean;
}) => {
  const { setNotificationsToRead } = useContext(NotificationsContext);

  let content = "";
  switch (commentType) {
    case "reaction":
      content = "reacted to your recent post";
      break;
    case "follow":
      content = "followed you";
      break;

    case "joinedGroup":
      content = "has joined your group ";
      break;
    case "privateMsg":
      content = "sent you a private message ";
      break;
    case "commented":
      content = "commented on your picture ";
      break;
    case "leftGroup":
      content = "left the group";
      break;
    default:
      content = "Not have this commentType  ";
  }

  return (
    <div
      onClick={() => {
        setNotificationsToRead(id);
      }}
      className={` flex w-full cursor-pointer space-x-[19px] rounded-lg px-5 pt-[18px] pb-[17px] hover:bg-very-light-grayish-blue ${
        read ? " bg-transparent" : " bg-very-light-grayish-blue"
      }
      `}
    >
      <Image
        src={details.avatarUrl}
        alt=""
        width={45}
        height={45}
        className=" h-[39px] w-[39px] flex-none rounded-full border border-[rgba(0,0,0,0.0464)]"
      ></Image>

      <div className=" grid flex-1 gap-y-[3px]">
        <p className=" desktop:text-base inline-block  text-sm font-medium text-dark-grayish-blue ">
          <span className=" mr-[7px] inline-block cursor-pointer font-extrabold text-very-dark-blue transition-all hover:text-blue ">
            {details.userName}
          </span>
          {content}
          {details.postName ? (
            <span className="ml-[7px]  cursor-pointer font-extrabold transition-all hover:text-blue ">
              {details.postName}
            </span>
          ) : (
            ""
          )}
          {details.groupName ? (
            <span className="ml-[7px]  cursor-pointer font-bold  text-blue md:font-extrabold">
              {details.groupName}
            </span>
          ) : (
            ""
          )}
          {read ? (
            ""
          ) : (
            <span className=" ml-[6px] inline-block h-2 w-2 rounded-full bg-red"></span>
          )}
        </p>
        <p className="text-sm  font-medium text-grayish-blue md:text-sm ">
          {date}
        </p>
        {details.msg ? (
          <p className=" mt-3 cursor-pointer rounded-[5px] border border-light-grayish-blue-2 p-4 text-sm font-medium text-dark-grayish-blue transition-all hover:bg-light-grayish-blue-1 md:px-5 md:pb-5 md:pt-[17px] md:text-base ">
            {details.msg}
          </p>
        ) : (
          ""
        )}
      </div>
      {details.pictureUrl ? (
        <Image
          src={details.pictureUrl}
          alt=""
          width={45}
          height={45}
          className=" ml-[14px] h-[39px] w-[39px] flex-none cursor-pointer  "
        ></Image>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comments;
