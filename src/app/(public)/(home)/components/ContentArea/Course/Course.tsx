'use client';
import { Icons } from '@/components';
import Avater from '@/components/Avater';
import { courseDetails } from '@/static';
import React from 'react';
import { motion } from 'framer-motion';

const Course = () => {
    return (
        <motion.div
            className='grid grid-cols-12 gap-4'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='col-span-12 lg:col-span-5'>
                <Avater
                    src={courseDetails?.image}
                    className='!w-full !h-[220px]'
                />
            </div>
            <div className='col-span-12 lg:col-span-7'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-base text-primary-500 mb-6 uppercase font-semibold'>
                        {courseDetails?.title}
                    </h4>
                    <Icons.Share className='cursor-pointer' />
                </div>
                <div className=''>
                    <p className='text-neutral-400'>
                        {courseDetails?.content}{' '}
                        <span className='cursor-pointer text-primary-500'>
                            More Info{' '}
                            <Icons.Arrow className='inline'></Icons.Arrow>
                        </span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Course;
