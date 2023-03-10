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
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './';

/**
 * 
 * @export
 * @interface CurrencyRead
 */
export interface CurrencyRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof CurrencyRead
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof CurrencyRead
     */
    id: string;
    /**
     * 
     * @type {Currency}
     * @memberof CurrencyRead
     */
    attributes: Currency;
}

export function CurrencyReadFromJSON(json: any): CurrencyRead {
    return CurrencyReadFromJSONTyped(json, false);
}

export function CurrencyReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': CurrencyFromJSON(json['attributes']),
    };
}

export function CurrencyReadToJSON(value?: CurrencyRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CurrencyToJSON(value.attributes),
    };
}


