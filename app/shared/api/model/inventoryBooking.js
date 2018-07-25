"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InventoryBooking;
(function (InventoryBooking) {
    InventoryBooking.BookingSourceEnum = {
        OTA: 'OTA',
        DirectWebsite: 'DirectWebsite',
        Chatbot: 'Chatbot',
        Referral: 'Referral',
        Walkin: 'Walkin',
        Manual: 'Manual',
        Other: 'Other'
    };
    InventoryBooking.StatusEnum = {
        AwaitingPayment: 'AwaitingPayment',
        PaymentComplete: 'PaymentComplete',
        Cancelled: 'Cancelled',
        Refunded: 'Refunded'
    };
    InventoryBooking.PaymentMethodEnum = {
        Cash: 'Cash',
        Paypal: 'Paypal',
        LoyaltyPoints: 'LoyaltyPoints',
        CreditCard: 'CreditCard',
        DebitCard: 'DebitCard',
        Combination: 'Combination'
    };
})(InventoryBooking = exports.InventoryBooking || (exports.InventoryBooking = {}));
