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
import { AssociatedQuestionDTO } from './associatedQuestionDTO';


export interface DataResponseModelListAssociatedQuestionDTO {
    status?: number;
    data?: Array<AssociatedQuestionDTO>;
    message?: string;
}