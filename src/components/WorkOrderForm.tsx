'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/lib/schema';
import type { FormData } from '@/types/form';
import CustomerInfoStep from './form-steps/CustomerInfoStep';
import WorkTypeStep from './form-steps/WorkTypeStep';
import BlueprintQuoteStep from './form-steps/BlueprintQuoteStep';
import RepairFabricationStep from './form-steps/RepairFabricationStep';
import ConsultationStep from './form-steps/ConsultationStep';
import EquipmentServiceStep from './form-steps/EquipmentServiceStep';

export default function WorkOrderForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Customer Info + Work Type + Specific Form

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerInfo: {
        dateSubmitted: new Date(),
      },
      workType: undefined,
      blueprintQuote: {
        description: '',
        quantity: 1,
        material: '',
        materialSupply: undefined,
        finishingProcesses: [],
        desiredCompletionDate: new Date(),
        isHardDeadline: undefined,
        quoteCompletionDate: new Date(),
        files: [],
      },
      repairFabrication: {
        description: '',
        location: '',
        workLocation: undefined,
        material: '',
        materialThickness: '',
        materialSupply: undefined,
        timeline: '',
        additionalNotes: '',
        photos: [],
      },
      consultation: {
        description: '',
        preferredContactMethod: undefined,
        bestTimeToContact: '',
      },
      equipmentService: {
        equipmentType: '',
        vin: '',
        modelNumber: '',
        serialNumber: '',
        year: '',
        issueDescription: '',
        location: undefined,
        status: undefined,
        repairType: undefined,
        timeline: '',
        specialInstructions: '',
        partsNeeded: undefined,
        problemPhotos: [],
      },
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // TODO: Handle form submission
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CustomerInfoStep form={form} onNext={nextStep} />;
      case 2:
        return <WorkTypeStep form={form} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        const workType = form.watch('workType');
        switch (workType) {
          case 'blueprint_quote':
            return <BlueprintQuoteStep form={form} onNext={onSubmit} onPrev={prevStep} />;
          case 'repair_fabrication':
            return <RepairFabricationStep form={form} onNext={onSubmit} onPrev={prevStep} />;
          case 'consultation':
            return <ConsultationStep form={form} onNext={onSubmit} onPrev={prevStep} />;
          case 'equipment_service':
            return <EquipmentServiceStep form={form} onNext={onSubmit} onPrev={prevStep} />;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">New Work Order</h1>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {renderStep()}
      </form>
    </div>
  );
} 