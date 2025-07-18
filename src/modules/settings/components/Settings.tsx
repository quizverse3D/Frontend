import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@/ui/Input";

import { Select } from "@/ui/Select";
import { SelectOption } from "@/ui/Select";

import cls from "./Settings.module.scss";
import { Checkbox } from "@/ui/Checkbox";

interface SettingsProps {
  userSettings?: Object; // TODO Добавить интрефейс
  isSingleGame?: boolean;
}

// Тестовая заглушка API
async function fakeSettingsApi(userId: string) {
  // TODO Добавить интерфейсы
  return new Promise<{ success: boolean; error?: string; settings?: Object }>(
    (resolve) => {
      setTimeout(() => {
        if (userId === "1") {
          resolve({
            success: true,
            settings: {
              lang: "ru",
              volume: 20,
              isEnableSound: true,
              keyBind: {
                answer: "space",
                dontKnowAnswer: "q",
                pause: "T",
              },
            },
          });
        } else {
          resolve({
            success: false,
            error: "Ошибка при получении настроек",
          });
        }
      }, 800);
    }
  );
}

export const Settings = (props: SettingsProps) => {
  const { t } = useTranslation("settings");
  const roleOptions: SelectOption[] = [
    { label: t("Ведущий"), value: "Lead" },
    { label: t("Игрок"), value: "Player" },
    { label: t("Зритель"), value: "Viewer" },
  ];
  const [selectedRole, setSelectedRole] = useState<string>("Player");
  return (
    <div className={cls.Settings}>
      <div className={cls.SettingsNav}></div>
      <div className={cls.SettingsList}>
        <div className={cls.SettingsListBlock}>
          <h2>Общие настройки</h2>
          <Input label={t("Наименование комнаты")} />
          <Input label={t("Пароль")} />
          <Select
            label={t("Моя роль")}
            value={selectedRole}
            options={roleOptions}
            onChange={setSelectedRole}
          />
          <Checkbox label={t("Фальстарт")} />
        </div>
      </div>
    </div>
  );
};
