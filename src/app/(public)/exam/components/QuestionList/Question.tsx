import React, { FC } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Option {
    id: string;
    value: string;
    name: string;
}

interface Question {
    id: number;
    question: string;
    options: Option[];
}

interface IProps {
    questions: Question;
}

const Question: FC<IProps> = ({ questions }) => {
    return (
        <div className='mb-6'>
            <p className='mb-4 text-neutral-400'>{questions.question}</p>

            <RadioGroup className='ml-3 mb-4 space-y-3'>
                {(questions.options ?? []).map((data) => (
                    <div key={data.id} className='flex items-center space-x-2'>
                        <RadioGroupItem
                            value={data.value}
                            id={data.id}
                            className='peer data-[state="checked"]:bg-primary-500 hover:scale-125 transition-all duration-150'
                        />
                        <Label
                            htmlFor='r3'
                            className='peer-data-[state="checked"]:text-primary-500 text-base text-neutral-400'
                        >
                            {data.value}
                        </Label>
                    </div>
                ))}
            </RadioGroup>

            {/*  <input type='radio' id='html' name='fav_language' value='HTML' />
            <label htmlFor='html'>HTML</label>

            
            <input type='radio' id='css' name='fav_language' value='CSS' />
            <label htmlFor='css'>CSS</label> */}
            {/* <input
                type='radio'
                id='html'
                name='fav_language'
                className='hidden'
                value='HTML'
            />
            <label
                htmlFor='html'
                className='flex items-center cursor-pointer ml-2'
            >
                <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                Html
            </label>
            <input
                type='radio'
                id='css'
                name='fav_language'
                className='hidden'
                value='CSS'
            />
            <label
                htmlFor='css'
                className='flex items-center cursor-pointer ml-2'
            >
                <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                CSS
            </label> */}
        </div>
    );
};

export default Question;
