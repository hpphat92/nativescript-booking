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
import { Card } from './card';


export interface CardCollectionTemplate {
    name?: string;
    description?: string;
    type?: CardCollectionTemplate.TypeEnum;
    cards?: Array<Card>;
    id?: string;
    createdTime?: Date;
    updatedTime?: Date;
}
export namespace CardCollectionTemplate {
    export type TypeEnum = 'TypeOfBusiness' | 'CountryFAQ';
    export const TypeEnum = {
        TypeOfBusiness: 'TypeOfBusiness' as TypeEnum,
        CountryFAQ: 'CountryFAQ' as TypeEnum
    }
}
