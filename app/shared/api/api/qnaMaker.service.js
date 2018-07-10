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
var QnaMakerService = /** @class */ (function () {
    function QnaMakerService(httpClient, basePath, configuration) {
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
    QnaMakerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    QnaMakerService.prototype.qnaMakerGetAllKnowledgeBases = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/QnaMaker", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    QnaMakerService.prototype.qnaMakerGetAnswerForBot = function (partnerId, question, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (partnerId === null || partnerId === undefined) {
            throw new Error('Required parameter partnerId was null or undefined when calling qnaMakerGetAnswerForBot.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
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
        return this.httpClient.post(this.basePath + "/api/QnaMaker/bot-generate-answer/" + encodeURIComponent(String(partnerId)), question, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    QnaMakerService.prototype.qnaMakerGetAnswers = function (partnerId, model, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (partnerId === null || partnerId === undefined) {
            throw new Error('Required parameter partnerId was null or undefined when calling qnaMakerGetAnswers.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
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
        return this.httpClient.post(this.basePath + "/api/QnaMaker/generate-answers/" + encodeURIComponent(String(partnerId)), model, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    QnaMakerService.prototype.qnaMakerPopulateKnowledgeBase = function (partnerId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (partnerId === null || partnerId === undefined) {
            throw new Error('Required parameter partnerId was null or undefined when calling qnaMakerPopulateKnowledgeBase.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/QnaMaker/populate/" + encodeURIComponent(String(partnerId)), null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    QnaMakerService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(1, core_1.Optional()), tslib_1.__param(1, core_1.Inject(variables_1.BASE_PATH)), tslib_1.__param(2, core_1.Optional()),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, String, configuration_1.Configuration])
    ], QnaMakerService);
    return QnaMakerService;
}());
exports.QnaMakerService = QnaMakerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicW5hTWFrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInFuYU1ha2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCx1REFBdUQ7OztBQUV2RCxzQ0FBa0Y7QUFDbEYsNkNBQ3lGO0FBV3pGLDBDQUFpRjtBQUNqRixrREFBcUY7QUFJckY7SUFNSSx5QkFBc0IsVUFBc0IsRUFBZ0MsUUFBZ0IsRUFBYyxhQUE0QjtRQUFoSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmxDLGFBQVEsR0FBRywwQ0FBMEMsQ0FBQztRQUN6RCxtQkFBYyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFHdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4RSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHdDQUFjLEdBQXRCLFVBQXVCLFFBQWtCO1FBQ3JDLElBQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDO1FBQ25DLEdBQUcsQ0FBQyxDQUFnQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVE7WUFBdkIsSUFBSSxPQUFPLGlCQUFBO1lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztTQUNKO1FBQ0QsTUFBTSxDQUFD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QkFBQSxlQUFRLEVBQUUsQ0FBQTtpREFBdkUsaUJBQVUsVUFBNkUsNkJBQWE7T0FON0gsZUFBZSxDQW9PM0I7SUFBRCxzQkFBQztDQUFBLEFBcE9ELElBb09DO0FBcE9ZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRyYWJibGUgQmFja2VuZCBBUElcclxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBTd2FnZ2VyIENvZGVnZW4gaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbilcclxuICpcclxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IHYxXHJcbiAqIFxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXHJcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9lbmNvZGVyJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVJlc3BvbnNlTW9kZWxMaXN0QW5zd2VyTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9kYXRhUmVzcG9uc2VNb2RlbExpc3RBbnN3ZXJNb2RlbCc7XHJcbmltcG9ydCB7IERhdGFSZXNwb25zZU1vZGVsVHJhYmJsZUJvdEFuc3dlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvZGF0YVJlc3BvbnNlTW9kZWxUcmFiYmxlQm90QW5zd2VyTW9kZWwnO1xyXG5pbXBvcnQgeyBOb0RhdGFSZXNwb25zZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbm9EYXRhUmVzcG9uc2VNb2RlbCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9xdWVzdGlvbk1vZGVsJztcclxuaW1wb3J0IHsgVHJhYmJsZUJvdFF1ZXN0aW9uTW9kZWwgfSBmcm9tICcuLi9tb2RlbC90cmFiYmxlQm90UXVlc3Rpb25Nb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBCQVNFX1BBVEgsIENPTExFQ1RJT05fRk9STUFUUyB9ICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vdmFyaWFibGVzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFFuYU1ha2VyU2VydmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGJhc2VQYXRoID0gJ2h0dHBzOi8vdHJhYmJsZXRlc3RhcHAuYXp1cmV3ZWJzaXRlcy5uZXQnO1xyXG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIEBPcHRpb25hbCgpQEluamVjdChCQVNFX1BBVEgpIGJhc2VQYXRoOiBzdHJpbmcsIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBpZiAoYmFzZVBhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXHJcbiAgICAgKiBAcmV0dXJuIHRydWU6IGNvbnN1bWVzIGNvbnRhaW5zICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgZmFsc2U6IG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcbiAgICAgICAgZm9yIChsZXQgY29uc3VtZSBvZiBjb25zdW1lcykge1xyXG4gICAgICAgICAgICBpZiAoZm9ybSA9PT0gY29uc3VtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFFuYU1ha2VyX0dldEFsbEtub3dsZWRnZUJhc2VzXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBxbmFNYWtlckdldEFsbEtub3dsZWRnZUJhc2VzKG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8Tm9EYXRhUmVzcG9uc2VNb2RlbD47XHJcbiAgICBwdWJsaWMgcW5hTWFrZXJHZXRBbGxLbm93bGVkZ2VCYXNlcyhvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Tm9EYXRhUmVzcG9uc2VNb2RlbD4+O1xyXG4gICAgcHVibGljIHFuYU1ha2VyR2V0QWxsS25vd2xlZGdlQmFzZXMob2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxOb0RhdGFSZXNwb25zZU1vZGVsPj47XHJcbiAgICBwdWJsaWMgcW5hTWFrZXJHZXRBbGxLbm93bGVkZ2VCYXNlcyhvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQmVhcmVyKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIkF1dGhvcml6YXRpb25cIl0pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJBdXRob3JpemF0aW9uXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KFwiQWNjZXB0XCIsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBsZXQgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PE5vRGF0YVJlc3BvbnNlTW9kZWw+KGAke3RoaXMuYmFzZVBhdGh9L2FwaS9RbmFNYWtlcmAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUW5hTWFrZXJfR2V0QW5zd2VyRm9yQm90XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwYXJ0bmVySWQgXHJcbiAgICAgKiBAcGFyYW0gcXVlc3Rpb24gXHJcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxyXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcW5hTWFrZXJHZXRBbnN3ZXJGb3JCb3QocGFydG5lcklkOiBzdHJpbmcsIHF1ZXN0aW9uPzogVHJhYmJsZUJvdFF1ZXN0aW9uTW9kZWwsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8RGF0YVJlc3BvbnNlTW9kZWxUcmFiYmxlQm90QW5zd2VyTW9kZWw+O1xyXG4gICAgcHVibGljIHFuYU1ha2VyR2V0QW5zd2VyRm9yQm90KHBhcnRuZXJJZDogc3RyaW5nLCBxdWVzdGlvbj86IFRyYWJibGVCb3RRdWVzdGlvbk1vZGVsLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8RGF0YVJlc3BvbnNlTW9kZWxUcmFiYmxlQm90QW5zd2VyTW9kZWw+PjtcclxuICAgIHB1YmxpYyBxbmFNYWtlckdldEFuc3dlckZvckJvdChwYXJ0bmVySWQ6IHN0cmluZywgcXVlc3Rpb24/OiBUcmFiYmxlQm90UXVlc3Rpb25Nb2RlbCwgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxEYXRhUmVzcG9uc2VNb2RlbFRyYWJibGVCb3RBbnN3ZXJNb2RlbD4+O1xyXG4gICAgcHVibGljIHFuYU1ha2VyR2V0QW5zd2VyRm9yQm90KHBhcnRuZXJJZDogc3RyaW5nLCBxdWVzdGlvbj86IFRyYWJibGVCb3RRdWVzdGlvbk1vZGVsLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBpZiAocGFydG5lcklkID09PSBudWxsIHx8IHBhcnRuZXJJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHBhcnRuZXJJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHFuYU1ha2VyR2V0QW5zd2VyRm9yQm90LicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQmVhcmVyKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIkF1dGhvcml6YXRpb25cIl0pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJBdXRob3JpemF0aW9uXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KFwiQWNjZXB0XCIsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBsZXQgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJyxcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAndGV4dC9qc29uJyxcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL18qK2pzb24nXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6c3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckNvbnRlbnRUeXBlKGNvbnN1bWVzKTtcclxuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBodHRwQ29udGVudFR5cGVTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8RGF0YVJlc3BvbnNlTW9kZWxUcmFiYmxlQm90QW5zd2VyTW9kZWw+KGAke3RoaXMuYmFzZVBhdGh9L2FwaS9RbmFNYWtlci9ib3QtZ2VuZXJhdGUtYW5zd2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhwYXJ0bmVySWQpKX1gLFxyXG4gICAgICAgICAgICBxdWVzdGlvbixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBRbmFNYWtlcl9HZXRBbnN3ZXJzXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwYXJ0bmVySWQgXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwgXHJcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxyXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcW5hTWFrZXJHZXRBbnN3ZXJzKHBhcnRuZXJJZDogc3RyaW5nLCBtb2RlbD86IFF1ZXN0aW9uTW9kZWwsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8RGF0YVJlc3BvbnNlTW9kZWxMaXN0QW5zd2VyTW9kZWw+O1xyXG4gICAgcHVibGljIHFuYU1ha2VyR2V0QW5zd2VycyhwYXJ0bmVySWQ6IHN0cmluZywgbW9kZWw/OiBRdWVzdGlvbk1vZGVsLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8RGF0YVJlc3BvbnNlTW9kZWxMaXN0QW5zd2VyTW9kZWw+PjtcclxuICAgIHB1YmxpYyBxbmFNYWtlckdldEFuc3dlcnMocGFydG5lcklkOiBzdHJpbmcsIG1vZGVsPzogUXVlc3Rpb25Nb2RlbCwgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxEYXRhUmVzcG9uc2VNb2RlbExpc3RBbnN3ZXJNb2RlbD4+O1xyXG4gICAgcHVibGljIHFuYU1ha2VyR2V0QW5zd2VycyhwYXJ0bmVySWQ6IHN0cmluZywgbW9kZWw/OiBRdWVzdGlvbk1vZGVsLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBpZiAocGFydG5lcklkID09PSBudWxsIHx8IHBhcnRuZXJJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHBhcnRuZXJJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHFuYU1ha2VyR2V0QW5zd2Vycy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKEJlYXJlcikgcmVxdWlyZWRcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJBdXRob3JpemF0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiQXV0aG9yaXphdGlvblwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChcIkFjY2VwdFwiLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICAgICAgbGV0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbicsXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ3RleHQvanNvbicsXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9fKitqc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOnN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJDb250ZW50VHlwZShjb25zdW1lcyk7XHJcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PERhdGFSZXNwb25zZU1vZGVsTGlzdEFuc3dlck1vZGVsPihgJHt0aGlzLmJhc2VQYXRofS9hcGkvUW5hTWFrZXIvZ2VuZXJhdGUtYW5zd2Vycy8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocGFydG5lcklkKSl9YCxcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUW5hTWFrZXJfUG9wdWxhdGVLbm93bGVkZ2VCYXNlXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwYXJ0bmVySWQgXHJcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxyXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcW5hTWFrZXJQb3B1bGF0ZUtub3dsZWRnZUJhc2UocGFydG5lcklkOiBzdHJpbmcsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8Tm9EYXRhUmVzcG9uc2VNb2RlbD47XHJcbiAgICBwdWJsaWMgcW5hTWFrZXJQb3B1bGF0ZUtub3dsZWRnZUJhc2UocGFydG5lcklkOiBzdHJpbmcsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxOb0RhdGFSZXNwb25zZU1vZGVsPj47XHJcbiAgICBwdWJsaWMgcW5hTWFrZXJQb3B1bGF0ZUtub3dsZWRnZUJhc2UocGFydG5lcklkOiBzdHJpbmcsIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8Tm9EYXRhUmVzcG9uc2VNb2RlbD4+O1xyXG4gICAgcHVibGljIHFuYU1ha2VyUG9wdWxhdGVLbm93bGVkZ2VCYXNlKHBhcnRuZXJJZDogc3RyaW5nLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBpZiAocGFydG5lcklkID09PSBudWxsIHx8IHBhcnRuZXJJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHBhcnRuZXJJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHFuYU1ha2VyUG9wdWxhdGVLbm93bGVkZ2VCYXNlLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQmVhcmVyKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIkF1dGhvcml6YXRpb25cIl0pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJBdXRob3JpemF0aW9uXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KFwiQWNjZXB0XCIsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBsZXQgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxOb0RhdGFSZXNwb25zZU1vZGVsPihgJHt0aGlzLmJhc2VQYXRofS9hcGkvUW5hTWFrZXIvcG9wdWxhdGUvJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHBhcnRuZXJJZCkpfWAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=