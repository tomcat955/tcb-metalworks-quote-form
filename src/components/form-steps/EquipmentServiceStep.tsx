'use client';

import { UseFormReturn } from 'react-hook-form';
import type { FormData } from '@/types/form';

interface EquipmentServiceStepProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
  onPrev: () => void;
}

const repairTypes = [
  'Welding/Fabrication',
  'Mechanical',
  'Hydraulic',
  'Custom Modification',
  'Maintenance',
  'Other',
];

const partsNeededOptions = [
  'We should supply parts',
  'Customer will supply parts',
  'Not sure yet',
  'No parts needed',
];

export default function EquipmentServiceStep({ form, onNext, onPrev }: EquipmentServiceStepProps) {
  const { register, watch, formState: { errors } } = form;

  const location = watch('equipmentService.location');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Equipment Service Details</h2>
        <p className="text-gray-600 mb-6">Please provide details about the equipment that needs service.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Equipment Type
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('equipmentService.equipmentType')}
          />
          {errors.equipmentService?.equipmentType && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.equipmentType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            VIN (if applicable)
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('equipmentService.vin')}
          />
          {errors.equipmentService?.vin && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.vin.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Model Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('equipmentService.modelNumber')}
          />
          {errors.equipmentService?.modelNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.modelNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Serial Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('equipmentService.serialNumber')}
          />
          {errors.equipmentService?.serialNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.serialNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Year
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('equipmentService.year')}
          />
          {errors.equipmentService?.year && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.year.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Data Plate Photo
          </label>
          <input
            type="file"
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            {...register('equipmentService.dataPlatePhoto')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Issue Description
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={4}
            {...register('equipmentService.issueDescription')}
          />
          {errors.equipmentService?.issueDescription && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.issueDescription.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Problem Area Photos
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
            {...register('equipmentService.problemPhotos')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Equipment Location
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                value="facility"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('equipmentService.location')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                At our facility
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="customer_facility"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('equipmentService.location')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                At your facility
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="not_sure"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('equipmentService.location')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Not sure yet
              </label>
            </div>
          </div>
          {errors.equipmentService?.location && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.location.message}</p>
          )}

          {location === 'customer_facility' && (
            <div className="mt-4 ml-7 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Facility Address
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  rows={3}
                  placeholder="Please provide the complete facility address"
                  {...register('equipmentService.facilityAddress')}
                />
                {errors.equipmentService?.facilityAddress && (
                  <p className="mt-1 text-sm text-red-600">{errors.equipmentService.facilityAddress.message}</p>
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
                      {...register('equipmentService.hoursOfOperation.open')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Close</label>
                    <input
                      type="time"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('equipmentService.hoursOfOperation.close')}
                    />
                  </div>
                </div>
                {errors.equipmentService?.hoursOfOperation && (
                  <p className="mt-1 text-sm text-red-600">{errors.equipmentService.hoursOfOperation.message}</p>
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
                  {...register('equipmentService.ppeRequirements')}
                />
                {errors.equipmentService?.ppeRequirements && (
                  <p className="mt-1 text-sm text-red-600">{errors.equipmentService.ppeRequirements.message}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Equipment Status
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                value="operating"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('equipmentService.status')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Operating
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="down"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('equipmentService.status')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Down
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="not_sure"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('equipmentService.status')}
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Not sure
              </label>
            </div>
          </div>
          {errors.equipmentService?.status && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.status.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type of Repair Needed
          </label>
          <div className="mt-2 space-y-2">
            {repairTypes.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="radio"
                  value={type.toLowerCase().replace(' ', '_')}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  {...register('equipmentService.repairType')}
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>
          {errors.equipmentService?.repairType && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.repairType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Timeline
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            {...register('equipmentService.timeline')}
          >
            <option value="">Select timeline</option>
            <option value="emergency">Emergency - Need ASAP</option>
            <option value="within_24h">Within 24 hours</option>
            <option value="within_1w">Within 1 week</option>
            <option value="within_2w">Within 2 weeks</option>
            <option value="within_1m">Within 1 month</option>
            <option value="flexible">Flexible timeline</option>
          </select>
          {errors.equipmentService?.timeline && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.timeline.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Special Instructions
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={3}
            {...register('equipmentService.specialInstructions')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parts Needed
          </label>
          <div className="mt-2 space-y-2">
            {partsNeededOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  value={option.toLowerCase().replace(' ', '_')}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  {...register('equipmentService.partsNeeded')}
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
          {errors.equipmentService?.partsNeeded && (
            <p className="mt-1 text-sm text-red-600">{errors.equipmentService.partsNeeded.message}</p>
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