import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to TCB Metalworks
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Your trusted partner for metal fabrication and repair services
          </p>
          <div className="mt-10">
            <a
              href="https://tcb-metalworks-quote-form.vercel.app/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
