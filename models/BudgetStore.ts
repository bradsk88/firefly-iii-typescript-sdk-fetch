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
    AutoBudgetPeriod,
    AutoBudgetPeriodFromJSON,
    AutoBudgetPeriodFromJSONTyped,
    AutoBudgetPeriodToJSON,
    AutoBudgetType,
    AutoBudgetTypeFromJSON,
    AutoBudgetTypeFromJSONTyped,
    AutoBudgetTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface BudgetStore
 */
export interface BudgetStore {
    /**
     * 
     * @type {string}
     * @memberof BudgetStore
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof BudgetStore
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BudgetStore
     */
    readonly order?: number;
    /**
     * 
     * @type {string}
     * @memberof BudgetStore
     */
    notes?: string | null;
    /**
     * 
     * @type {AutoBudgetType}
     * @memberof BudgetStore
     */
    autoBudgetType?: AutoBudgetType | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetStore
     */
    autoBudgetCurrencyId?: string | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetStore
     */
    autoBudgetCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BudgetStore
     */
    autoBudgetAmount?: string | null;
    /**
     * 
     * @type {AutoBudgetPeriod}
     * @memberof BudgetStore
     */
    autoBudgetPeriod?: AutoBudgetPeriod | null;
}

export function BudgetStoreFromJSON(json: any): BudgetStore {
    return BudgetStoreFromJSONTyped(json, false);
}

export function BudgetStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'autoBudgetType': !exists(json, 'auto_budget_type') ? undefined : AutoBudgetTypeFromJSON(json['auto_budget_type']),
        'autoBudgetCurrencyId': !exists(json, 'auto_budget_currency_id') ? undefined : json['auto_budget_currency_id'],
        'autoBudgetCurrencyCode': !exists(json, 'auto_budget_currency_code') ? undefined : json['auto_budget_currency_code'],
        'autoBudgetAmount': !exists(json, 'auto_budget_amount') ? undefined : json['auto_budget_amount'],
        'autoBudgetPeriod': !exists(json, 'auto_budget_period') ? undefined : AutoBudgetPeriodFromJSON(json['auto_budget_period']),
    };
}

export function BudgetStoreToJSON(value?: BudgetStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'active': value.active,
        'notes': value.notes,
        'auto_budget_type': AutoBudgetTypeToJSON(value.autoBudgetType),
        'auto_budget_currency_id': value.autoBudgetCurrencyId,
        'auto_budget_currency_code': value.autoBudgetCurrencyCode,
        'auto_budget_amount': value.autoBudgetAmount,
        'auto_budget_period': AutoBudgetPeriodToJSON(value.autoBudgetPeriod),
    };
}


