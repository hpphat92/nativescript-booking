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


export interface InventoryItemContainerDTO {
    name: string;
    description?: string;
    partnerId: string;
    type?: InventoryItemContainerDTO.TypeEnum;
    images?: Array<InventoryImage>;
    longitude?: number;
    latitude?: number;
    country?: string;
    city?: string;
    neighbourhood?: string;
    id?: string;
    createdTime?: Date;
    updatedTime?: Date;
}
export namespace InventoryItemContainerDTO {
    export type TypeEnum = 'Hotel' | 'Hostel' | 'HourlyFacility';
    export const TypeEnum = {
        Hotel: 'Hotel' as TypeEnum,
        Hostel: 'Hostel' as TypeEnum,
        HourlyFacility: 'HourlyFacility' as TypeEnum
    }
}
