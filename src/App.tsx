import { Link as RouterLink, Routes, Route } from "react-router-dom";
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Modal,
  useDisclosure,
  Card,
} from "@nextui-org/react";

import ReactPlayer from "react-player/youtube";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./components/ui/sheet";

import "./App.css";
import About from "./about";
import Contact from "./contact";

import { Progress } from "@nextui-org/progress";
import { useState, useEffect } from "react";
import Forma from "./forma";
import { Button } from "./components/ui/button";
import MenuSvg from "./components/menuSvg";
import Formuls from "./formuls";
function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/theory.doc";
    link.download = "theory.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [countRows, setCountRows] = useState(1);
  const [counter, setCounter] = useState(0);
  const { isOpen, onOpenChange } = useDisclosure();
  const [info, setInfo] = useState(false);
  const [read, setRead] = useState(false);
  const [right, setRight] = useState(50);
  const [left, setLeft] = useState(50);

  useEffect(() => {
    onOpenChange();
  }, []);

  function upGrade() {
    let row1_h1: Element | null = document.querySelector("#row1_h1");
    let row2_h1: Element | null = document.querySelector("#row2_h1");
    let row3_h1: Element | null = document.querySelector("#row3_h1");
    let row4_h1: Element | null = document.querySelector("#row4_h1");
    let row5_h1: Element | null = document.querySelector("#row5_h1");
    let row6_h1: Element | null = document.querySelector("#row6_h1");
    let row7_h1: Element | null = document.querySelector("#row7_h1");
    if (
      row1_h1 &&
      row2_h1 &&
      row3_h1 &&
      row4_h1 &&
      row5_h1 &&
      row6_h1 &&
      row7_h1
    ) {
      let r = right + Math.floor(Math.random() * 5);
      let l = left - Math.floor(Math.random() * 5);
      setRight(r);
      setLeft(l);
      let value = r - l;
      if (countRows == 1) {
        row1_h1.textContent = value.toString();
        console.log(countRows);
      }
      if (countRows == 2) {
        row2_h1.textContent = value.toString();
        console.log(countRows);
      }
      if (countRows == 3) {
        row3_h1.textContent = value.toString();
        console.log(countRows);
      }
      if (countRows == 4) {
        row4_h1.textContent = value.toString();
        console.log(countRows);
      }
      if (countRows == 5) {
        row5_h1.textContent = value.toString();
        console.log(countRows);
      }
      if (countRows == 6) {
        row6_h1.textContent = value.toString();
        console.log(countRows);
      }
      if (countRows == 7) {
        row7_h1.textContent = value.toString();
        console.log(countRows);
      }
    }
  }
  function sbros() {
    let row1_h2: Element | null = document.querySelector("#row1_h2");
    let row2_h2: Element | null = document.querySelector("#row2_h2");
    let row3_h2: Element | null = document.querySelector("#row3_h2");
    let row4_h2: Element | null = document.querySelector("#row4_h2");
    let row5_h2: Element | null = document.querySelector("#row5_h2");
    let row6_h2: Element | null = document.querySelector("#row6_h2");
    let row7_h2: Element | null = document.querySelector("#row7_h2");

    if (counter === 0) {
      if (left && right != 50) {
        let pravo = Math.random() * (53 - 51) + 51;
        let pravo1 = Number(pravo.toFixed(2));
        let levo = Math.random() * (49 - 45) + 45;
        let levo1 = Number(levo.toFixed(2));

        setRight(pravo1);
        setLeft(levo1);

        let distance = pravo1 - levo1;
        distance = Number(distance.toFixed(2));
        if (
          row1_h2 &&
          row2_h2 &&
          row3_h2 &&
          row4_h2 &&
          row5_h2 &&
          row6_h2 &&
          row7_h2
        ) {
          if (countRows == 1) {
            row1_h2.textContent = distance.toString();
          }
          if (countRows == 2) {
            row2_h2.textContent = distance.toString();
          }
          if (countRows == 3) {
            row3_h2.textContent = distance.toString();
          }
          if (countRows == 4) {
            row4_h2.textContent = distance.toString();
          }
          if (countRows == 5) {
            row5_h2.textContent = distance.toString();
          }
          if (countRows == 6) {
            row6_h2.textContent = distance.toString();
          }
          if (countRows == 7) {
            row7_h2.textContent = distance.toString();
          }
        }
        console.log(distance);

        setCounter(1);
      }
    }
    if (counter === 1) {
      setRight(50);
      setLeft(50);
      setCounter(0);
      setCountRows(countRows + 1);
    }
  }
  function remake() {
    let row1_h1: Element | null = document.querySelector("#row1_h1");
    let row2_h1: Element | null = document.querySelector("#row2_h1");
    let row3_h1: Element | null = document.querySelector("#row3_h1");
    let row4_h1: Element | null = document.querySelector("#row4_h1");
    let row5_h1: Element | null = document.querySelector("#row5_h1");
    let row6_h1: Element | null = document.querySelector("#row6_h1");
    let row7_h1: Element | null = document.querySelector("#row7_h1");

    let row1_h2: Element | null = document.querySelector("#row1_h2");
    let row2_h2: Element | null = document.querySelector("#row2_h2");
    let row3_h2: Element | null = document.querySelector("#row3_h2");
    let row4_h2: Element | null = document.querySelector("#row4_h2");
    let row5_h2: Element | null = document.querySelector("#row5_h2");
    let row6_h2: Element | null = document.querySelector("#row6_h2");
    let row7_h2: Element | null = document.querySelector("#row7_h2");
    if (
      row1_h1 &&
      row2_h1 &&
      row3_h1 &&
      row4_h1 &&
      row5_h1 &&
      row6_h1 &&
      row7_h1 &&
      row1_h2 &&
      row2_h2 &&
      row3_h2 &&
      row4_h2 &&
      row5_h2 &&
      row6_h2 &&
      row7_h2
    ) {
      row1_h1.textContent = "";
      row2_h1.textContent = "";
      row3_h1.textContent = "";
      row4_h1.textContent = "";
      row5_h1.textContent = "";
      row6_h1.textContent = "";
      row7_h1.textContent = "";

      row1_h2.textContent = "";
      row2_h2.textContent = "";
      row3_h2.textContent = "";
      row4_h2.textContent = "";
      row5_h2.textContent = "";
      row6_h2.textContent = "";
      row7_h2.textContent = "";
    }
    setCountRows(1);
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/75 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-end gap-5">
          <div>
            <Button onClick={handleDownload}>Загрузить теорию</Button>
          </div>
          <Sheet>
            <SheetTrigger className="inline-flex items-center gap-2 font-bold text-lg">
              Меню <MenuSvg />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Меню</SheetTitle>
                <SheetDescription>
                  Обязательно перед использованием посетите все вкладки меню
                </SheetDescription>
                <nav className="flex justify-start items-start flex-col gap-4 mt-6">
                  <SheetClose asChild>
                    <RouterLink
                      to="/"
                      className="font-bold text-primary-500 hover:opacity-80"
                    >
                      Эксперимент
                    </RouterLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <RouterLink
                      to="/about"
                      className="font-bold text-primary-500 hover:opacity-80"
                    >
                      Руководство для выполнения
                    </RouterLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <RouterLink
                      to="/contact"
                      className="font-bold text-primary-500 hover:opacity-80"
                    >
                      Информация
                    </RouterLink>
                  </SheetClose>

                  {/* <SheetClose asChild>
                    <RouterLink
                      to="/formuls"
                      className="font-bold text-primary-500 hover:opacity-80"
                    >
                      FORMULS
                    </RouterLink>
                  </SheetClose> */}
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-8 px-4 max-w-7xl mx-auto">
        <Modal
          className="m-auto"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="xs"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-bold">
                  Что нужно знать перед началом эксперимента
                </ModalHeader>
                <ModalBody>
                  <p className="text-sm text-default-600">
                    Добро пожаловать в виртуальную лабораторную работу по
                    определению теплоёмкостей Cp и Cv методом Клемана-Дезорма!
                    Здесь вы сможете провести эксперимент по определению
                    теплоёмкостей газа при постоянном давлении и объёме с
                    помощью классического метода.
                  </p>
                  <p className="font-bold">Обратите внимание:</p>
                  <ul className="flex flex-col gap-1">
                    <li className="text-sm text-default-600">
                      1) Подробный мануал с описанием всех этапов выполнения
                      лабораторной работы вы можете прочесть в меню, пункт
                      "Мануал"
                    </li>

                    <li className="text-sm text-default-600">
                      2) Если у вас возникнут вопросы, комментарии или
                      предложения, посетите раздел с информацией о создателях и
                      контактами, который также находится в меню, пункт -
                      "Информация".
                    </li>
                  </ul>
                  <p>
                    Нажмите "Начать эксперимент", чтобы приступить к выполнению.
                    Желаем успехов!
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={onClose}>
                    Начать эксперимент!
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <Routes>
          <Route
            path="/"
            element={
              <div className="space-y-8">
                {/* Info Overlay */}
                {info && (
                  <div className="fixed inset-0 bg-default-100 z-50 flex items-center justify-center p-4">
                    <Card className="max-w-lg w-full p-6">
                      <div className="flex flex-col gap-4 mb-2">
                        <h1 className="text-xl">Подготовка к эксперименту:</h1>
                        <p className="text-default-600">
                          Перед началом работы убедитесь, что параметры
                          установки находятся на исходных значениях, которые
                          отображаются в соответствующих полях интерфейса.
                        </p>
                        <h1 className="text-xl">Нагнетание давления:</h1>
                        <p className="text-default-600">
                          Нажмите кнопку "Насос" для увеличения давления в
                          системе.
                        </p>
                        <p className="text-default-600">
                          Как только достигнуто нужное давление, остановите
                          накачку и запишите разницу колен монометра в таблицу
                        </p>
                      </div>
                      <Button
                        onClick={() => {
                          setInfo(false);
                          setRead(true);
                        }}
                        className="mt-6"
                      >
                        Готово
                      </Button>
                    </Card>
                  </div>
                )}

                {/* Video Player */}
                <div className="aspect-video w-full max-w-2xl mx-auto">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=6eOeCTrqzaw&list=PL1Bo7M-lmlwRKLIHzHPSWiXpF6k0eh7ON&index=3&pp=gAQBiAQB"
                    controls
                    width="100%"
                    height="100%"
                    light
                    playing
                  />
                </div>

                <main className="min-h-60 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8 items-center w-full max-w-2xl px-4">
                    <div className="flex items-center justify-center">
                      <div className="transform -rotate-90 w-48">
                        <p className="text-center rotate-90 mb-5">{left}</p>
                        <Progress value={left} className="h-2" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="transform -rotate-90 w-48">
                        <Progress value={right} className="h-2" />
                        <p className="text-center rotate-90 mt-5">{right}</p>
                      </div>
                    </div>
                  </div>
                </main>

                {/* Controls */}
                <div className="max-w-md mx-auto space-y-4">
                  {read && (
                    <div className="flex gap-4">
                      <Button
                        color="primary"
                        onClick={upGrade}
                        className="flex-1"
                      >
                        Насос
                      </Button>
                      {countRows == 8 ? (
                        <Button
                          onClick={remake}
                          className="flex-1 bg-gray-400 border"
                        >
                          Начать заново
                        </Button>
                      ) : (
                        <Button
                          variant="destructive"
                          onClick={sbros}
                          className="flex-1"
                        >
                          Клапан
                        </Button>
                      )}
                    </div>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => {
                      setInfo(true);
                      setRead(false);
                    }}
                    className="w-full"
                  >
                    Прочитать инструкции
                  </Button>
                </div>

                {/* Form */}
                {read && <Forma />}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formuls" element={<Formuls />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
