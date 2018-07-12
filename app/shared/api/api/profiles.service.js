"use strict";
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
/* tslint:disable:no-unused-variable member-ordering */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var ProfilesService = /** @class */ (function () {
    function ProfilesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://trabbletestapp.azurewebsites.net';
        this.defaultHeaders = new http_1.HttpHeaders();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ProfilesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ProfilesService.prototype.profilesChangePassword = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/profiles/change-password", model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesService.prototype.profilesGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/profiles", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesService.prototype.profilesUpdate = function (model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/profiles", model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(1, core_1.Optional()), tslib_1.__param(1, core_1.Inject(variables_1.BASE_PATH)), tslib_1.__param(2, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, String, configuration_1.Configuration])
    ], ProfilesService);
    return ProfilesService;
}());
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCx1REFBdUQ7OztBQUV2RCxzQ0FBa0Y7QUFDbEYsNkNBQ3lGO0FBVXpGLDBDQUFpRjtBQUNqRixrREFBcUY7QUFJckY7SUFNSSx5QkFBc0IsVUFBc0IsRUFBZ0MsUUFBZ0IsRUFBYyxhQUE0QjtRQUFoSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmxDLGFBQVEsR0FBRywwQ0FBMEMsQ0FBQztRQUN6RCxtQkFBYyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFHdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4RSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHdDQUFjLEdBQXRCLFVBQXVCLFFBQWtCO1FBQ3JDLElBQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDO1FBQ25DLEdBQUcsQ0FBQyxDQUFnQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVE7WUFBdkIsSUFBSSxPQUFPLGlCQUFBO1lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztTQUNKO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBYU0sZ0RBQXNCLEdBQTdCLFVBQThCLEtBQTJCLEVBQUUsT0FBcUIsRUFBRSxjQUErQjtRQUF0RCx3QkFBQSxFQUFBLGdCQUFxQjtRQUFFLCtCQUFBLEVBQUEsc0JBQStCO1FBRTdHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsbUNBQW1DO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBRUQsaUNBQWlDO1FBQ2pDLElBQUksaUJBQWlCLEdBQWE7WUFDOUIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixXQUFXO1NBQ2QsQ0FBQztRQUNGLElBQUksd0JBQXdCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1RyxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCx1Q0FBdUM7UUFDdkMsSUFBSSxRQUFRLEdBQWE7WUFDckIsNkJBQTZCO1lBQzdCLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gscUJBQXFCO1NBQ3hCLENBQUM7UUFDRixJQUFJLHVCQUF1QixHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RHLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBeUIsSUFBSSxDQUFDLFFBQVEsa0NBQStCLEVBQzNGLEtBQUssRUFDTDtZQUNJLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWU7WUFDbkQsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLGNBQWM7U0FDakMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQVdNLHFDQUFXLEdBQWxCLFVBQW1CLE9BQXFCLEVBQUUsY0FBK0I7UUFBdEQsd0JBQUEsRUFBQSxnQkFBcUI7UUFBRSwrQkFBQSxFQUFBLHNCQUErQjtRQUVyRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLG1DQUFtQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQztRQUVELGlDQUFpQztRQUNqQyxJQUFJLGlCQUFpQixHQUFhO1lBQzlCLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsV0FBVztTQUNkLENBQUM7UUFDRixJQUFJLHdCQUF3QixHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUcsRUFBRSxDQUFDLENBQUMsd0JBQXdCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsdUNBQXVDO1FBQ3ZDLElBQUksUUFBUSxHQUFhLEVBQ3hCLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQXNDLElBQUksQ0FBQyxRQUFRLGtCQUFlLEVBQ3hGO1lBQ0ksZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBWU0sd0NBQWMsR0FBckIsVUFBc0IsS0FBMEIsRUFBRSxPQUFxQixFQUFFLGNBQStCO1FBQXRELHdCQUFBLEVBQUEsZ0JBQXFCO1FBQUUsK0JBQUEsRUFBQSxzQkFBK0I7UUFFcEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsQyxtQ0FBbUM7UUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxpQkFBaUIsR0FBYTtZQUM5QixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLFdBQVc7U0FDZCxDQUFDO1FBQ0YsSUFBSSx3QkFBd0IsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVHLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELHVDQUF1QztRQUN2QyxJQUFJLFFBQVEsR0FBYTtZQUNyQiw2QkFBNkI7WUFDN0Isa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxxQkFBcUI7U0FDeEIsQ0FBQztRQUNGLElBQUksdUJBQXVCLEdBQXNCLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEcsRUFBRSxDQUFDLENBQUMsdUJBQXVCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUF5QixJQUFJLENBQUMsUUFBUSxrQkFBZSxFQUMzRSxLQUFLLEVBQ0w7WUFDSSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFsTFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO1FBT3NDLG1CQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUMsbUJBQUEsYUFBTSxDQUFDLHFCQUFTLENBQUMsQ0FBQSxFQUFvQixtQkFBQSxlQUFRLEVBQUUsQ0FBQTtpREFBdkUsaUJBQVUsVUFBNkUsNkJBQWE7T0FON0gsZUFBZSxDQW9MM0I7SUFBRCxzQkFBQztDQUFBLEFBcExELElBb0xDO0FBcExZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRyYWJibGUgQmFja2VuZCBBUElcclxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBTd2FnZ2VyIENvZGVnZW4gaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbilcclxuICpcclxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IHYxXHJcbiAqIFxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXHJcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9lbmNvZGVyJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gJy4uL21vZGVsL2NoYW5nZVBhc3N3b3JkTW9kZWwnO1xyXG5pbXBvcnQgeyBEYXRhUmVzcG9uc2VNb2RlbFByb2ZpbGVSZXNNb2RlbCB9IGZyb20gJy4uL21vZGVsL2RhdGFSZXNwb25zZU1vZGVsUHJvZmlsZVJlc01vZGVsJztcclxuaW1wb3J0IHsgTm9EYXRhUmVzcG9uc2VNb2RlbCB9IGZyb20gJy4uL21vZGVsL25vRGF0YVJlc3BvbnNlTW9kZWwnO1xyXG5pbXBvcnQgeyBQcm9maWxlVXBkYXRlTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9wcm9maWxlVXBkYXRlTW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb25maWd1cmF0aW9uJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlc1NlcnZpY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwczovL3RyYWJibGV0ZXN0YXBwLmF6dXJld2Vic2l0ZXMubmV0JztcclxuICAgIHB1YmxpYyBkZWZhdWx0SGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBAT3B0aW9uYWwoKUBJbmplY3QoQkFTRV9QQVRIKSBiYXNlUGF0aDogc3RyaW5nLCBAT3B0aW9uYWwoKSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKGJhc2VQYXRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoIHx8IGNvbmZpZ3VyYXRpb24uYmFzZVBhdGggfHwgdGhpcy5iYXNlUGF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gY29uc3VtZXMgc3RyaW5nW10gbWltZS10eXBlc1xyXG4gICAgICogQHJldHVybiB0cnVlOiBjb25zdW1lcyBjb250YWlucyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIGZhbHNlOiBvdGhlcndpc2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjYW5Db25zdW1lRm9ybShjb25zdW1lczogc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG4gICAgICAgIGZvciAobGV0IGNvbnN1bWUgb2YgY29uc3VtZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm0gPT09IGNvbnN1bWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9maWxlc19DaGFuZ2VQYXNzd29yZFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwgXHJcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxyXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJvZmlsZXNDaGFuZ2VQYXNzd29yZChtb2RlbD86IENoYW5nZVBhc3N3b3JkTW9kZWwsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8Tm9EYXRhUmVzcG9uc2VNb2RlbD47XHJcbiAgICBwdWJsaWMgcHJvZmlsZXNDaGFuZ2VQYXNzd29yZChtb2RlbD86IENoYW5nZVBhc3N3b3JkTW9kZWwsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxOb0RhdGFSZXNwb25zZU1vZGVsPj47XHJcbiAgICBwdWJsaWMgcHJvZmlsZXNDaGFuZ2VQYXNzd29yZChtb2RlbD86IENoYW5nZVBhc3N3b3JkTW9kZWwsIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8Tm9EYXRhUmVzcG9uc2VNb2RlbD4+O1xyXG4gICAgcHVibGljIHByb2ZpbGVzQ2hhbmdlUGFzc3dvcmQobW9kZWw/OiBDaGFuZ2VQYXNzd29yZE1vZGVsLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQmVhcmVyKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIkF1dGhvcml6YXRpb25cIl0pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJBdXRob3JpemF0aW9uXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICd0ZXh0L3BsYWluJyxcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAndGV4dC9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KFwiQWNjZXB0XCIsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBsZXQgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJyxcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAndGV4dC9qc29uJyxcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL18qK2pzb24nXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6c3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckNvbnRlbnRUeXBlKGNvbnN1bWVzKTtcclxuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBodHRwQ29udGVudFR5cGVTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dDxOb0RhdGFSZXNwb25zZU1vZGVsPihgJHt0aGlzLmJhc2VQYXRofS9hcGkvcHJvZmlsZXMvY2hhbmdlLXBhc3N3b3JkYCxcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvZmlsZXNfR2V0XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwcm9maWxlc0dldChvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPERhdGFSZXNwb25zZU1vZGVsUHJvZmlsZVJlc01vZGVsPjtcclxuICAgIHB1YmxpYyBwcm9maWxlc0dldChvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8RGF0YVJlc3BvbnNlTW9kZWxQcm9maWxlUmVzTW9kZWw+PjtcclxuICAgIHB1YmxpYyBwcm9maWxlc0dldChvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PERhdGFSZXNwb25zZU1vZGVsUHJvZmlsZVJlc01vZGVsPj47XHJcbiAgICBwdWJsaWMgcHJvZmlsZXNHZXQob2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKEJlYXJlcikgcmVxdWlyZWRcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJBdXRob3JpemF0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiQXV0aG9yaXphdGlvblwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAndGV4dC9wbGFpbicsXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ3RleHQvanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChcIkFjY2VwdFwiLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICAgICAgbGV0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxEYXRhUmVzcG9uc2VNb2RlbFByb2ZpbGVSZXNNb2RlbD4oYCR7dGhpcy5iYXNlUGF0aH0vYXBpL3Byb2ZpbGVzYCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9maWxlc19VcGRhdGVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIG1vZGVsIFxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHByb2ZpbGVzVXBkYXRlKG1vZGVsPzogUHJvZmlsZVVwZGF0ZU1vZGVsLCBvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPE5vRGF0YVJlc3BvbnNlTW9kZWw+O1xyXG4gICAgcHVibGljIHByb2ZpbGVzVXBkYXRlKG1vZGVsPzogUHJvZmlsZVVwZGF0ZU1vZGVsLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Tm9EYXRhUmVzcG9uc2VNb2RlbD4+O1xyXG4gICAgcHVibGljIHByb2ZpbGVzVXBkYXRlKG1vZGVsPzogUHJvZmlsZVVwZGF0ZU1vZGVsLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PE5vRGF0YVJlc3BvbnNlTW9kZWw+PjtcclxuICAgIHB1YmxpYyBwcm9maWxlc1VwZGF0ZShtb2RlbD86IFByb2ZpbGVVcGRhdGVNb2RlbCwgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKEJlYXJlcikgcmVxdWlyZWRcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJBdXRob3JpemF0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiQXV0aG9yaXphdGlvblwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAndGV4dC9wbGFpbicsXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ3RleHQvanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChcIkFjY2VwdFwiLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICAgICAgbGV0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbicsXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ3RleHQvanNvbicsXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9fKitqc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOnN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJDb250ZW50VHlwZShjb25zdW1lcyk7XHJcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wdXQ8Tm9EYXRhUmVzcG9uc2VNb2RlbD4oYCR7dGhpcy5iYXNlUGF0aH0vYXBpL3Byb2ZpbGVzYCxcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=