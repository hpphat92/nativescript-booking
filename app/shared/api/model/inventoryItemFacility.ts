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


export interface InventoryItemFacility {
    name?: string;
    description?: string;
    complimentary?: boolean;
    price?: number;
    type?: string;
    itemId?: string;
    item?: InventoryItem;
    id?: string;
    createdTime?: Date;
    updatedTime?: Date;
}
