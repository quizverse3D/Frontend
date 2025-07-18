import React, { useState, KeyboardEvent, useId } from "react";
import { classNames } from "@/shared/utils/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export const Select = (props: SelectProps) => {
  const {
    value,
    onChange,
    options,
    className = "",
    label = "",
    disabled = false,
  } = props;

  const id = useId();
  const currentIndex = options.findIndex((opt) => opt.value === value);
  const selectedOption = options[currentIndex] || options[0];

  const handlePrev = () => {
    if (disabled) return;
    const prevIndex = (currentIndex - 1 + options.length) % options.length;
    onChange(options[prevIndex].value);
  };

  const handleNext = () => {
    if (disabled) return;
    const nextIndex = (currentIndex + 1) % options.length;
    onChange(options[nextIndex].value);
  };

  const handleSelect = (index: number) => {
    if (disabled) return;
    onChange(options[index].value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "ArrowLeft":
        handlePrev();
        break;
      case "ArrowRight":
        handleNext();
        break;
      case "Home":
        onChange(options[0].value);
        break;
      case "End":
        onChange(options[options.length - 1].value);
        break;
    }
  };

  return (
    <div
      className={classNames(
        cls.SelectWrapper,
        {
          [cls.disabled]: disabled,
        },
        [className]
      )}
    >
      <label
        id={`${id}-label`}
        className={cls.SelectLabel}
        htmlFor={`${id}-select`}
      >
        {label}
      </label>

      <div
        role="group"
        aria-labelledby={`${id}-label`}
        className={cls.Slider}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          className={cls.SliderArrow}
          onClick={handlePrev}
          aria-label="Prev option"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          ‹
        </button>

        <div
          id={`${id}-select`}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-controls={`${id}-options`}
          aria-activedescendant={`${id}-option-${currentIndex}`}
          className={cls.SliderMain}
          tabIndex={0}
        >
          <div className={cls.SliderMainWrapp}>
            <div className={cls.SliderValue} aria-live="polite">
              {selectedOption.label}
            </div>
            <div
              id={`${id}-options`}
              role="listbox"
              aria-multiselectable="false"
              className={cls.SliderPagination}
            >
              {options.map((item, index) => (
                <button
                  key={item.value}
                  type="button"
                  role="option"
                  id={`${id}-option-${index}`}
                  aria-selected={currentIndex === index}
                  className={classNames(cls.SliderPaginationItem, {
                    [cls.ActivePagincation]: currentIndex === index,
                  })}
                  onClick={() => handleSelect(index)}
                  tabIndex={disabled ? -1 : 0}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={cls.SliderArrow}
          onClick={handleNext}
          aria-label="Next option"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          ›
        </button>
      </div>
    </div>
  );
};
