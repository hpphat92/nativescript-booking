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
