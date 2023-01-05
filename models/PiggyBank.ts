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
 * @interface PiggyBank
 */
export interface PiggyBank {
    /**
     * 
     * @type {Date}
     * @memberof PiggyBank
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PiggyBank
     */
    readonly updatedAt?: Date;
    /**
     * The ID of the asset account this piggy bank is connected to.
     * @type {string}
     * @memberof PiggyBank
     */
    accountId: string;
    /**
     * The name of the asset account this piggy bank is connected to.
     * @type {string}
     * @memberof PiggyBank
     */
    readonly accountName?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    readonly currencyId?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    readonly currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    readonly currencySymbol?: string;
    /**
     * Number of decimals supported by the currency
     * @type {number}
     * @memberof PiggyBank
     */
    readonly currencyDecimalPlaces?: number;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    targetAmount: string | null;
    /**
     * 
     * @type {number}
     * @memberof PiggyBank
     */
    readonly percentage?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    currentAmount?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    readonly leftToSave?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    readonly savePerMonth?: string | null;
    /**
     * The date you started with this piggy bank.
     * @type {Date}
     * @memberof PiggyBank
     */
    startDate?: Date;
    /**
     * The date you intend to finish saving money.
     * @type {Date}
     * @memberof PiggyBank
     */
    targetDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof PiggyBank
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PiggyBank
     */
    readonly active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof PiggyBank
     */
    objectGroupId?: string | null;
    /**
     * The order of the group. At least 1, for the highest sorting.
     * @type {number}
     * @memberof PiggyBank
     */
    readonly objectGroupOrder?: number | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof PiggyBank
     */
    objectGroupTitle?: string | null;
}

export function PiggyBankFromJSON(json: any): PiggyBank {
    return PiggyBankFromJSONTyped(json, false);
}

export function PiggyBankFromJSONTyped(json: any, ignoreDiscriminator: boolean): PiggyBank {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'accountId': json['account_id'],
        'accountName': !exists(json, 'account_name') ? undefined : json['account_name'],
        'name': json['name'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !exists(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !exists(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'targetAmount': json['target_amount'],
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
        'currentAmount': !exists(json, 'current_amount') ? undefined : json['current_amount'],
        'leftToSave': !exists(json, 'left_to_save') ? undefined : json['left_to_save'],
        'savePerMonth': !exists(json, 'save_per_month') ? undefined : json['save_per_month'],
        'startDate': !exists(json, 'start_date') ? undefined : (new Date(json['start_date'])),
        'targetDate': !exists(json, 'target_date') ? undefined : (json['target_date'] === null ? null : new Date(json['target_date'])),
        'order': !exists(json, 'order') ? undefined : json['order'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'objectGroupId': !exists(json, 'object_group_id') ? undefined : json['object_group_id'],
        'objectGroupOrder': !exists(json, 'object_group_order') ? undefined : json['object_group_order'],
        'objectGroupTitle': !exists(json, 'object_group_title') ? undefined : json['object_group_title'],
    };
}

export function PiggyBankToJSON(value?: PiggyBank | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'name': value.name,
        'target_amount': value.targetAmount,
        'current_amount': value.currentAmount,
        'start_date': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'target_date': value.targetDate === undefined ? undefined : (value.targetDate === null ? null : value.targetDate.toISOString()),
        'order': value.order,
        'notes': value.notes,
        'object_group_id': value.objectGroupId,
        'object_group_title': value.objectGroupTitle,
    };
}

