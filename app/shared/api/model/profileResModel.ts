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
import { PartnerResModel } from './partnerResModel';


export interface ProfileResModel {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    socialId?: string;
    avatarUrl?: string;
    partners?: Array<PartnerResModel>;
    roles?: Array<string>;
}