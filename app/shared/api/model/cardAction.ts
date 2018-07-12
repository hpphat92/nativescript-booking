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


export interface CardAction {
    type?: CardAction.TypeEnum;
    payload?: string;
    buttonTitle?: string;
    actionSettings?: string;
    order?: number;
    blockId?: string;
    parentId?: string;
    parent?: Card;
    childId?: string;
    child?: Card;
    id?: string;
    createdTime?: Date;
    updatedTime?: Date;
}
export namespace CardAction {
    export type TypeEnum = 'WebUrl' | 'FollowOn' | 'Carousel' | 'CardLink' | 'JsonPayload';
    export const TypeEnum = {
        WebUrl: 'WebUrl' as TypeEnum,
        FollowOn: 'FollowOn' as TypeEnum,
        Carousel: 'Carousel' as TypeEnum,
        CardLink: 'CardLink' as TypeEnum,
        JsonPayload: 'JsonPayload' as TypeEnum
    }
}