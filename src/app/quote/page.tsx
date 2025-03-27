import WorkOrderForm from '@/components/WorkOrderForm';

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Request a Quote
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below to get started with your project. We&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <WorkOrderForm />
      </div>
    </main>
  );
} 