import { PageTitle } from '@/components';
import { Profile } from './components';
import { Button } from '@/components/ui/button';

const HomePage = () => {
    return (
        <>
            <PageTitle title='Profile' />
            <Profile />
        </>
    );
};

export default HomePage;
