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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { DataResponseModelBaseModel } from '../model/dataResponseModelBaseModel';
import { DataResponseModelListBaseModel } from '../model/dataResponseModelListBaseModel';
import { NoDataResponseModel } from '../model/noDataResponseModel';
import { Operation } from '../model/operation';
import { PartnerSettingDefinitionDTO } from '../model/partnerSettingDefinitionDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PartnerSettingDefinitionsService {

    protected basePath = 'https://trabbletestapp.azurewebsites.net';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPartnerSettingDefinitionsByIdDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public apiPartnerSettingDefinitionsByIdDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsByIdDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsByIdDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiPartnerSettingDefinitionsByIdDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<NoDataResponseModel>(`${this.basePath}/api/PartnerSettingDefinitions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPartnerSettingDefinitionsByIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelBaseModel>;
    public apiPartnerSettingDefinitionsByIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelBaseModel>>;
    public apiPartnerSettingDefinitionsByIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelBaseModel>>;
    public apiPartnerSettingDefinitionsByIdGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiPartnerSettingDefinitionsByIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<DataResponseModelBaseModel>(`${this.basePath}/api/PartnerSettingDefinitions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPartnerSettingDefinitionsByIdPatch(id: string, model?: Array<Operation>, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public apiPartnerSettingDefinitionsByIdPatch(id: string, model?: Array<Operation>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsByIdPatch(id: string, model?: Array<Operation>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsByIdPatch(id: string, model?: Array<Operation>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiPartnerSettingDefinitionsByIdPatch.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.patch<NoDataResponseModel>(`${this.basePath}/api/PartnerSettingDefinitions/${encodeURIComponent(String(id))}`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPartnerSettingDefinitionsByIdPut(id: string, model?: PartnerSettingDefinitionDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public apiPartnerSettingDefinitionsByIdPut(id: string, model?: PartnerSettingDefinitionDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsByIdPut(id: string, model?: PartnerSettingDefinitionDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsByIdPut(id: string, model?: PartnerSettingDefinitionDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiPartnerSettingDefinitionsByIdPut.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<NoDataResponseModel>(`${this.basePath}/api/PartnerSettingDefinitions/${encodeURIComponent(String(id))}`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPartnerSettingDefinitionsGet(observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListBaseModel>;
    public apiPartnerSettingDefinitionsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListBaseModel>>;
    public apiPartnerSettingDefinitionsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListBaseModel>>;
    public apiPartnerSettingDefinitionsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<DataResponseModelListBaseModel>(`${this.basePath}/api/PartnerSettingDefinitions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPartnerSettingDefinitionsPost(model?: PartnerSettingDefinitionDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public apiPartnerSettingDefinitionsPost(model?: PartnerSettingDefinitionDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsPost(model?: PartnerSettingDefinitionDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsPost(model?: PartnerSettingDefinitionDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<NoDataResponseModel>(`${this.basePath}/api/PartnerSettingDefinitions`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPartnerSettingDefinitionsUpsertPost(model?: PartnerSettingDefinitionDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public apiPartnerSettingDefinitionsUpsertPost(model?: PartnerSettingDefinitionDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsUpsertPost(model?: PartnerSettingDefinitionDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public apiPartnerSettingDefinitionsUpsertPost(model?: PartnerSettingDefinitionDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<NoDataResponseModel>(`${this.basePath}/api/PartnerSettingDefinitions/upsert`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
