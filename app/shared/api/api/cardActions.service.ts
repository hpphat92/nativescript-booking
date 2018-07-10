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

import { CardActionDTO } from '../model/cardActionDTO';
import { CardActionOrderDTO } from '../model/cardActionOrderDTO';
import { DataResponseModelBaseModel } from '../model/dataResponseModelBaseModel';
import { DataResponseModelListBaseModel } from '../model/dataResponseModelListBaseModel';
import { NoDataResponseModel } from '../model/noDataResponseModel';
import { Operation } from '../model/operation';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CardActionsService {

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
     * CardActions_Create
     * 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsCreate(model?: CardActionDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public cardActionsCreate(model?: CardActionDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public cardActionsCreate(model?: CardActionDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public cardActionsCreate(model?: CardActionDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<NoDataResponseModel>(`${this.basePath}/api/CardActions`,
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
     * CardActions_Delete
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public cardActionsDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public cardActionsDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public cardActionsDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cardActionsDelete.');
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

        return this.httpClient.delete<NoDataResponseModel>(`${this.basePath}/api/CardActions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * CardActions_Get
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelBaseModel>;
    public cardActionsGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelBaseModel>>;
    public cardActionsGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelBaseModel>>;
    public cardActionsGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cardActionsGet.');
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

        return this.httpClient.get<DataResponseModelBaseModel>(`${this.basePath}/api/CardActions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * CardActions_GetAll
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsGetAll(observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListBaseModel>;
    public cardActionsGetAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListBaseModel>>;
    public cardActionsGetAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListBaseModel>>;
    public cardActionsGetAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<DataResponseModelListBaseModel>(`${this.basePath}/api/CardActions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * CardActions_Patch
     * 
     * @param id 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsPatch(id: string, model?: Array<Operation>, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public cardActionsPatch(id: string, model?: Array<Operation>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public cardActionsPatch(id: string, model?: Array<Operation>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public cardActionsPatch(id: string, model?: Array<Operation>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cardActionsPatch.');
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

        return this.httpClient.patch<NoDataResponseModel>(`${this.basePath}/api/CardActions/${encodeURIComponent(String(id))}`,
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
     * CardActions_UpSert
     * 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsUpSert(model?: CardActionDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public cardActionsUpSert(model?: CardActionDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public cardActionsUpSert(model?: CardActionDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public cardActionsUpSert(model?: CardActionDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<NoDataResponseModel>(`${this.basePath}/api/CardActions/upsert`,
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
     * CardActions_Update
     * 
     * @param id 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsUpdate(id: string, model?: CardActionDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public cardActionsUpdate(id: string, model?: CardActionDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public cardActionsUpdate(id: string, model?: CardActionDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public cardActionsUpdate(id: string, model?: CardActionDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cardActionsUpdate.');
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

        return this.httpClient.put<NoDataResponseModel>(`${this.basePath}/api/CardActions/${encodeURIComponent(String(id))}`,
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
     * CardActions_UpdateOrder
     * 
     * @param newActionOrders 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cardActionsUpdateOrder(newActionOrders?: Array<CardActionOrderDTO>, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public cardActionsUpdateOrder(newActionOrders?: Array<CardActionOrderDTO>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public cardActionsUpdateOrder(newActionOrders?: Array<CardActionOrderDTO>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public cardActionsUpdateOrder(newActionOrders?: Array<CardActionOrderDTO>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.put<NoDataResponseModel>(`${this.basePath}/api/CardActions/update-order`,
            newActionOrders,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
