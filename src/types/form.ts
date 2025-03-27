import { z } from 'zod';
import { formSchema } from '@/lib/schema';

export type FormData = z.infer<typeof formSchema>;

export type WorkType = FormData['workType'];

export type CustomerInfo = FormData['customerInfo'];

export type BlueprintQuoteForm = FormData['blueprintQuote'];

export type RepairFabricationForm = FormData['repairFabrication'];

export type ConsultationForm = FormData['consultation'];

export type EquipmentServiceForm = FormData['equipmentService'];

export type MaterialSupply = 'yes' | 'no' | 'customer_supplied' | 'not_sure';

export type FinishingProcess = 
  | 'painting'
  | 'packaging'
  | 'labeling'
  | 'plating'
  | 'welding'
  | 'none'
  | 'other';

export type EquipmentLocation = 'facility' | 'shop' | 'not_sure';

export type EquipmentStatus = 'operating' | 'down' | 'not_sure';

export type RepairType = 
  | 'welding_fabrication'
  | 'mechanical'
  | 'hydraulic'
  | 'custom_modification'
  | 'maintenance'
  | 'other';

export type PartsNeeded = 'customer_supply' | 'we_supply' | 'not_sure' | 'none'; 