import { Label } from '@/components/ui/label';
import { coursechedule } from '@/static';
import React from 'react';

const CourseDetails = () => {
    return (
        <div className='flex flex-col gap-4 mt-4'>
            <Label className='text-base text-primary-500 font-semibold '>
                Instrusctor:{' '}
                <span className='ml-2'>{coursechedule.instructor}</span>
            </Label>
            <Label className='text-base'>
                Exam Name:{' '}
                <span className='ml-2'>
                    {coursechedule.exam} <br />
                </span>
            </Label>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:col-span-4 text-red'>
                    Exam Sehedule:
                </div>
                <div className='col-span-12 md:col-span-8 text-green-500'>
                    <Label className='text-base leading-normal'>
                        Start Exam - 30th apr, 2024/ 8:00pm
                    </Label>
                    <Label className='text-base leading-normal'>
                        End Exam - 31th apr, 2024/ 11:59pm
                    </Label>
                </div>
            </div>
            <Label className='text-red text-base'>
                Final Exam: <span className='ml-2'>Final Exam</span>
            </Label>
        </div>
    );
};

export default CourseDetails;
