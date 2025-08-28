import { useTranslation } from "react-i18next";
import {
  getRouteAvatar,
  getRouteMultiplayer,
  getRouteSetting,
} from "@/shared/consts/routes";
import { List, ListItemLink } from "@/ui/List/";
import { CyberDivider } from "@/ui/CyberDivider/CyberDivider";
import cls from "./Home.module.scss";

// Выносим функции маршрутов в константы, чтобы они не вызывались при каждом рендере
const ROUTES = {
  settings: getRouteSetting(),
  multiplayer: getRouteMultiplayer(),
  avatar: getRouteAvatar(),
};

export const HomePage = () => {
  const { t } = useTranslation("pages");
  return (
    <section className={cls.HomePage}>
      <div className={cls.MenuWrapper}>
        <header>
          <h1 className={cls.Title}>Quizverse 3D</h1>
          <CyberDivider />
        </header>

        <List className={cls.MenuList}>
          <ListItemLink
            to={ROUTES.settings}
            itemClassName={cls.MenuItem}
            linkClassName={cls.MenuLink}
            activeClassName={cls.ActiveLink}
          >
            {t("home.single")}
          </ListItemLink>

          <ListItemLink
            to={ROUTES.multiplayer}
            itemClassName={cls.MenuItem}
            linkClassName={cls.MenuLink}
            activeClassName={cls.ActiveLink}
          >
            {t("home.multiplayer")}
          </ListItemLink>

          <ListItemLink
            to={ROUTES.avatar}
            itemClassName={cls.MenuItem}
            linkClassName={cls.MenuLink}
            activeClassName={cls.ActiveLink}
          >
            {t("home.avatar")}
          </ListItemLink>
        </List>
      </div>
    </section>
  );
};
