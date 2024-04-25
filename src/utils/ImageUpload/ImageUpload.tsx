'use client';

import { Icons } from '@/components/Icons';
import React, { useRef } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ImageUpload = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <Card onClick={handleDivClick} className='!bg-transparent mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center gap-4 border-dashed-full p-6 rounded-md'>
                <Label className='text-base text-primary-500 uppercase '>
                    Upload Your Practicle Exam Video
                </Label>
                <Button
                    variant={'ghost'}
                    className='p-3 hover:bg-transparent hover:text-secondary-color border-secondary-color border text-secondary-color flex items- rounded-md'
                >
                    <Icons.Uploadvideo />{' '}
                    <span className='ml-4'> Upload Video</span>
                </Button>
                <Label className='!mt-2 !mb-0 text-neutral-500'>
                    file name
                </Label>
            </CardHeader>

            <Input
                name='image'
                ref={fileInputRef}
                type='file'
                className='hidden'
            />
        </Card>
    );
};
export default ImageUpload;
