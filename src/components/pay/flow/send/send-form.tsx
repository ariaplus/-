import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '@components/ui/button';
import { InputField } from '@components/input/input-field';
import { ToolTip } from '@components/ui/tooltip';
import { ArplImage } from '@components/ui/ariaplus';

export default function Form1235(): JSX.Element {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendMoney = () => {
    // Logic to send money goes here
    toast.success(`Sent ${amount} to ${recipient}`);
    setRecipient('');
    setAmount('');
  };

  return (
    <form>
      <InputField
        label='Recipient'
        inputId={recipient}
        inputValue={recipient}
        handleChange={(e) => setRecipient(e.target.value)}
        placeholder='Enter recipient'
      />
      <InputField
        label='Amount'
        inputId={amount}
        inputValue={amount}
        handleChange={(e) => setAmount(e.target.value)}
        placeholder='Enter amount'
        type='number'
      />
      <Button
        className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                   active:bg-light-primary/20 dark:hover:bg-dark-primary/10 
                   dark:active:bg-dark-primary/20'
        onClick={handleSendMoney}
      >
        <ArplImage 
          imgClassName='arplicon'
          blurClassName='none'
          src='/main/ui/primary/user/ui/send-money.svg'
          alt=''
          layout='fill'
          width='20px'
          height='20px'
        />
        <ToolTip tip='Send Money' />
      </Button>
    </form>
  );
}
