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

import { DataResponseModelListPartnerSettingDTO } from '../model/dataResponseModelListPartnerSettingDTO';
import { DataResponseModelString } from '../model/dataResponseModelString';
import { NoDataResponseModel } from '../model/noDataResponseModel';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TrabbleBotService {

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
     * TrabbleBot_GetAllPartnerSettings
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public trabbleBotGetAllPartnerSettings(observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListPartnerSettingDTO>;
    public trabbleBotGetAllPartnerSettings(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListPartnerSettingDTO>>;
    public trabbleBotGetAllPartnerSettings(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListPartnerSettingDTO>>;
    public trabbleBotGetAllPartnerSettings(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<DataResponseModelListPartnerSettingDTO>(`${this.basePath}/api/trabble-bot/partner-settings`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * TrabbleBot_GetFacebookAccessToken
     * 
     * @param partnerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public trabbleBotGetFacebookAccessToken(partnerId?: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelString>;
    public trabbleBotGetFacebookAccessToken(partnerId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelString>>;
    public trabbleBotGetFacebookAccessToken(partnerId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelString>>;
    public trabbleBotGetFacebookAccessToken(partnerId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (partnerId !== undefined) {
            queryParameters = queryParameters.set('partnerId', <any>partnerId);
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

        return this.httpClient.get<DataResponseModelString>(`${this.basePath}/api/trabble-bot/facebook-accesstoken`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * TrabbleBot_GetPartnerIdByFacebookPage
     * 
     * @param facebookPageId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public trabbleBotGetPartnerIdByFacebookPage(facebookPageId?: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelString>;
    public trabbleBotGetPartnerIdByFacebookPage(facebookPageId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelString>>;
    public trabbleBotGetPartnerIdByFacebookPage(facebookPageId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelString>>;
    public trabbleBotGetPartnerIdByFacebookPage(facebookPageId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (facebookPageId !== undefined) {
            queryParameters = queryParameters.set('facebookPageId', <any>facebookPageId);
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

        return this.httpClient.get<DataResponseModelString>(`${this.basePath}/api/trabble-bot/partner-by-facebook-page`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
