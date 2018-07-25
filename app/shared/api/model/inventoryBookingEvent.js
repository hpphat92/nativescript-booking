"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InventoryBookingEvent;
(function (InventoryBookingEvent) {
    InventoryBookingEvent.BookingEventTypeEnum = {
        BookingPlaced: 'BookingPlaced',
        PaymentReceived: 'PaymentReceived',
        BookingCancellationRequest: 'BookingCancellationRequest',
        BookingCancellationConfirmation: 'BookingCancellationConfirmation',
        BookingConfirmation: 'BookingConfirmation',
        PaymentFailed: 'PaymentFailed',
        UserBookingModification: 'UserBookingModification',
        ManualBookingModification: 'ManualBookingModification',
        AutomaticBookingModification: 'AutomaticBookingModification'
    };
})(InventoryBookingEvent = exports.InventoryBookingEvent || (exports.InventoryBookingEvent = {}));
