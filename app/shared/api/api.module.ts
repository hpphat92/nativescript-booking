import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AccountService } from './api/account.service';
import { AppService } from './api/app.service';
import { AssociatedQuestionService } from './api/associatedQuestion.service';
import { BookingService } from './api/booking.service';
import { BookingAddOnService } from './api/bookingAddOn.service';
import { CardActionsService } from './api/cardActions.service';
import { CardCollectionTemplateService } from './api/cardCollectionTemplate.service';
import { CardGroupService } from './api/cardGroup.service';
import { CardsService } from './api/cards.service';
import { ConversationsService } from './api/conversations.service';
import { FilesService } from './api/files.service';
import { InvContainerFacilityService } from './api/invContainerFacility.service';
import { InvItemAvailabilityService } from './api/invItemAvailability.service';
import { InvItemFacilityService } from './api/invItemFacility.service';
import { InvItemRateTypeService } from './api/invItemRateType.service';
import { InvItemTypeService } from './api/invItemType.service';
import { InventoryContainerService } from './api/inventoryContainer.service';
import { InventoryItemService } from './api/inventoryItem.service';
import { NoteService } from './api/note.service';
import { PartnerService } from './api/partner.service';
import { PartnerSettingService } from './api/partnerSetting.service';
import { PartnerSettingDefinitionsService } from './api/partnerSettingDefinitions.service';
import { PartnerSettingGroupService } from './api/partnerSettingGroup.service';
import { ProfilesService } from './api/profiles.service';
import { QnaMakerService } from './api/qnaMaker.service';
import { TestService } from './api/test.service';
import { TrabbleBotService } from './api/trabbleBot.service';
import { TrabbleMessagesService } from './api/trabbleMessages.service';
import { UnansweredQuestionsService } from './api/unansweredQuestions.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AccountService,
    AppService,
    AssociatedQuestionService,
    BookingService,
    BookingAddOnService,
    CardActionsService,
    CardCollectionTemplateService,
    CardGroupService,
    CardsService,
    ConversationsService,
    FilesService,
    InvContainerFacilityService,
    InvItemAvailabilityService,
    InvItemFacilityService,
    InvItemRateTypeService,
    InvItemTypeService,
    InventoryContainerService,
    InventoryItemService,
    NoteService,
    PartnerService,
    PartnerSettingService,
    PartnerSettingDefinitionsService,
    PartnerSettingGroupService,
    ProfilesService,
    QnaMakerService,
    TestService,
    TrabbleBotService,
    TrabbleMessagesService,
    UnansweredQuestionsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
