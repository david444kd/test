import { Accordion, AccordionItem } from "@nextui-org/react";

const Contact = () => {
  return (
    <div className="flex justify-center p-9 pt-16">
      <Accordion variant="light">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Контакты поддержки"
        >
          77777777777777777
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
