import React from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@/ui/Input";

import cls from "./Settings.module.scss";

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
  return (
    <div>
      <div className={cls.SettingsList}>
        <Input label={t("Наименование комнаты")} />
        <Input label={t("Пароль")} />
      </div>
    </div>
  );
};
