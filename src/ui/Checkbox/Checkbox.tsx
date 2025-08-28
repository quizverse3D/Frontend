import React, { useState } from "react";
import { classNames } from "@/shared/utils/classNames/classNames";
import cls from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox = ({
  label,
  checked = false,
  onChange,
  disabled = false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label
      className={classNames(cls.Checkbox, {
        [cls.disabled]: disabled,
        [cls.checked]: isChecked,
      })}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={cls.HiddenInput}
      />

      <span className={cls.LabelText}>{label}</span>

      <div className={cls.CheckboxContainer}>
        <div className={cls.CheckboxOuter}>
          <div className={cls.CheckboxInner}>
            {isChecked && <div className={cls.Checkmark}></div>}
          </div>
        </div>
      </div>
    </label>
  );
};
