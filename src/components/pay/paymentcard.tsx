import Link from 'next/link';

export function PaymentCard() {
  return (
    <Link href="/pay/card">
      <a className="block bg-cover bg-center h-64 rounded-lg shadow-md" style={{ backgroundImage: `url(/path/to/image.jpg)` }}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-1" aria-label="Aria+ Pay Card">Aria+ Pay Card</h2>
          <p className="text-gray-700 mb-2">New Purchase Amount</p>
          <p className="text-2xl font-bold mb-4">$415.98</p>
          <p className="text-gray-700 mb-4">Upcoming Payments</p>
          <p className="text-gray-700">Sep 9, 2023 - $68.16<br/>Sep 12, 2023<br/>Sep 14, 2023 - $20.52</p>
        </div>
      </a>
    </Link>
  );
}
