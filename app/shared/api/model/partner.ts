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
import { CardGroup } from './cardGroup';
import { Conversation } from './conversation';
import { InventoryItemContainer } from './inventoryItemContainer';
import { PartnerSetting } from './partnerSetting';
import { UserPartner } from './userPartner';


export interface Partner {
    name?: string;
    imageUrl?: string;
    organisation?: string;
    botType?: string;
    countryOfOperation?: string;
    userPartnerRoles?: Array<UserPartner>;
    cardGroups?: Array<CardGroup>;
    inventoryItemContainers?: Array<InventoryItemContainer>;
    conversations?: Array<Conversation>;
    partnerSettings?: Array<PartnerSetting>;
    id?: string;
    createdTime?: Date;
    updatedTime?: Date;
}
