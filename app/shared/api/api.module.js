"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var configuration_1 = require("./configuration");
var account_service_1 = require("./api/account.service");
var app_service_1 = require("./api/app.service");
var associatedQuestion_service_1 = require("./api/associatedQuestion.service");
var booking_service_1 = require("./api/booking.service");
var bookingAddOn_service_1 = require("./api/bookingAddOn.service");
var cardActions_service_1 = require("./api/cardActions.service");
var cardCollectionTemplate_service_1 = require("./api/cardCollectionTemplate.service");
var cardGroup_service_1 = require("./api/cardGroup.service");
var cards_service_1 = require("./api/cards.service");
var conversations_service_1 = require("./api/conversations.service");
var files_service_1 = require("./api/files.service");
var invContainerFacility_service_1 = require("./api/invContainerFacility.service");
var invItemAvailability_service_1 = require("./api/invItemAvailability.service");
var invItemFacility_service_1 = require("./api/invItemFacility.service");
var invItemRateType_service_1 = require("./api/invItemRateType.service");
var invItemType_service_1 = require("./api/invItemType.service");
var inventoryContainer_service_1 = require("./api/inventoryContainer.service");
var inventoryItem_service_1 = require("./api/inventoryItem.service");
var note_service_1 = require("./api/note.service");
var partner_service_1 = require("./api/partner.service");
var partnerSetting_service_1 = require("./api/partnerSetting.service");
var partnerSettingDefinitions_service_1 = require("./api/partnerSettingDefinitions.service");
var partnerSettingGroup_service_1 = require("./api/partnerSettingGroup.service");
var profiles_service_1 = require("./api/profiles.service");
var qnaMaker_service_1 = require("./api/qnaMaker.service");
var test_service_1 = require("./api/test.service");
var trabbleBot_service_1 = require("./api/trabbleBot.service");
var trabbleMessages_service_1 = require("./api/trabbleMessages.service");
var unansweredQuestions_service_1 = require("./api/unansweredQuestions.service");
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: configuration_1.Configuration, useFactory: configurationFactory }]
        };
    };
    ApiModule = ApiModule_1 = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpClientModule],
            declarations: [],
            exports: [],
            providers: [
                account_service_1.AccountService,
                app_service_1.AppService,
                associatedQuestion_service_1.AssociatedQuestionService,
                booking_service_1.BookingService,
                bookingAddOn_service_1.BookingAddOnService,
                cardActions_service_1.CardActionsService,
                cardCollectionTemplate_service_1.CardCollectionTemplateService,
                cardGroup_service_1.CardGroupService,
                cards_service_1.CardsService,
                conversations_service_1.ConversationsService,
                files_service_1.FilesService,
                invContainerFacility_service_1.InvContainerFacilityService,
                invItemAvailability_service_1.InvItemAvailabilityService,
                invItemFacility_service_1.InvItemFacilityService,
                invItemRateType_service_1.InvItemRateTypeService,
                invItemType_service_1.InvItemTypeService,
                inventoryContainer_service_1.InventoryContainerService,
                inventoryItem_service_1.InventoryItemService,
                note_service_1.NoteService,
                partner_service_1.PartnerService,
                partnerSetting_service_1.PartnerSettingService,
                partnerSettingDefinitions_service_1.PartnerSettingDefinitionsService,
                partnerSettingGroup_service_1.PartnerSettingGroupService,
                profiles_service_1.ProfilesService,
                qnaMaker_service_1.QnaMakerService,
                test_service_1.TestService,
                trabbleBot_service_1.TrabbleBotService,
                trabbleMessages_service_1.TrabbleMessagesService,
                unansweredQuestions_service_1.UnansweredQuestionsService
            ]
        }),
        tslib_1.__param(0, core_1.Optional()), tslib_1.__param(0, core_1.SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ApiModule])
    ], ApiModule);
    return ApiModule;
    var ApiModule_1;
}());
exports.ApiModule = ApiModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyw2Q0FBd0Q7QUFDeEQsaURBQWdEO0FBRWhELHlEQUF1RDtBQUN2RCxpREFBK0M7QUFDL0MsK0VBQTZFO0FBQzdFLHlEQUF1RDtBQUN2RCxtRUFBaUU7QUFDakUsaUVBQStEO0FBQy9ELHVGQUFxRjtBQUNyRiw2REFBMkQ7QUFDM0QscURBQW1EO0FBQ25ELHFFQUFtRTtBQUNuRSxxREFBbUQ7QUFDbkQsbUZBQWlGO0FBQ2pGLGlGQUErRTtBQUMvRSx5RUFBdUU7QUFDdkUseUVBQXVFO0FBQ3ZFLGlFQUErRDtBQUMvRCwrRUFBNkU7QUFDN0UscUVBQW1FO0FBQ25FLG1EQUFpRDtBQUNqRCx5REFBdUQ7QUFDdkQsdUVBQXFFO0FBQ3JFLDZGQUEyRjtBQUMzRixpRkFBK0U7QUFDL0UsMkRBQXlEO0FBQ3pELDJEQUF5RDtBQUN6RCxtREFBaUQ7QUFDakQsK0RBQTZEO0FBQzdELHlFQUF1RTtBQUN2RSxpRkFBK0U7QUFxQy9FO0lBUUksbUJBQXFDLFlBQXVCO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7UUFDckYsQ0FBQztJQUNMLENBQUM7a0JBWlEsU0FBUztJQUNKLGlCQUFPLEdBQXJCLFVBQXNCLG9CQUF5QztRQUMzRCxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSw2QkFBYSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxDQUFFO1NBQzlFLENBQUE7SUFDTCxDQUFDO0lBTlEsU0FBUztRQW5DckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFPLENBQUUscUJBQVksRUFBRSx1QkFBZ0IsQ0FBRTtZQUNoRCxZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQU8sRUFBRTtZQUNoQixTQUFTLEVBQUU7Z0JBQ1QsZ0NBQWM7Z0JBQ2Qsd0JBQVU7Z0JBQ1Ysc0RBQXlCO2dCQUN6QixnQ0FBYztnQkFDZCwwQ0FBbUI7Z0JBQ25CLHdDQUFrQjtnQkFDbEIsOERBQTZCO2dCQUM3QixvQ0FBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLDRDQUFvQjtnQkFDcEIsNEJBQVk7Z0JBQ1osMERBQTJCO2dCQUMzQix3REFBMEI7Z0JBQzFCLGdEQUFzQjtnQkFDdEIsZ0RBQXNCO2dCQUN0Qix3Q0FBa0I7Z0JBQ2xCLHNEQUF5QjtnQkFDekIsNENBQW9CO2dCQUNwQiwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCw4Q0FBcUI7Z0JBQ3JCLG9FQUFnQztnQkFDaEMsd0RBQTBCO2dCQUMxQixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZiwwQkFBVztnQkFDWCxzQ0FBaUI7Z0JBQ2pCLGdEQUFzQjtnQkFDdEIsd0RBQTBCO2FBQUU7U0FDL0IsQ0FBQztRQVNnQixtQkFBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLGVBQVEsRUFBRSxDQUFBO2lEQUFlLFNBQVM7T0FSbkQsU0FBUyxDQWFyQjtJQUFELGdCQUFDOztDQUFBLEFBYkQsSUFhQztBQWJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FwaS9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBpL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IEFzc29jaWF0ZWRRdWVzdGlvblNlcnZpY2UgfSBmcm9tICcuL2FwaS9hc3NvY2lhdGVkUXVlc3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJy4vYXBpL2Jvb2tpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBCb29raW5nQWRkT25TZXJ2aWNlIH0gZnJvbSAnLi9hcGkvYm9va2luZ0FkZE9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZEFjdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvY2FyZEFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkQ29sbGVjdGlvblRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vYXBpL2NhcmRDb2xsZWN0aW9uVGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvY2FyZEdyb3VwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZHNTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvY2FyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJzYXRpb25zU2VydmljZSB9IGZyb20gJy4vYXBpL2NvbnZlcnNhdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBGaWxlc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9maWxlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEludkNvbnRhaW5lckZhY2lsaXR5U2VydmljZSB9IGZyb20gJy4vYXBpL2ludkNvbnRhaW5lckZhY2lsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52SXRlbUF2YWlsYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZJdGVtQXZhaWxhYmlsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52SXRlbUZhY2lsaXR5U2VydmljZSB9IGZyb20gJy4vYXBpL2ludkl0ZW1GYWNpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEludkl0ZW1SYXRlVHlwZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZJdGVtUmF0ZVR5cGUuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZJdGVtVHlwZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZJdGVtVHlwZS5zZXJ2aWNlJztcbmltcG9ydCB7IEludmVudG9yeUNvbnRhaW5lclNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZlbnRvcnlDb250YWluZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlbnRvcnlJdGVtU2VydmljZSB9IGZyb20gJy4vYXBpL2ludmVudG9yeUl0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RlU2VydmljZSB9IGZyb20gJy4vYXBpL25vdGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJ0bmVyU2VydmljZSB9IGZyb20gJy4vYXBpL3BhcnRuZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJ0bmVyU2V0dGluZ1NlcnZpY2UgfSBmcm9tICcuL2FwaS9wYXJ0bmVyU2V0dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhcnRuZXJTZXR0aW5nRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcGFydG5lclNldHRpbmdEZWZpbml0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhcnRuZXJTZXR0aW5nR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcGFydG5lclNldHRpbmdHcm91cC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVzU2VydmljZSB9IGZyb20gJy4vYXBpL3Byb2ZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUW5hTWFrZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcW5hTWFrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUZXN0U2VydmljZSB9IGZyb20gJy4vYXBpL3Rlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBUcmFiYmxlQm90U2VydmljZSB9IGZyb20gJy4vYXBpL3RyYWJibGVCb3Quc2VydmljZSc7XG5pbXBvcnQgeyBUcmFiYmxlTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvdHJhYmJsZU1lc3NhZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVW5hbnN3ZXJlZFF1ZXN0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2FwaS91bmFuc3dlcmVkUXVlc3Rpb25zLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiAgICAgIFsgQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6ICAgICAgW10sXG4gIHByb3ZpZGVyczogW1xuICAgIEFjY291bnRTZXJ2aWNlLFxuICAgIEFwcFNlcnZpY2UsXG4gICAgQXNzb2NpYXRlZFF1ZXN0aW9uU2VydmljZSxcbiAgICBCb29raW5nU2VydmljZSxcbiAgICBCb29raW5nQWRkT25TZXJ2aWNlLFxuICAgIENhcmRBY3Rpb25zU2VydmljZSxcbiAgICBDYXJkQ29sbGVjdGlvblRlbXBsYXRlU2VydmljZSxcbiAgICBDYXJkR3JvdXBTZXJ2aWNlLFxuICAgIENhcmRzU2VydmljZSxcbiAgICBDb252ZXJzYXRpb25zU2VydmljZSxcbiAgICBGaWxlc1NlcnZpY2UsXG4gICAgSW52Q29udGFpbmVyRmFjaWxpdHlTZXJ2aWNlLFxuICAgIEludkl0ZW1BdmFpbGFiaWxpdHlTZXJ2aWNlLFxuICAgIEludkl0ZW1GYWNpbGl0eVNlcnZpY2UsXG4gICAgSW52SXRlbVJhdGVUeXBlU2VydmljZSxcbiAgICBJbnZJdGVtVHlwZVNlcnZpY2UsXG4gICAgSW52ZW50b3J5Q29udGFpbmVyU2VydmljZSxcbiAgICBJbnZlbnRvcnlJdGVtU2VydmljZSxcbiAgICBOb3RlU2VydmljZSxcbiAgICBQYXJ0bmVyU2VydmljZSxcbiAgICBQYXJ0bmVyU2V0dGluZ1NlcnZpY2UsXG4gICAgUGFydG5lclNldHRpbmdEZWZpbml0aW9uc1NlcnZpY2UsXG4gICAgUGFydG5lclNldHRpbmdHcm91cFNlcnZpY2UsXG4gICAgUHJvZmlsZXNTZXJ2aWNlLFxuICAgIFFuYU1ha2VyU2VydmljZSxcbiAgICBUZXN0U2VydmljZSxcbiAgICBUcmFiYmxlQm90U2VydmljZSxcbiAgICBUcmFiYmxlTWVzc2FnZXNTZXJ2aWNlLFxuICAgIFVuYW5zd2VyZWRRdWVzdGlvbnNTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbkZhY3Rvcnk6ICgpID0+IENvbmZpZ3VyYXRpb24pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBDb25maWd1cmF0aW9uLCB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSB9IF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFwaU1vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwaU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IHlvdXIgYmFzZSBBcHBNb2R1bGUgb25seS4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==