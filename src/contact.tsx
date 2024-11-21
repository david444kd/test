import { Accordion, AccordionItem, Link } from "@nextui-org/react";

const Contact = () => {
  return (
    <div className="">
      <Accordion variant="light" className="px-5 sm:px-0 flex flex-col ">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Контакты поддержки"
        >
          <div>
            <p className="text-sm">Для вопросов и предложений к разработчику</p>
            <Link href="https://t.me/pumba444">Telegram</Link>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Создатели">
          <div className="gap-3 flex flex-col">
            <p className="text-sm text-default-600">
              Разработчик - Студент факультета инновационных технологий, группы
              ИС - Кожахметов Д.М.
            </p>
            <p className="text-sm text-default-600">
              Старший преподаватель, магистр естественных наук - Кузнецова Юлия
              Александровна
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Contact;
