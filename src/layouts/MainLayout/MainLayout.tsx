import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/ui/Header";
import { BinaryBgCanvas } from "@/ui/Backgrounds/BinaryBgCanvas";
import cls from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={cls.MainLayout}>
      <Header />
      <BinaryBgCanvas />
      <main className={cls.MainLayoutContent}>
        <Outlet />
      </main>
    </div>
  );
};
