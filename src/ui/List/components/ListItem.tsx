import { classNames } from "@/shared/utils/classNames/classNames";

import cls from "./List.module.scss";

interface ListItemProps {
  className?: string;
  title?: string;
  isHint?: boolean;
  onClickHandler?: () => void;
}

const hideText = (text: string, maxTextLength: number = 50) => {
  return text.length > maxTextLength
    ? `${text.slice(0, maxTextLength)}...`
    : text;
};

export const ListItem = (props: ListItemProps) => {
  const {
    className,
    title = "",
    isHint = false,
    onClickHandler = undefined,
  } = props;
  return (
    <li
      className={classNames(cls.Item, {}, [className])}
      onClick={onClickHandler}
    >
      <span className={cls.Text} title={title}>
        {isHint ? hideText(title) : title}
      </span>
    </li>
  );
};
