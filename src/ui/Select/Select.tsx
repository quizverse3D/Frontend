import React, { useState } from "react";
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
}

export const Select = (props: SelectProps) => {
  const { value, onChange, options, className = "", label = "" } = props;
  const currentIndex = options.findIndex((opt) => opt.value === value);
  const selectedOption = options[currentIndex] || options[0];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + options.length) % options.length;
    onChange(options[prevIndex].value);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % options.length;
    onChange(options[nextIndex].value);
  };

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      <span className={cls.SelectLabel}>{label}</span>
      <div className={cls.Slider}>
        <button className={cls.SliderArrow} onClick={handlePrev}>
          ‹
        </button>

        <div className={cls.SliderMainWrapp}>
          <div className={cls.SliderMain}>
            <div className={cls.SliderValue}>{selectedOption.label}</div>
          </div>

          <div className={cls.SliderPagination}>
            {options.map((item, index) => {
              return (
                <span
                  className={classNames(
                    cls.SliderPaginationItem,
                    { [cls.ActivePagincation]: currentIndex === index },
                    []
                  )}
                  key={item.value}
                ></span>
              );
            })}
          </div>
        </div>

        <button className={cls.SliderArrow} onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};
