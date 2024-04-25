'use client';

import { Icons } from '@/components';
import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';

import {
    Accordion,
    AccordionContent,
    AccordionItem as ShadecnAccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';

interface IProps {
    title: string;
    children: React.ReactNode;
    itemActive?: boolean;
    className?: string;
}

const AccordionItem: FC<IProps> = ({
    title,
    children,
    itemActive,
    className
}) => {
    return (
        <motion.div
            className='w-full'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Accordion type='single' collapsible className='w-full'>
                <ShadecnAccordionItem
                    value='soemthing'
                    className='w-full border bg-gray-25 rounded-lg text-base mb-4'
                >
                    <AccordionTrigger className={`p-6 !no-underline text-base`}>
                        {title}
                    </AccordionTrigger>
                    <AccordionContent
                        className={`bg-gray-900 duration-200 ease-in-out ${className}`}
                    >
                        {children}
                    </AccordionContent>
                </ShadecnAccordionItem>
            </Accordion>
        </motion.div>
    );
};

export default AccordionItem;
