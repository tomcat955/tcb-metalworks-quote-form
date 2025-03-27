'use client';

import { UseFormReturn } from 'react-hook-form';
import type { FormData } from '@/types/form';

interface RepairFabricationStepProps {
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

const workLocations = [
  'Shop',
  'Onsite',
  'Not Sure',
];

export default function RepairFabricationStep({ form, onNext, onPrev }: RepairFabricationStepProps) {
  const { register, watch, formState: { errors } } = form;

  const workLocation = watch('repairFabrication.workLocation');
  const timelineType = watch('repairFabrication.timelineType');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Repair/Custom Fabrication Details</h2>
        <p className="text-gray-600 mb-6">Please provide details about your repair or fabrication needs.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={4}
            {...register('repairFabrication.description')}
          />
          {errors.repairFabrication?.description && (
            <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Photos or Sketches
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            {...register('repairFabrication.photos')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Where will the work be performed?
          </label>
          <div className="mt-2 space-y-2">
            {workLocations.map((location) => (
              <div key={location} className="flex items-center">
                <input
                  type="radio"
                  value={location.toLowerCase().replace(' ', '_')}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  {...register('repairFabrication.workLocation')}
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  {location}
                </label>
              </div>
            ))}
          </div>
          {errors.repairFabrication?.workLocation && (
            <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.workLocation.message}</p>
          )}

          {workLocation === 'onsite' && (
            <div className="mt-4 ml-7 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Facility Address
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  rows={3}
                  placeholder="Please provide the complete facility address"
                  {...register('repairFabrication.facilityAddress')}
                />
                {errors.repairFabrication?.facilityAddress && (
                  <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.facilityAddress.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Hours of Operation
                </label>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">Open</label>
                    <input
                      type="time"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('repairFabrication.hoursOfOperation.open')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Close</label>
                    <input
                      type="time"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('repairFabrication.hoursOfOperation.close')}
                    />
                  </div>
                </div>
                {errors.repairFabrication?.hoursOfOperation && (
                  <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.hoursOfOperation.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PPE Requirements
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  rows={3}
                  placeholder="Please specify any required PPE or safety requirements for working at this facility"
                  {...register('repairFabrication.ppeRequirements')}
                />
                {errors.repairFabrication?.ppeRequirements && (
                  <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.ppeRequirements.message}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Material
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('repairFabrication.material')}
          >
            <option value="">Select a material</option>
            {materials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
          {errors.repairFabrication?.material && (
            <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.material.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Material Thickness (if known)
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('repairFabrication.materialThickness')}
          />
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
                {...register('repairFabrication.materialSupply')}
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
                {...register('repairFabrication.materialSupply')}
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
                {...register('repairFabrication.materialSupply')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Not sure yet
              </label>
            </div>
          </div>
          {errors.repairFabrication?.materialSupply && (
            <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.materialSupply.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            How soon do you need this completed?
          </label>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="emergency"
                value="emergency"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('repairFabrication.timelineType')}
              />
              <label htmlFor="emergency" className="ml-3 block text-sm font-medium text-gray-700">
                Emergency - Need ASAP
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="specific_date"
                value="specific_date"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('repairFabrication.timelineType')}
              />
              <label htmlFor="specific_date" className="ml-3 block text-sm font-medium text-gray-700">
                Specific Date
              </label>
            </div>

            {timelineType === 'specific_date' && (
              <div className="ml-7">
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  {...register('repairFabrication.timeline')}
                />
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Is this a hard deadline?</label>
                  <div className="mt-1">
                    <select
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('repairFabrication.isHardDeadline')}
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center">
              <input
                type="radio"
                id="flexible"
                value="flexible"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('repairFabrication.timelineType')}
              />
              <label htmlFor="flexible" className="ml-3 block text-sm font-medium text-gray-700">
                Flexible timeline
              </label>
            </div>
          </div>
          {errors.repairFabrication?.timelineType && (
            <p className="mt-1 text-sm text-red-600">{errors.repairFabrication.timelineType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={3}
            {...register('repairFabrication.additionalNotes')}
          />
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