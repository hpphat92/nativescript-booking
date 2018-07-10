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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5Qm9va2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludmVudG9yeUJvb2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUErQkEsSUFBaUIsZ0JBQWdCLENBMkJoQztBQTNCRCxXQUFpQixnQkFBZ0I7SUFFaEIsa0NBQWlCLEdBQUc7UUFDN0IsR0FBRyxFQUFFLEtBQTBCO1FBQy9CLGFBQWEsRUFBRSxlQUFvQztRQUNuRCxPQUFPLEVBQUUsU0FBOEI7UUFDdkMsUUFBUSxFQUFFLFVBQStCO1FBQ3pDLE1BQU0sRUFBRSxRQUE2QjtRQUNyQyxNQUFNLEVBQUUsUUFBNkI7UUFDckMsS0FBSyxFQUFFLE9BQTRCO0tBQ3RDLENBQUE7SUFFWSwyQkFBVSxHQUFHO1FBQ3RCLGVBQWUsRUFBRSxpQkFBK0I7UUFDaEQsZUFBZSxFQUFFLGlCQUErQjtRQUNoRCxTQUFTLEVBQUUsV0FBeUI7UUFDcEMsUUFBUSxFQUFFLFVBQXdCO0tBQ3JDLENBQUE7SUFFWSxrQ0FBaUIsR0FBRztRQUM3QixJQUFJLEVBQUUsTUFBMkI7UUFDakMsTUFBTSxFQUFFLFFBQTZCO1FBQ3JDLGFBQWEsRUFBRSxlQUFvQztRQUNuRCxVQUFVLEVBQUUsWUFBaUM7UUFDN0MsU0FBUyxFQUFFLFdBQWdDO1FBQzNDLFdBQVcsRUFBRSxhQUFrQztLQUNsRCxDQUFBO0FBQ0wsQ0FBQyxFQTNCZ0IsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUEyQmhDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUcmFiYmxlIEJhY2tlbmQgQVBJXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IFN3YWdnZXIgQ29kZWdlbiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuKVxuICpcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiB2MVxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSB0aGUgc3dhZ2dlciBjb2RlIGdlbmVyYXRvciBwcm9ncmFtLlxuICogaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbi5naXRcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuaW1wb3J0IHsgSW52ZW50b3J5Qm9va2luZ0V2ZW50IH0gZnJvbSAnLi9pbnZlbnRvcnlCb29raW5nRXZlbnQnO1xuaW1wb3J0IHsgSW52ZW50b3J5SXRlbSB9IGZyb20gJy4vaW52ZW50b3J5SXRlbSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJbnZlbnRvcnlCb29raW5nIHtcbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gICAgbm90ZT86IHN0cmluZztcbiAgICBib29raW5nU291cmNlTmFtZT86IHN0cmluZztcbiAgICB0b3RhbENvc3Q/OiBudW1iZXI7XG4gICAgY3VycmVuY3k/OiBzdHJpbmc7XG4gICAgYm9va2luZ1NvdXJjZT86IEludmVudG9yeUJvb2tpbmcuQm9va2luZ1NvdXJjZUVudW07XG4gICAgc3RhdHVzPzogSW52ZW50b3J5Qm9va2luZy5TdGF0dXNFbnVtO1xuICAgIHBheW1lbnRNZXRob2Q/OiBJbnZlbnRvcnlCb29raW5nLlBheW1lbnRNZXRob2RFbnVtO1xuICAgIGludmVudG9yeUl0ZW1JZD86IHN0cmluZztcbiAgICBpbnZlbnRvcnlJdGVtPzogSW52ZW50b3J5SXRlbTtcbiAgICBldmVudHM/OiBBcnJheTxJbnZlbnRvcnlCb29raW5nRXZlbnQ+O1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGNyZWF0ZWRUaW1lPzogRGF0ZTtcbiAgICB1cGRhdGVkVGltZT86IERhdGU7XG59XG5leHBvcnQgbmFtZXNwYWNlIEludmVudG9yeUJvb2tpbmcge1xuICAgIGV4cG9ydCB0eXBlIEJvb2tpbmdTb3VyY2VFbnVtID0gJ09UQScgfCAnRGlyZWN0V2Vic2l0ZScgfCAnQ2hhdGJvdCcgfCAnUmVmZXJyYWwnIHwgJ1dhbGtpbicgfCAnTWFudWFsJyB8ICdPdGhlcic7XG4gICAgZXhwb3J0IGNvbnN0IEJvb2tpbmdTb3VyY2VFbnVtID0ge1xuICAgICAgICBPVEE6ICdPVEEnIGFzIEJvb2tpbmdTb3VyY2VFbnVtLFxuICAgICAgICBEaXJlY3RXZWJzaXRlOiAnRGlyZWN0V2Vic2l0ZScgYXMgQm9va2luZ1NvdXJjZUVudW0sXG4gICAgICAgIENoYXRib3Q6ICdDaGF0Ym90JyBhcyBCb29raW5nU291cmNlRW51bSxcbiAgICAgICAgUmVmZXJyYWw6ICdSZWZlcnJhbCcgYXMgQm9va2luZ1NvdXJjZUVudW0sXG4gICAgICAgIFdhbGtpbjogJ1dhbGtpbicgYXMgQm9va2luZ1NvdXJjZUVudW0sXG4gICAgICAgIE1hbnVhbDogJ01hbnVhbCcgYXMgQm9va2luZ1NvdXJjZUVudW0sXG4gICAgICAgIE90aGVyOiAnT3RoZXInIGFzIEJvb2tpbmdTb3VyY2VFbnVtXG4gICAgfVxuICAgIGV4cG9ydCB0eXBlIFN0YXR1c0VudW0gPSAnQXdhaXRpbmdQYXltZW50JyB8ICdQYXltZW50Q29tcGxldGUnIHwgJ0NhbmNlbGxlZCcgfCAnUmVmdW5kZWQnO1xuICAgIGV4cG9ydCBjb25zdCBTdGF0dXNFbnVtID0ge1xuICAgICAgICBBd2FpdGluZ1BheW1lbnQ6ICdBd2FpdGluZ1BheW1lbnQnIGFzIFN0YXR1c0VudW0sXG4gICAgICAgIFBheW1lbnRDb21wbGV0ZTogJ1BheW1lbnRDb21wbGV0ZScgYXMgU3RhdHVzRW51bSxcbiAgICAgICAgQ2FuY2VsbGVkOiAnQ2FuY2VsbGVkJyBhcyBTdGF0dXNFbnVtLFxuICAgICAgICBSZWZ1bmRlZDogJ1JlZnVuZGVkJyBhcyBTdGF0dXNFbnVtXG4gICAgfVxuICAgIGV4cG9ydCB0eXBlIFBheW1lbnRNZXRob2RFbnVtID0gJ0Nhc2gnIHwgJ1BheXBhbCcgfCAnTG95YWx0eVBvaW50cycgfCAnQ3JlZGl0Q2FyZCcgfCAnRGViaXRDYXJkJyB8ICdDb21iaW5hdGlvbic7XG4gICAgZXhwb3J0IGNvbnN0IFBheW1lbnRNZXRob2RFbnVtID0ge1xuICAgICAgICBDYXNoOiAnQ2FzaCcgYXMgUGF5bWVudE1ldGhvZEVudW0sXG4gICAgICAgIFBheXBhbDogJ1BheXBhbCcgYXMgUGF5bWVudE1ldGhvZEVudW0sXG4gICAgICAgIExveWFsdHlQb2ludHM6ICdMb3lhbHR5UG9pbnRzJyBhcyBQYXltZW50TWV0aG9kRW51bSxcbiAgICAgICAgQ3JlZGl0Q2FyZDogJ0NyZWRpdENhcmQnIGFzIFBheW1lbnRNZXRob2RFbnVtLFxuICAgICAgICBEZWJpdENhcmQ6ICdEZWJpdENhcmQnIGFzIFBheW1lbnRNZXRob2RFbnVtLFxuICAgICAgICBDb21iaW5hdGlvbjogJ0NvbWJpbmF0aW9uJyBhcyBQYXltZW50TWV0aG9kRW51bVxuICAgIH1cbn1cbiJdfQ==