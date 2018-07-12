/**
 * Trabble Backend API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { InventoryImage } from './inventoryImage';


export interface InventoryItemDTO {
    name: string;
    description?: string;
    minimumAvaialbility?: number;
    availabilityType?: InventoryItemDTO.AvailabilityTypeEnum;
    containerId: string;
    quantity?: number;
    typeId: string;
    capability?: number;
    images?: Array<InventoryImage>;
    rateTypeIds?: Array<string>;
    id?: string;
    createdTime?: Date;
    updatedTime?: Date;
}
export namespace InventoryItemDTO {
    export type AvailabilityTypeEnum = 'Monthly' | 'Daily' | 'Hourly' | 'Minutes';
    export const AvailabilityTypeEnum = {
        Monthly: 'Monthly' as AvailabilityTypeEnum,
        Daily: 'Daily' as AvailabilityTypeEnum,
        Hourly: 'Hourly' as AvailabilityTypeEnum,
        Minutes: 'Minutes' as AvailabilityTypeEnum
    }
}