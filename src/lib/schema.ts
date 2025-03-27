import { z } from 'zod';

export const customerInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  projectName: z.string().min(2, 'Project name is required'),
  dateSubmitted: z.date(),
});

export const blueprintQuoteSchema = z.object({
  description: z.string().optional(),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  material: z.string().min(1, 'Material is required'),
  materialSupply: z.enum(['yes', 'customer_supplied', 'not_sure']),
  finishingProcesses: z.array(z.enum(['painting', 'packaging', 'labeling', 'plating', 'welding', 'none', 'other'])),
  otherFinishingProcess: z.string().optional(),
  desiredCompletionDate: z.date(),
  isHardDeadline: z.boolean(),
  quoteCompletionDate: z.date(),
  files: z.array(z.instanceof(File)),
});

export const repairFabricationSchema = z.object({
  description: z.string().min(10, 'Description is required'),
  photos: z.array(z.instanceof(File)).optional(),
  location: z.string().min(1, 'Location is required'),
  workLocation: z.enum(['shop', 'onsite', 'not_sure']),
  facilityAddress: z.string().optional(),
  hoursOfOperation: z.object({
    open: z.string(),
    close: z.string()
  }).optional(),
  ppeRequirements: z.string().optional(),
  material: z.string().min(1, 'Material is required'),
  materialThickness: z.string().optional(),
  materialSupply: z.enum(['yes', 'customer_supplied', 'not_sure']),
  timelineType: z.enum(['emergency', 'specific_date', 'flexible']),
  timeline: z.string().optional(),
  isHardDeadline: z.boolean().optional(),
  additionalNotes: z.string().optional(),
}).refine((data) => {
  if (data.workLocation === 'onsite') {
    return !!data.facilityAddress;
  }
  return true;
}, {
  message: "Facility address is required when work is onsite",
  path: ["facilityAddress"],
});

export const consultationSchema = z.object({
  description: z.string().min(10, 'Description is required'),
  attachments: z.array(z.instanceof(File)).optional(),
  preferredContactMethod: z.enum(['phone', 'email', 'text']),
  bestTimeToContact: z.string().min(1, 'Best time to contact is required'),
});

export const equipmentServiceSchema = z.object({
  equipmentType: z.string().min(1, 'Equipment type is required'),
  vin: z.string().min(1, 'VIN is required'),
  modelNumber: z.string().min(1, 'Model number is required'),
  serialNumber: z.string().min(1, 'Serial number is required'),
  year: z.string().min(4, 'Year is required'),
  dataPlatePhoto: z.instanceof(File).optional(),
  issueDescription: z.string().min(10, 'Issue description is required'),
  problemPhotos: z.array(z.instanceof(File)).optional(),
  location: z.enum(['customer_facility', 'our_facility']),
  facilityAddress: z.string().min(1, 'Facility address is required'),
  hoursOfOperation: z.object({
    open: z.string(),
    close: z.string()
  }).optional(),
  ppeRequirements: z.string().optional(),
  status: z.enum(['operating', 'down', 'not_sure']),
  repairType: z.enum(['welding_fabrication', 'mechanical', 'hydraulic', 'custom_modification', 'maintenance', 'other']),
  timeline: z.string().min(1, 'Timeline is required'),
  specialInstructions: z.string().optional(),
  partsNeeded: z.enum(['customer_supply', 'we_supply', 'not_sure', 'none']),
}).refine((data) => {
  if (data.location === 'customer_facility') {
    return !!data.facilityAddress;
  }
  return true;
}, {
  message: "Facility address is required when equipment is at customer's facility",
  path: ["facilityAddress"],
});

export const formSchema = z.object({
  workType: z.enum(['blueprint_quote', 'repair_fabrication', 'consultation', 'equipment_service']),
  customerInfo: customerInfoSchema,
  blueprintQuote: blueprintQuoteSchema.optional(),
  repairFabrication: repairFabricationSchema.optional(),
  consultation: consultationSchema.optional(),
  equipmentService: equipmentServiceSchema.optional(),
}).refine((data) => {
  switch (data.workType) {
    case 'blueprint_quote':
      return !!data.blueprintQuote;
    case 'repair_fabrication':
      return !!data.repairFabrication;
    case 'consultation':
      return !!data.consultation;
    case 'equipment_service':
      return !!data.equipmentService;
    default:
      return false;
  }
}, {
  message: "The form data for the selected work type is required",
  path: ["workType"],
}); 