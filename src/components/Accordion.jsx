'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './accordion.css';

const AccordionDemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>
        <picture className="contacts__image image1"></picture>
      </AccordionTrigger>
      <AccordionContent>
        <a className="contacts__link" href="https://wa.me/+79055004952" target="_blank">
          <b>WhatsApp</b>
        </a>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>
        <picture className="contacts__image image2"></picture>
      </AccordionTrigger>
      <AccordionContent>
        <a className="contacts__link" href="https://t.me/Eugene_Zar" target="_blank">
          <b>Telegram</b>
        </a>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>
        <picture className="contacts__image image3"></picture>
      </AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          <a className="contacts__link" href="https://eugenezaryanov@yandex.ru" target="_blank">
            <b>eugenezaryanov@yandex.ru</b>
          </a>
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>
        <picture className="contacts__image image4"></picture>
      </AccordionTrigger>
      <AccordionContent>
        <a className="contacts__link" href="https://github.com/EvgenyZaryanov" target="_blank">
          <b>GitHub</b>
        </a>
      </AccordionContent>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-5">
      <AccordionTrigger>
        <picture className="contacts__image image5"></picture>
      </AccordionTrigger>
      <AccordionContent>
        <a
          className="contacts__link"
          href="https://hh.ru/resume/323171cdff0cbaffbe0039ed1f357933504745"
          target="_blank"
        >
          <b>Резюме</b>
        </a>
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

// eslint-disable-next-line react/display-name
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

// eslint-disable-next-line react/display-name
const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default AccordionDemo;
