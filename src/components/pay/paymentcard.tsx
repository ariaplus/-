import Link from 'next/link';

interface PaymentCardProps {
  src: string;
  title: string;
  amount: string;
  dueDate: string;
}

export function PaymentCard({ src, title, amount, dueDate }: PaymentCardProps) {
  return (
    <Link href="/pay/card">
      <a className="block bg-cover bg-center h-64 rounded-lg shadow-md" style={{ backgroundImage: `url(${src})` }}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-1" aria-label={title}>Aria+ Pay Card</h2>
          <p className="text-gray-700 mb-2">New Purchase Amount</p>
          <p className="text-2xl font-bold mb-4">{amount}</p>
          <p className="text-gray-700 mb-4">Upcoming Payments</p>
          <p className="text-gray-700">{dueDate}</p>
        </div>
      </a>
    </Link>
  );
}
