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
    BillPaidDates,
    BillPaidDatesFromJSON,
    BillPaidDatesFromJSONTyped,
    BillPaidDatesToJSON,
    BillRepeatFrequency,
    BillRepeatFrequencyFromJSON,
    BillRepeatFrequencyFromJSONTyped,
    BillRepeatFrequencyToJSON,
} from './';

/**
 * 
 * @export
 * @interface Bill
 */
export interface Bill {
    /**
     * 
     * @type {Date}
     * @memberof Bill
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Bill
     */
    readonly updatedAt?: Date;
    /**
     * Use either currency_id or currency_code
     * @type {string}
     * @memberof Bill
     */
    currencyId?: string;
    /**
     * Use either currency_id or currency_code
     * @type {string}
     * @memberof Bill
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Bill
     */
    readonly currencySymbol?: string;
    /**
     * 
     * @type {number}
     * @memberof Bill
     */
    readonly currencyDecimalPlaces?: number;
    /**
     * 
     * @type {string}
     * @memberof Bill
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Bill
     */
    amountMin: string;
    /**
     * 
     * @type {string}
     * @memberof Bill
     */
    amountMax: string;
    /**
     * 
     * @type {Date}
     * @memberof Bill
     */
    date: Date;
    /**
     * The date after which this bill is no longer valid or applicable
     * @type {Date}
     * @memberof Bill
     */
    endDate?: Date;
    /**
     * The date before which the bill must be renewed (or cancelled)
     * @type {Date}
     * @memberof Bill
     */
    extensionDate?: Date;
    /**
     * 
     * @type {BillRepeatFrequency}
     * @memberof Bill
     */
    repeatFreq: BillRepeatFrequency;
    /**
     * How often the bill must be skipped. 1 means a bi-monthly bill.
     * @type {number}
     * @memberof Bill
     */
    skip?: number;
    /**
     * If the bill is active.
     * @type {boolean}
     * @memberof Bill
     */
    active?: boolean;
    /**
     * Order of the bill.
     * @type {number}
     * @memberof Bill
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof Bill
     */
    notes?: string | null;
    /**
     * When the bill is expected to be due.
     * @type {Date}
     * @memberof Bill
     */
    readonly nextExpectedMatch?: Date | null;
    /**
     * Formatted (locally) when the bill is due.
     * @type {string}
     * @memberof Bill
     */
    readonly nextExpectedMatchDiff?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof Bill
     */
    objectGroupId?: string | null;
    /**
     * The order of the group. At least 1, for the highest sorting.
     * @type {number}
     * @memberof Bill
     */
    readonly objectGroupOrder?: number | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof Bill
     */
    objectGroupTitle?: string | null;
    /**
     * Array of future dates when the bill is expected to be paid. Autogenerated.
     * @type {Array<Date>}
     * @memberof Bill
     */
    readonly payDates?: Array<Date>;
    /**
     * Array of past transactions when the bill was paid.
     * @type {Array<BillPaidDates>}
     * @memberof Bill
     */
    readonly paidDates?: Array<BillPaidDates>;
}

export function BillFromJSON(json: any): Bill {
    return BillFromJSONTyped(json, false);
}

export function BillFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bill {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !exists(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !exists(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'name': json['name'],
        'amountMin': json['amount_min'],
        'amountMax': json['amount_max'],
        'date': (new Date(json['date'])),
        'endDate': !exists(json, 'end_date') ? undefined : (new Date(json['end_date'])),
        'extensionDate': !exists(json, 'extension_date') ? undefined : (new Date(json['extension_date'])),
        'repeatFreq': BillRepeatFrequencyFromJSON(json['repeat_freq']),
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'nextExpectedMatch': !exists(json, 'next_expected_match') ? undefined : (json['next_expected_match'] === null ? null : new Date(json['next_expected_match'])),
        'nextExpectedMatchDiff': !exists(json, 'next_expected_match_diff') ? undefined : json['next_expected_match_diff'],
        'objectGroupId': !exists(json, 'object_group_id') ? undefined : json['object_group_id'],
        'objectGroupOrder': !exists(json, 'object_group_order') ? undefined : json['object_group_order'],
        'objectGroupTitle': !exists(json, 'object_group_title') ? undefined : json['object_group_title'],
        'payDates': !exists(json, 'pay_dates') ? undefined : json['pay_dates'],
        'paidDates': !exists(json, 'paid_dates') ? undefined : ((json['paid_dates'] as Array<any>).map(BillPaidDatesFromJSON)),
    };
}

export function BillToJSON(value?: Bill | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'name': value.name,
        'amount_min': value.amountMin,
        'amount_max': value.amountMax,
        'date': (value.date.toISOString()),
        'end_date': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'extension_date': value.extensionDate === undefined ? undefined : (value.extensionDate.toISOString()),
        'repeat_freq': BillRepeatFrequencyToJSON(value.repeatFreq),
        'skip': value.skip,
        'active': value.active,
        'order': value.order,
        'notes': value.notes,
        'object_group_id': value.objectGroupId,
        'object_group_title': value.objectGroupTitle,
    };
}

