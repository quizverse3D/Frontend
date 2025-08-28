import { useEffect, useId, useState } from "react";
import { t } from "i18next";

import { CyberDivider } from "@/ui/CyberDivider";
import { Input } from "@/ui/Input";
import { List, ListItem } from "@/ui/List";

import cls from "./MultiplayerRooms.module.scss";

export const MultiplayerRooms = () => {
  const [rooms, setRooms] = useState([
    {
      id: useId(),
      name: "test122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222",
    },
    {
      id: useId(),
      name: "test2222222222222222222222222222222222222222222222222222222",
    },
    {
      id: useId(),
      name: "test323423424242432344444444444444444444444444444444444444444444444444444444444444444444444444444444444444",
    },
    { id: useId(), name: "test4" },
    { id: useId(), name: "test5" },
    { id: useId(), name: "test6" },
    { id: useId(), name: "test7" },
    { id: useId(), name: "test5" },
    { id: useId(), name: "test6" },
    { id: useId(), name: "test7" },
  ]);

  const roomClickHandler = () => {};

  useEffect(() => {}, []);
  return (
    <section className={cls.MultiplayerRomms}>
      <header className={cls.Header}>
        <h1 className={cls.Title}>{t("Комнаты")}</h1>
        <CyberDivider />
      </header>
      <div className={cls.Content}>
        <Input label="Поиск комнат" />
        <div className={cls.RoomsWrapper}>
          <List className={cls.RoomsList}>
            {rooms.map((item) => {
              return (
                <ListItem
                  children={item.name}
                  onClickHandler={roomClickHandler}
                  isOnlyText={false}
                />
              );
            })}
          </List>
          <div className={cls.RoomInfo}>
            <h2> Наименование комнаты</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
