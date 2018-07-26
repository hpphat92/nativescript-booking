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
var keyword_service_1 = require("./api/keyword.service");
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
                keyword_service_1.KeywordService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyw2Q0FBd0Q7QUFDeEQsaURBQWdEO0FBRWhELHlEQUF1RDtBQUN2RCxpREFBK0M7QUFDL0MsK0VBQTZFO0FBQzdFLHlEQUF1RDtBQUN2RCxtRUFBaUU7QUFDakUsaUVBQStEO0FBQy9ELHVGQUFxRjtBQUNyRiw2REFBMkQ7QUFDM0QscURBQW1EO0FBQ25ELHFFQUFtRTtBQUNuRSxxREFBbUQ7QUFDbkQsbUZBQWlGO0FBQ2pGLGlGQUErRTtBQUMvRSx5RUFBdUU7QUFDdkUseUVBQXVFO0FBQ3ZFLGlFQUErRDtBQUMvRCwrRUFBNkU7QUFDN0UscUVBQW1FO0FBQ25FLHlEQUF1RDtBQUN2RCxtREFBaUQ7QUFDakQseURBQXVEO0FBQ3ZELHVFQUFxRTtBQUNyRSw2RkFBMkY7QUFDM0YsaUZBQStFO0FBQy9FLDJEQUF5RDtBQUN6RCwyREFBeUQ7QUFDekQsbURBQWlEO0FBQ2pELCtEQUE2RDtBQUM3RCx5RUFBdUU7QUFDdkUsaUZBQStFO0FBc0MvRTtJQVFJLG1CQUFxQyxZQUF1QjtRQUN4RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7SUFDTCxDQUFDO2tCQVpRLFNBQVM7SUFDSixpQkFBTyxHQUFyQixVQUFzQixvQkFBeUM7UUFDM0QsTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsNkJBQWEsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsQ0FBRTtTQUM5RSxDQUFBO0lBQ0wsQ0FBQztJQU5RLFNBQVM7UUFwQ3JCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBTyxDQUFFLHFCQUFZLEVBQUUsdUJBQWdCLENBQUU7WUFDaEQsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFPLEVBQUU7WUFDaEIsU0FBUyxFQUFFO2dCQUNULGdDQUFjO2dCQUNkLHdCQUFVO2dCQUNWLHNEQUF5QjtnQkFDekIsZ0NBQWM7Z0JBQ2QsMENBQW1CO2dCQUNuQix3Q0FBa0I7Z0JBQ2xCLDhEQUE2QjtnQkFDN0Isb0NBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWiw0Q0FBb0I7Z0JBQ3BCLDRCQUFZO2dCQUNaLDBEQUEyQjtnQkFDM0Isd0RBQTBCO2dCQUMxQixnREFBc0I7Z0JBQ3RCLGdEQUFzQjtnQkFDdEIsd0NBQWtCO2dCQUNsQixzREFBeUI7Z0JBQ3pCLDRDQUFvQjtnQkFDcEIsZ0NBQWM7Z0JBQ2QsMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2QsOENBQXFCO2dCQUNyQixvRUFBZ0M7Z0JBQ2hDLHdEQUEwQjtnQkFDMUIsa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsMEJBQVc7Z0JBQ1gsc0NBQWlCO2dCQUNqQixnREFBc0I7Z0JBQ3RCLHdEQUEwQjthQUFFO1NBQy9CLENBQUM7UUFTZ0IsbUJBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxlQUFRLEVBQUUsQ0FBQTtpREFBZSxTQUFTO09BUm5ELFNBQVMsQ0FhckI7SUFBRCxnQkFBQzs7Q0FBQSxBQWJELElBYUM7QUFiWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5cbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwaS9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBBc3NvY2lhdGVkUXVlc3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9hcGkvYXNzb2NpYXRlZFF1ZXN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQm9va2luZ1NlcnZpY2UgfSBmcm9tICcuL2FwaS9ib29raW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQm9va2luZ0FkZE9uU2VydmljZSB9IGZyb20gJy4vYXBpL2Jvb2tpbmdBZGRPbi5zZXJ2aWNlJztcbmltcG9ydCB7IENhcmRBY3Rpb25zU2VydmljZSB9IGZyb20gJy4vYXBpL2NhcmRBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZENvbGxlY3Rpb25UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9jYXJkQ29sbGVjdGlvblRlbXBsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZEdyb3VwU2VydmljZSB9IGZyb20gJy4vYXBpL2NhcmRHcm91cC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcmRzU2VydmljZSB9IGZyb20gJy4vYXBpL2NhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVyc2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9jb252ZXJzYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsZXNTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvZmlsZXMuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZDb250YWluZXJGYWNpbGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZDb250YWluZXJGYWNpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEludkl0ZW1BdmFpbGFiaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52SXRlbUF2YWlsYWJpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEludkl0ZW1GYWNpbGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZJdGVtRmFjaWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZJdGVtUmF0ZVR5cGVTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52SXRlbVJhdGVUeXBlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52SXRlbVR5cGVTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52SXRlbVR5cGUuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlbnRvcnlDb250YWluZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW52ZW50b3J5Q29udGFpbmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52ZW50b3J5SXRlbVNlcnZpY2UgfSBmcm9tICcuL2FwaS9pbnZlbnRvcnlJdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5d29yZFNlcnZpY2UgfSBmcm9tICcuL2FwaS9rZXl3b3JkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90ZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9ub3RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFydG5lclNlcnZpY2UgfSBmcm9tICcuL2FwaS9wYXJ0bmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFydG5lclNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcGFydG5lclNldHRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJ0bmVyU2V0dGluZ0RlZmluaXRpb25zU2VydmljZSB9IGZyb20gJy4vYXBpL3BhcnRuZXJTZXR0aW5nRGVmaW5pdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJ0bmVyU2V0dGluZ0dyb3VwU2VydmljZSB9IGZyb20gJy4vYXBpL3BhcnRuZXJTZXR0aW5nR3JvdXAuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9wcm9maWxlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFFuYU1ha2VyU2VydmljZSB9IGZyb20gJy4vYXBpL3FuYU1ha2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVzdFNlcnZpY2UgfSBmcm9tICcuL2FwaS90ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhYmJsZUJvdFNlcnZpY2UgfSBmcm9tICcuL2FwaS90cmFiYmxlQm90LnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhYmJsZU1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4vYXBpL3RyYWJibGVNZXNzYWdlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFVuYW5zd2VyZWRRdWVzdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvdW5hbnN3ZXJlZFF1ZXN0aW9ucy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogICAgICBbIENvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiAgICAgIFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBY2NvdW50U2VydmljZSxcbiAgICBBcHBTZXJ2aWNlLFxuICAgIEFzc29jaWF0ZWRRdWVzdGlvblNlcnZpY2UsXG4gICAgQm9va2luZ1NlcnZpY2UsXG4gICAgQm9va2luZ0FkZE9uU2VydmljZSxcbiAgICBDYXJkQWN0aW9uc1NlcnZpY2UsXG4gICAgQ2FyZENvbGxlY3Rpb25UZW1wbGF0ZVNlcnZpY2UsXG4gICAgQ2FyZEdyb3VwU2VydmljZSxcbiAgICBDYXJkc1NlcnZpY2UsXG4gICAgQ29udmVyc2F0aW9uc1NlcnZpY2UsXG4gICAgRmlsZXNTZXJ2aWNlLFxuICAgIEludkNvbnRhaW5lckZhY2lsaXR5U2VydmljZSxcbiAgICBJbnZJdGVtQXZhaWxhYmlsaXR5U2VydmljZSxcbiAgICBJbnZJdGVtRmFjaWxpdHlTZXJ2aWNlLFxuICAgIEludkl0ZW1SYXRlVHlwZVNlcnZpY2UsXG4gICAgSW52SXRlbVR5cGVTZXJ2aWNlLFxuICAgIEludmVudG9yeUNvbnRhaW5lclNlcnZpY2UsXG4gICAgSW52ZW50b3J5SXRlbVNlcnZpY2UsXG4gICAgS2V5d29yZFNlcnZpY2UsXG4gICAgTm90ZVNlcnZpY2UsXG4gICAgUGFydG5lclNlcnZpY2UsXG4gICAgUGFydG5lclNldHRpbmdTZXJ2aWNlLFxuICAgIFBhcnRuZXJTZXR0aW5nRGVmaW5pdGlvbnNTZXJ2aWNlLFxuICAgIFBhcnRuZXJTZXR0aW5nR3JvdXBTZXJ2aWNlLFxuICAgIFByb2ZpbGVzU2VydmljZSxcbiAgICBRbmFNYWtlclNlcnZpY2UsXG4gICAgVGVzdFNlcnZpY2UsXG4gICAgVHJhYmJsZUJvdFNlcnZpY2UsXG4gICAgVHJhYmJsZU1lc3NhZ2VzU2VydmljZSxcbiAgICBVbmFuc3dlcmVkUXVlc3Rpb25zU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb25GYWN0b3J5OiAoKSA9PiBDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQXBpTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogQ29uZmlndXJhdGlvbiwgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnkgfSBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBcGlNb2R1bGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcGlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=