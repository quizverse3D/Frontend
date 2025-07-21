import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@/ui/Input";
import { Select, SelectOption } from "@/ui/Select";
import { Checkbox } from "@/ui/Checkbox";
import { CyberDivider } from "@/ui/CyberDivider";

import { SettingsProps, UserRole } from "../../shared/types";

import cls from "./RoomSettings.module.scss";

export const RoomSettings: React.FC<SettingsProps> = (props: SettingsProps) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>("Player");

  const { t } = useTranslation("settings");
  const roleOptions: SelectOption<UserRole>[] = [
    { label: t("Ведущий"), value: "Lead" },
    { label: t("Игрок"), value: "Player" },
    { label: t("Зритель"), value: "Viewer" },
  ];

  return (
    <section className={cls.Settings} aria-label={t("Настройки игры")}>
      <header className={cls.Header}>
        <h1 className={cls.Title}>{t("Настройки")}</h1>
        <CyberDivider />
      </header>

      <div className={cls.Content}>
        <div className={cls.List}>
          <section className={cls.Section} aria-labelledby="general-settings">
            <h2 id="general-settings">{t("Общие настройки")}</h2>
            <Input
              label={t("Наименование комнаты")}
              aria-label={t("Введите наименование комнаты")}
            />
            <Input
              label={t("Пароль")}
              type="password"
              aria-label={t("Введите пароль комнаты")}
            />
            <Select<UserRole>
              label={t("Моя роль")}
              value={selectedRole}
              options={roleOptions}
              onChange={setSelectedRole}
              aria-label={t("Выберите вашу роль")}
            />
          </section>

          <section className={cls.Section} aria-labelledby="game-rules">
            <h2 id="game-rules">{t("Правила игры")}</h2>
            <Checkbox
              label={t("Фальстарт")}
              aria-label={t("Включить фальстарт")}
            />
            <Checkbox
              label={t("Штраф за неправильный ответ")}
              aria-label={t("Включить штраф за неправильный ответ")}
            />
          </section>
        </div>
      </div>
    </section>
  );
};
