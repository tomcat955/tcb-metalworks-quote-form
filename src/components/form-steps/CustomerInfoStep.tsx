'use client';

import { UseFormReturn } from 'react-hook-form';
import type { FormData } from '@/types/form';

interface CustomerInfoStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
}

export default function CustomerInfoStep({ form, onNext }: CustomerInfoStepProps) {
  const { register, formState: { errors } } = form;

  const handleSubmit = async () => {
    const isValid = await form.trigger('customerInfo');
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Information</h2>
        <p className="text-gray-600 mb-6">Please provide your contact information and project details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            {...register('customerInfo.fullName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-gray-900 bg-white"
          />
          {errors.customerInfo?.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.customerInfo.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            {...register('customerInfo.companyName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-gray-900 bg-white"
          />
          {errors.customerInfo?.companyName && (
            <p className="mt-1 text-sm text-red-600">{errors.customerInfo.companyName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register('customerInfo.phoneNumber')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-gray-900 bg-white"
          />
          {errors.customerInfo?.phoneNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.customerInfo.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('customerInfo.email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-gray-900 bg-white"
          />
          {errors.customerInfo?.email && (
            <p className="mt-1 text-sm text-red-600">{errors.customerInfo.email.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
            Project Name or Job Reference *
          </label>
          <input
            type="text"
            id="projectName"
            {...register('customerInfo.projectName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-gray-900 bg-white"
          />
          {errors.customerInfo?.projectName && (
            <p className="mt-1 text-sm text-red-600">{errors.customerInfo.projectName.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  );
} 