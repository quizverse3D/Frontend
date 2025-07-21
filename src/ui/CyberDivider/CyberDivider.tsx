import React from "react";
import cls from "./CyberDivider.module.scss";
import { classNames } from "@/shared/utils/classNames/classNames";

interface CyberDividerProps {
  className?: string;
}

export const CyberDivider: React.FC<CyberDividerProps> = ({
  className = "",
}) => <div className={classNames(cls.CyberDivider, {}, [className])} />;
