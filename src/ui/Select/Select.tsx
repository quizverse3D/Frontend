import React from "react";
import { classNames } from "@/shared/utils/classNames/classNames";
import cls from "./Select.module.scss"; 

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const Select = (props: SelectProps) => {
  const { value, onChange, options, className = "" } = props;
  return (
    <select
      className={classNames(cls.Select, {}, [className])}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
