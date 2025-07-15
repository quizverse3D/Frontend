import { classNames } from "@/shared/utils/classNames/classNames";
import cls from "./SettingsPage.module.scss";
import { CyberDivider } from "@/ui/CyberDivider";
import { useTranslation } from "react-i18next";
import { Settings } from "@/modules/settings";

export const SettingsPage = () => {
  const { t } = useTranslation("settings");
  return (
    <div className={classNames(cls.SettingsPage)}>
      <div className={cls.SettingsWrapper}>
        <h1 className={cls.Title}>{t("Настройки")}</h1>
        <CyberDivider />
        <Settings />
      </div>
    </div>
  );
};
