"use client";
import { SnackbarProvider } from "notistack";
import TodoLayout from "./components/todo-layout";

export default function Home() {
  return (
    <SnackbarProvider>
      <div className="container flex flex-col m-auto mt-5">
        <TodoLayout />
      </div>
    </SnackbarProvider>
  );
}
