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
    AccountRead,
    AccountReadFromJSON,
    AccountReadFromJSONTyped,
    AccountReadToJSON,
    Meta,
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface AccountArray
 */
export interface AccountArray {
    /**
     * 
     * @type {Array<AccountRead>}
     * @memberof AccountArray
     */
    data: Array<AccountRead>;
    /**
     * 
     * @type {Meta}
     * @memberof AccountArray
     */
    meta: Meta;
}

export function AccountArrayFromJSON(json: any): AccountArray {
    return AccountArrayFromJSONTyped(json, false);
}

export function AccountArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AccountReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
    };
}

export function AccountArrayToJSON(value?: AccountArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AccountReadToJSON)),
        'meta': MetaToJSON(value.meta),
    };
}


