import React from "react";
import { classNames } from "@/shared/utils/classNames/classNames";
import cls from "./List.module.scss";

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  onClickHandler?: () => void;
  isOnlyText: boolean;
}

export const ListItem = (props: ListItemProps) => {
  const { className, children, onClickHandler = undefined } = props;
  return (
    <li
      className={classNames(cls.Item, {}, [className])}
      onClick={onClickHandler}
    >
      {children}
    </li>
  );
};
