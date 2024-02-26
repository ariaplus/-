import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';
import { InputField } from '@components/input/input-field';
import { Button } from '@components/ui/button';
import { ArplImage } from '@components/ui/ariaplus';
import { ToolTip } from '@components/ui/tooltip';
import { Skeleton } from '@mui/material/Skeleton';

export function DiscoverButton(): JSX.Element {
  const [alreadySet, setAlreadySet] = useState(false);
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visited, setVisited] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { user } = useAuth();
  const { open, openModal, closeModal } = useModal();

  useEffect(() => {
    // ...
  }, [/* other dependencies */, loading]);

  const handleSubmit = async (e: FormEvent) => {
    // ...
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // ...
  };

  return (
    <>
      <Link href={'/discover'}>
        <a>
          <Button
            className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                       active:bg-light-primary/20 dark:hover:bg-dark-primary/10 
                       dark:active:bg-dark-primary/20'
          >
            {loading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <>
                <ArplImage
                  imgClassName='arplicon'
                  blurClassName='none'
                  src='/main/ui/header/primary/discover.svg'
                  alt='Discover'
                  layout='fill'
                  width='25px'
                  height='25px'
                />
                <ToolTip tip='Discover' />
              </>
            )}
          </Button>
        </a>
      </Link>
    </>
  );
}
