import { Accordion, AccordionItem } from "@nextui-org/react";

const Contact = () => {
  return (
    <div className="flex justify-center p-9">
      <Accordion variant="light">
        <AccordionItem key="1" aria-label="Accordion 1" title="Номер поддержки">
          8(938)294-38-30
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Авторы">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          adipisci cupiditate quia quo explicabo corrupti!
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Schedule">
          Monday - Friday 9:00 - 18:00
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Contact;
