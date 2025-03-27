'use client';

import { UseFormReturn } from 'react-hook-form';
import type { FormData } from '@/types/form';

interface ConsultationStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
  onPrev: () => void;
}

export default function ConsultationStep({ form, onNext, onPrev }: ConsultationStepProps) {
  const { register, formState: { errors } } = form;

  const handleSubmit = async () => {
    const isValid = await form.trigger('consultation');
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Consultation Request</h2>
        <p className="text-gray-600 mb-6">Please provide details about what you'd like to discuss.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            What would you like to discuss?
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={4}
            placeholder="Please describe what you'd like to discuss in detail"
            {...register('consultation.description')}
          />
          {errors.consultation?.description && (
            <p className="mt-1 text-sm text-red-600">{errors.consultation.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Photos or Documents
          </label>
          <div className="mt-1">
            <input
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              {...register('consultation.attachments')}
            />
            <p className="mt-1 text-sm text-gray-500">
              You can upload photos, PDFs, or Word documents to help explain your request
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('consultation.preferredContactMethod')}
          >
            <option value="">Select a contact method</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="text">Text Message</option>
          </select>
          {errors.consultation?.preferredContactMethod && (
            <p className="mt-1 text-sm text-red-600">{errors.consultation.preferredContactMethod.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Best Time to Contact
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="e.g., After 2 PM, Weekdays only"
            {...register('consultation.bestTimeToContact')}
          />
          {errors.consultation?.bestTimeToContact && (
            <p className="mt-1 text-sm text-red-600">{errors.consultation.bestTimeToContact.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
} 