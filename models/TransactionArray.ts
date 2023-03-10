/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.6
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2022-04-04T03:54:41+00:00 
 *
 * The version of the OpenAPI document: 1.5.6
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Meta,
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
    PageLink,
    PageLinkFromJSON,
    PageLinkFromJSONTyped,
    PageLinkToJSON,
    TransactionRead,
    TransactionReadFromJSON,
    TransactionReadFromJSONTyped,
    TransactionReadToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransactionArray
 */
export interface TransactionArray {
    /**
     * 
     * @type {Array<TransactionRead>}
     * @memberof TransactionArray
     */
    data: Array<TransactionRead>;
    /**
     * 
     * @type {Meta}
     * @memberof TransactionArray
     */
    meta: Meta;
    /**
     * 
     * @type {PageLink}
     * @memberof TransactionArray
     */
    links: PageLink;
}

export function TransactionArrayFromJSON(json: any): TransactionArray {
    return TransactionArrayFromJSONTyped(json, false);
}

export function TransactionArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(TransactionReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
        'links': PageLinkFromJSON(json['links']),
    };
}

export function TransactionArrayToJSON(value?: TransactionArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(TransactionReadToJSON)),
        'meta': MetaToJSON(value.meta),
        'links': PageLinkToJSON(value.links),
    };
}


