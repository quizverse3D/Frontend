import React, { ReactNode } from "react";
import cls from "./List.module.scss";
import { classNames } from "@/shared/utils/classNames/classNames";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface ListProps {
  className?: string;
  children: ReactNode | ReactNode[];
  ariaLabel?: string;
}

export const List = (props: ListProps) => {
  const { t } = useTranslation("list");
  const { className, children, ariaLabel = "" } = props;
  return (
    <ul
      className={classNames(cls.List, {}, [className])}
      aria-label={t(ariaLabel)}
      role="list"
    >
      {children}
    </ul>
  );
};
