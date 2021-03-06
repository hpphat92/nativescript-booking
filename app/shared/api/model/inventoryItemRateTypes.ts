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
import { InventoryItem } from './inventoryItem';
import { InventoryItemRateType } from './inventoryItemRateType';


export interface InventoryItemRateTypes {
    itemId?: string;
    rateTypeId?: string;
    inventoryItem?: InventoryItem;
    rateType?: InventoryItemRateType;
    id?: string;
    createdTime?: Date;
    updatedTime?: Date;
}
