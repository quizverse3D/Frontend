import { RoomSettings } from "@/modules/settings";
import { classNames } from "@/shared/utils/classNames/classNames";
import cls from "./SettingsPage.module.scss";

export const SettingsPage = () => {
  return (
    <div className={classNames(cls.SettingsPage)}>
      <RoomSettings />
    </div>
  );
};
