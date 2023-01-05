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
 * @interface CurrencyUpdate
 */
export interface CurrencyUpdate {
    /**
     * If the currency is enabled
     * @type {boolean}
     * @memberof CurrencyUpdate
     */
    enabled?: boolean;
    /**
     * If the currency must be the default for the user. You can only submit TRUE.
     * @type {boolean}
     * @memberof CurrencyUpdate
     */
    _default?: CurrencyUpdateDefaultEnum;
    /**
     * The currency code
     * @type {string}
     * @memberof CurrencyUpdate
     */
    code?: string;
    /**
     * The currency name
     * @type {string}
     * @memberof CurrencyUpdate
     */
    name?: string;
    /**
     * The currency symbol
     * @type {string}
     * @memberof CurrencyUpdate
     */
    symbol?: string;
    /**
     * How many decimals to use when displaying this currency. Between 0 and 16.
     * @type {number}
     * @memberof CurrencyUpdate
     */
    decimalPlaces?: number;
}

export function CurrencyUpdateFromJSON(json: any): CurrencyUpdate {
    return CurrencyUpdateFromJSONTyped(json, false);
}

export function CurrencyUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
        'decimalPlaces': !exists(json, 'decimal_places') ? undefined : json['decimal_places'],
    };
}

export function CurrencyUpdateToJSON(value?: CurrencyUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'default': value._default,
        'code': value.code,
        'name': value.name,
        'symbol': value.symbol,
        'decimal_places': value.decimalPlaces,
    };
}

/**
* @export
* @enum {string}
*/
export enum CurrencyUpdateDefaultEnum {
    True = 'true'
}

