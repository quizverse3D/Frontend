import React from "react";
import { useNavigate } from "react-router-dom";

import { LangSwitcher } from "../LangSwitcher";
import { Button } from "@/ui/Button/Button";
import { getRouteAuthorization } from "@/shared/consts/routes";

import cls from "./Header.module.scss";

const ROUTES = {
  authorization: getRouteAuthorization(),
};
export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // TODO: сбросить auth state
    navigate(ROUTES.authorization);
  };
  return (
    <header className={cls.Header}>
      <LangSwitcher />
      <Button
        variant="primary"
        className={cls.LogoutBtn}
        onClick={handleLogout}
        style={{ marginLeft: 16 }}
      >
        Выйти
      </Button>
    </header>
  );
};
