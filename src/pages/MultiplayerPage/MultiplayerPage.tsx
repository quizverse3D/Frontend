import { classNames } from "@/shared/utils/classNames/classNames";
import { MultiplayerRooms } from "@/modules/multiplayer/components/rooms/MultiplayerRooms";
import cls from "./MultiplayerPage.module.scss";

export const MultiplayerPage = () => {
  return (
    <div className={classNames(cls.MultiplayerPage)}>
      <MultiplayerRooms />
    </div>
  );
};
