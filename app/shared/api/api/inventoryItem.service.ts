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
import { DataResponseModelListEnumReponseModel } from '../model/dataResponseModelListEnumReponseModel';
import { DataResponseModelListInventoryItemDTO } from '../model/dataResponseModelListInventoryItemDTO';
import { DataResponseModelListInventoryItemFacilityDTO } from '../model/dataResponseModelListInventoryItemFacilityDTO';
import { InventoryItemDTO } from '../model/inventoryItemDTO';
import { NoDataResponseModel } from '../model/noDataResponseModel';
import { Operation } from '../model/operation';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class InventoryItemService {

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
     * InventoryItem_Create
     * 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemCreate(model?: InventoryItemDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public inventoryItemCreate(model?: InventoryItemDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public inventoryItemCreate(model?: InventoryItemDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public inventoryItemCreate(model?: InventoryItemDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<NoDataResponseModel>(`${this.basePath}/api/inventory-items`,
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
     * InventoryItem_Delete
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public inventoryItemDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public inventoryItemDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public inventoryItemDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryItemDelete.');
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

        return this.httpClient.delete<NoDataResponseModel>(`${this.basePath}/api/inventory-items/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * InventoryItem_Get
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelBaseModel>;
    public inventoryItemGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelBaseModel>>;
    public inventoryItemGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelBaseModel>>;
    public inventoryItemGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryItemGet.');
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

        return this.httpClient.get<DataResponseModelBaseModel>(`${this.basePath}/api/inventory-items/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * InventoryItem_GetAll
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemGetAll(observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListBaseModel>;
    public inventoryItemGetAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListBaseModel>>;
    public inventoryItemGetAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListBaseModel>>;
    public inventoryItemGetAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<DataResponseModelListBaseModel>(`${this.basePath}/api/inventory-items`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * InventoryItem_GetAvailabilityTypes
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemGetAvailabilityTypes(observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListEnumReponseModel>;
    public inventoryItemGetAvailabilityTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListEnumReponseModel>>;
    public inventoryItemGetAvailabilityTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListEnumReponseModel>>;
    public inventoryItemGetAvailabilityTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<DataResponseModelListEnumReponseModel>(`${this.basePath}/api/inventory-items/availability-types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * InventoryItem_GetByContainer
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemGetByContainer(id: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListInventoryItemDTO>;
    public inventoryItemGetByContainer(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListInventoryItemDTO>>;
    public inventoryItemGetByContainer(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListInventoryItemDTO>>;
    public inventoryItemGetByContainer(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryItemGetByContainer.');
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

        return this.httpClient.get<DataResponseModelListInventoryItemDTO>(`${this.basePath}/api/inventory-items/container/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * InventoryItem_GetFacilities
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemGetFacilities(id: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListInventoryItemFacilityDTO>;
    public inventoryItemGetFacilities(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListInventoryItemFacilityDTO>>;
    public inventoryItemGetFacilities(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListInventoryItemFacilityDTO>>;
    public inventoryItemGetFacilities(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryItemGetFacilities.');
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

        return this.httpClient.get<DataResponseModelListInventoryItemFacilityDTO>(`${this.basePath}/api/inventory-items/${encodeURIComponent(String(id))}/facilities`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * InventoryItem_Patch
     * 
     * @param id 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemPatch(id: string, model?: Array<Operation>, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public inventoryItemPatch(id: string, model?: Array<Operation>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public inventoryItemPatch(id: string, model?: Array<Operation>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public inventoryItemPatch(id: string, model?: Array<Operation>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryItemPatch.');
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

        return this.httpClient.patch<NoDataResponseModel>(`${this.basePath}/api/inventory-items/${encodeURIComponent(String(id))}`,
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
     * InventoryItem_Search
     * 
     * @param textSearch 
     * @param typeId 
     * @param availabilityType 
     * @param containerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemSearch(textSearch?: string, typeId?: string, availabilityType?: string, containerId?: string, observe?: 'body', reportProgress?: boolean): Observable<DataResponseModelListInventoryItemDTO>;
    public inventoryItemSearch(textSearch?: string, typeId?: string, availabilityType?: string, containerId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataResponseModelListInventoryItemDTO>>;
    public inventoryItemSearch(textSearch?: string, typeId?: string, availabilityType?: string, containerId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataResponseModelListInventoryItemDTO>>;
    public inventoryItemSearch(textSearch?: string, typeId?: string, availabilityType?: string, containerId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (textSearch !== undefined) {
            queryParameters = queryParameters.set('TextSearch', <any>textSearch);
        }
        if (typeId !== undefined) {
            queryParameters = queryParameters.set('TypeId', <any>typeId);
        }
        if (availabilityType !== undefined) {
            queryParameters = queryParameters.set('AvailabilityType', <any>availabilityType);
        }
        if (containerId !== undefined) {
            queryParameters = queryParameters.set('ContainerId', <any>containerId);
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

        return this.httpClient.get<DataResponseModelListInventoryItemDTO>(`${this.basePath}/api/inventory-items/search`,
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
     * InventoryItem_UpSert
     * 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemUpSert(model?: InventoryItemDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public inventoryItemUpSert(model?: InventoryItemDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public inventoryItemUpSert(model?: InventoryItemDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public inventoryItemUpSert(model?: InventoryItemDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<NoDataResponseModel>(`${this.basePath}/api/inventory-items/upsert`,
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
     * InventoryItem_Update
     * 
     * @param id 
     * @param model 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public inventoryItemUpdate(id: string, model?: InventoryItemDTO, observe?: 'body', reportProgress?: boolean): Observable<NoDataResponseModel>;
    public inventoryItemUpdate(id: string, model?: InventoryItemDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoDataResponseModel>>;
    public inventoryItemUpdate(id: string, model?: InventoryItemDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoDataResponseModel>>;
    public inventoryItemUpdate(id: string, model?: InventoryItemDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling inventoryItemUpdate.');
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

        return this.httpClient.put<NoDataResponseModel>(`${this.basePath}/api/inventory-items/${encodeURIComponent(String(id))}`,
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
