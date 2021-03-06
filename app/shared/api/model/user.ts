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
import { App } from './app';
import { InventoryBooking } from './inventoryBooking';
import { Note } from './note';
import { UserPartner } from './userPartner';


export interface User {
    firstName?: string;
    lastName?: string;
    socialId?: string;
    avatarUrl?: string;
    passportNumber?: string;
    birthdate?: Date;
    gender?: User.GenderEnum;
    nationality?: string;
    firstAddress?: string;
    secondAddress?: string;
    postalCode?: string;
    notes?: Array<Note>;
    apps?: Array<App>;
    createdTime?: Date;
    updatedTime?: Date;
    userPartnerRoles?: Array<UserPartner>;
    inventoryBookings?: Array<InventoryBooking>;
    id?: string;
    userName?: string;
    normalizedUserName?: string;
    email?: string;
    normalizedEmail?: string;
    emailConfirmed?: boolean;
    passwordHash?: string;
    securityStamp?: string;
    concurrencyStamp?: string;
    phoneNumber?: string;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: Date;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
}
export namespace User {
    export type GenderEnum = 'Male' | 'Female';
    export const GenderEnum = {
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    }
}
