'use client';

import { UseFormReturn } from 'react-hook-form';
import type { FormData } from '@/types/form';

interface BlueprintQuoteStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
  onPrev: () => void;
}

const materials = [
  'Steel',
  'Aluminum',
  'Stainless Steel',
  'Copper',
  'Brass',
  'Other',
];

const finishingProcesses = [
  { id: 'painting', label: 'Painting' },
  { id: 'packaging', label: 'Packaging for Shipping' },
  { id: 'labeling', label: 'Labeling Parts' },
  { id: 'plating', label: 'Plating / Galvanizing' },
  { id: 'none', label: 'None of the Above' },
  { id: 'other', label: 'Other' },
];

export default function BlueprintQuoteStep({ form, onNext, onPrev }: BlueprintQuoteStepProps) {
  const { register, watch, formState: { errors } } = form;

  const showOtherFinishingProcess = watch('blueprintQuote.finishingProcesses')?.includes('other');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Blueprint/CAD Quote Details</h2>
        <p className="text-gray-600 mb-6">Please provide details about your project.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Blueprint/CAD Files
          </label>
          <input
            type="file"
            multiple
            accept=".pdf,.dwg,.dxf,.stp,.step"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            {...register('blueprintQuote.files')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Description
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={4}
            {...register('blueprintQuote.description')}
          />
          {errors.blueprintQuote?.description && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity Needed
          </label>
          <input
            type="number"
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('blueprintQuote.quantity', { valueAsNumber: true })}
          />
          {errors.blueprintQuote?.quantity && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.quantity.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Material
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('blueprintQuote.material')}
          >
            <option value="">Select a material</option>
            {materials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
          {errors.blueprintQuote?.material && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.material.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Material Supply
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                value="yes"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('blueprintQuote.materialSupply')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Yes, we should supply material
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="customer_supplied"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('blueprintQuote.materialSupply')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                No, customer will supply material
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="not_sure"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('blueprintQuote.materialSupply')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Not sure yet
              </label>
            </div>
          </div>
          {errors.blueprintQuote?.materialSupply && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.materialSupply.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Finishing Processes
          </label>
          <div className="mt-2 space-y-2">
            {finishingProcesses.map((process) => (
              <div key={process.id} className="flex items-center">
                <input
                  type="checkbox"
                  value={process.id}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  {...register('blueprintQuote.finishingProcesses')}
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  {process.label}
                </label>
              </div>
            ))}
          </div>
          {showOtherFinishingProcess && (
            <div className="mt-2">
              <input
                type="text"
                {...register('blueprintQuote.otherFinishingProcess')}
                placeholder="Please describe other finishing process"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          )}
          {errors.blueprintQuote?.finishingProcesses && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.finishingProcesses.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Desired Completion Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('blueprintQuote.desiredCompletionDate')}
          />
          {errors.blueprintQuote?.desiredCompletionDate && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.desiredCompletionDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Is this a hard deadline?
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                value="true"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('blueprintQuote.isHardDeadline')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="false"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('blueprintQuote.isHardDeadline')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                No
              </label>
            </div>
          </div>
          {errors.blueprintQuote?.isHardDeadline && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.isHardDeadline.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            When do you need the quote by?
          </label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('blueprintQuote.quoteCompletionDate')}
          />
          {errors.blueprintQuote?.quoteCompletionDate && (
            <p className="mt-1 text-sm text-red-600">{errors.blueprintQuote.quoteCompletionDate.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="submit"
          onClick={onNext}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
} 