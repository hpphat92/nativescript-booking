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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyw2Q0FBd0Q7QUFDeEQsaURBQWdEO0FBRWhELHlEQUF1RDtBQUN2RCxpREFBK0M7QUFDL0MsK0VBQTZFO0FBQzdFLHlEQUF1RDtBQUN2RCxtRUFBaUU7QUFDakUsaUVBQStEO0FBQy9ELHVGQUFxRjtBQUNyRiw2REFBMkQ7QUFDM0QscURBQW1EO0FBQ25ELHFFQUFtRTtBQUNuRSxxREFBbUQ7QUFDbkQsbUZBQWlGO0FBQ2pGLGlGQUErRTtBQUMvRSx5RUFBdUU7QUFDdkUseUVBQXVFO0FBQ3ZFLGlFQUErRDtBQUMvRCwrRUFBNkU7QUFDN0UscUVBQW1FO0FBQ25FLG1EQUFpRDtBQUNqRCx5REFBdUQ7QUFDdkQsdUVBQXFFO0FBQ3JFLDZGQUEyRjtBQUMzRixpRkFBK0U7QUFDL0UsMkRBQXlEO0FBQ3pELDJEQUF5RDtBQUN6RCxtREFBaUQ7QUFDakQsK0RBQTZEO0FBQzdELHlFQUF1RTtBQUN2RSxpRkFBK0U7QUFxQy9FO0lBUUksbUJBQXFDLFlBQXVCO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7UUFDckYsQ0FBQztJQUNMLENBQUM7a0JBWlEsU0FBUztJQUNKLGlCQUFPLEdBQXJCLFVBQXNCLG9CQUF5QztRQUMzRCxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSw2QkFBYSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxDQUFFO1NBQzlFLENBQUE7SUFDTCxDQUFDO0lBTlEsU0FBUztRQW5DckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFPLENBQUUscUJBQVksRUFBRSx1QkFBZ0IsQ0FBRTtZQUNoRCxZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQU8sRUFBRTtZQUNoQixTQUFTLEVBQUU7Z0JBQ1QsZ0NBQWM7Z0JBQ2Qsd0JBQVU7Z0JBQ1Ysc0RBQXlCO2dCQUN6QixnQ0FBYztnQkFDZCwwQ0FBbUI7Z0JBQ25CLHdDQUFrQjtnQkFDbEIsOERBQTZCO2dCQUM3QixvQ0FBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLDRDQUFvQjtnQkFDcEIsNEJBQVk7Z0JBQ1osMERBQTJCO2dCQUMzQix3REFBMEI7Z0JBQzFCLGdEQUFzQjtnQkFDdEIsZ0RBQXNCO2dCQUN0Qix3Q0FBa0I7Z0JBQ2xCLHNEQUF5QjtnQkFDekIsNENBQW9CO2dCQUNwQiwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCw4Q0FBcUI7Z0JBQ3JCLG9FQUFnQztnQkFDaEMsd0RBQTBCO2dCQUMxQixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZiwwQkFBVztnQkFDWCxzQ0FBaUI7Z0JBQ2pCLGdEQUFzQjtnQkFDdEIsd0RBQTBCO2FBQUU7U0FDL0IsQ0FBQztRQVNnQixtQkFBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLGVBQVEsRUFBRSxDQUFBO2lEQUFlLFNBQVM7T0FSbkQsU0FBUyxDQWFyQjtJQUFELGdCQUFDOztDQUFBLEFBYkQsSUFhQztBQWJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvYWNjb3VudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBpL2FwcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXNzb2NpYXRlZFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4vYXBpL2Fzc29jaWF0ZWRRdWVzdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQm9va2luZ1NlcnZpY2UgfSBmcm9tICcuL2FwaS9ib29raW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCb29raW5nQWRkT25TZXJ2aWNlIH0gZnJvbSAnLi9hcGkvYm9va2luZ0FkZE9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJkQWN0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9jYXJkQWN0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FyZENvbGxlY3Rpb25UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9jYXJkQ29sbGVjdGlvblRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJkR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvY2FyZEdyb3VwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJkc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9jYXJkcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udmVyc2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9jb252ZXJzYXRpb25zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWxlc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9maWxlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW52Q29udGFpbmVyRmFjaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52Q29udGFpbmVyRmFjaWxpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IEludkl0ZW1BdmFpbGFiaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52SXRlbUF2YWlsYWJpbGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW52SXRlbUZhY2lsaXR5U2VydmljZSB9IGZyb20gJy4vYXBpL2ludkl0ZW1GYWNpbGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW52SXRlbVJhdGVUeXBlU2VydmljZSB9IGZyb20gJy4vYXBpL2ludkl0ZW1SYXRlVHlwZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW52SXRlbVR5cGVTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52SXRlbVR5cGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEludmVudG9yeUNvbnRhaW5lclNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZlbnRvcnlDb250YWluZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEludmVudG9yeUl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52ZW50b3J5SXRlbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90ZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9ub3RlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJ0bmVyU2VydmljZSB9IGZyb20gJy4vYXBpL3BhcnRuZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhcnRuZXJTZXR0aW5nU2VydmljZSB9IGZyb20gJy4vYXBpL3BhcnRuZXJTZXR0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJ0bmVyU2V0dGluZ0RlZmluaXRpb25zU2VydmljZSB9IGZyb20gJy4vYXBpL3BhcnRuZXJTZXR0aW5nRGVmaW5pdGlvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhcnRuZXJTZXR0aW5nR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcGFydG5lclNldHRpbmdHcm91cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZXNTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcHJvZmlsZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFFuYU1ha2VyU2VydmljZSB9IGZyb20gJy4vYXBpL3FuYU1ha2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZXN0U2VydmljZSB9IGZyb20gJy4vYXBpL3Rlc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYWJibGVCb3RTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvdHJhYmJsZUJvdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhYmJsZU1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4vYXBpL3RyYWJibGVNZXNzYWdlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVW5hbnN3ZXJlZFF1ZXN0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2FwaS91bmFuc3dlcmVkUXVlc3Rpb25zLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiAgICAgIFsgQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBleHBvcnRzOiAgICAgIFtdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQWNjb3VudFNlcnZpY2UsXHJcbiAgICBBcHBTZXJ2aWNlLFxyXG4gICAgQXNzb2NpYXRlZFF1ZXN0aW9uU2VydmljZSxcclxuICAgIEJvb2tpbmdTZXJ2aWNlLFxyXG4gICAgQm9va2luZ0FkZE9uU2VydmljZSxcclxuICAgIENhcmRBY3Rpb25zU2VydmljZSxcclxuICAgIENhcmRDb2xsZWN0aW9uVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgQ2FyZEdyb3VwU2VydmljZSxcclxuICAgIENhcmRzU2VydmljZSxcclxuICAgIENvbnZlcnNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgRmlsZXNTZXJ2aWNlLFxyXG4gICAgSW52Q29udGFpbmVyRmFjaWxpdHlTZXJ2aWNlLFxyXG4gICAgSW52SXRlbUF2YWlsYWJpbGl0eVNlcnZpY2UsXHJcbiAgICBJbnZJdGVtRmFjaWxpdHlTZXJ2aWNlLFxyXG4gICAgSW52SXRlbVJhdGVUeXBlU2VydmljZSxcclxuICAgIEludkl0ZW1UeXBlU2VydmljZSxcclxuICAgIEludmVudG9yeUNvbnRhaW5lclNlcnZpY2UsXHJcbiAgICBJbnZlbnRvcnlJdGVtU2VydmljZSxcclxuICAgIE5vdGVTZXJ2aWNlLFxyXG4gICAgUGFydG5lclNlcnZpY2UsXHJcbiAgICBQYXJ0bmVyU2V0dGluZ1NlcnZpY2UsXHJcbiAgICBQYXJ0bmVyU2V0dGluZ0RlZmluaXRpb25zU2VydmljZSxcclxuICAgIFBhcnRuZXJTZXR0aW5nR3JvdXBTZXJ2aWNlLFxyXG4gICAgUHJvZmlsZXNTZXJ2aWNlLFxyXG4gICAgUW5hTWFrZXJTZXJ2aWNlLFxyXG4gICAgVGVzdFNlcnZpY2UsXHJcbiAgICBUcmFiYmxlQm90U2VydmljZSxcclxuICAgIFRyYWJibGVNZXNzYWdlc1NlcnZpY2UsXHJcbiAgICBVbmFuc3dlcmVkUXVlc3Rpb25zU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGlNb2R1bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb25GYWN0b3J5OiAoKSA9PiBDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEFwaU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogQ29uZmlndXJhdGlvbiwgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnkgfSBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFwaU1vZHVsZSkge1xyXG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcGlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==