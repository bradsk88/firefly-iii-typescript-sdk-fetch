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
/**
 * 
 * @export
 * @interface AutocompleteCurrencyCode
 */
export interface AutocompleteCurrencyCode {
    /**
     * 
     * @type {string}
     * @memberof AutocompleteCurrencyCode
     */
    id: string;
    /**
     * Currency name with the code between brackets.
     * @type {string}
     * @memberof AutocompleteCurrencyCode
     */
    name: string;
    /**
     * Currency code.
     * @type {string}
     * @memberof AutocompleteCurrencyCode
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteCurrencyCode
     */
    symbol: string;
    /**
     * 
     * @type {number}
     * @memberof AutocompleteCurrencyCode
     */
    decimalPlaces: number;
}

export function AutocompleteCurrencyCodeFromJSON(json: any): AutocompleteCurrencyCode {
    return AutocompleteCurrencyCodeFromJSONTyped(json, false);
}

export function AutocompleteCurrencyCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteCurrencyCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'code': json['code'],
        'symbol': json['symbol'],
        'decimalPlaces': json['decimal_places'],
    };
}

export function AutocompleteCurrencyCodeToJSON(value?: AutocompleteCurrencyCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
        'symbol': value.symbol,
        'decimal_places': value.decimalPlaces,
    };
}

