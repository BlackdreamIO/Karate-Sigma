import { Icons } from '@/components';
import { ExamDetails } from '..';
import { examDetails } from '@/static';
import { RoundedBtn } from '@/utils';
import { Label } from '@/components/ui/label';

const Exam = () => {
    return (
        <div className='bg-white rounded-md shadow-sm my-8 p-6'>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <Label className='text-3xl text-primary-500 mb-6 uppercase font-semibold'>
                        {examDetails.title}
                    </Label>
                </div>
                <div className=''>
                    <Label className='text-neutral-400 text-base'>
                        {examDetails.content}
                        <span className='cursor-pointer text-primary-500'>
                            {' '}
                            More Info{' '}
                            <Icons.Arrow className='inline'></Icons.Arrow>
                        </span>
                    </Label>
                </div>
                <div className='pb-16 py-6'>
                    <ExamDetails />
                </div>
                <div className='flex items-center justify-between'>
                    <Label className='text-base'>{examDetails.note}</Label>
                    <RoundedBtn
                        label='Submit Exam'
                        path='/'
                        className='!px-5 py-3 text-white rounded-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Exam;
