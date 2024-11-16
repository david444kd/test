import { Accordion, AccordionItem } from "@nextui-org/react";

const Contact = () => {
  return (
    <div className="">
      <Accordion variant="light" className="px-5 sm:px-0 flex flex-col ">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Контакты поддержки"
        >
          <div>77777777777777777</div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Авторы">
          <div className="gap-3 flex flex-col">
            <p className="text-default-600">
              Старший преподаватель, магистр физики - Кузнецова Юлия
              Александровна
            </p>
            <p className="text-default-600">Кожахметов Д.М.</p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Contact;
