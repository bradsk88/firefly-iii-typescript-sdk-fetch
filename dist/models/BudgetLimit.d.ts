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
/**
 *
 * @export
 * @interface BudgetLimit
 */
export interface BudgetLimit {
    /**
     *
     * @type {Date}
     * @memberof BudgetLimit
     */
    readonly createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof BudgetLimit
     */
    readonly updatedAt?: Date;
    /**
     * Start date of the budget limit.
     * @type {Date}
     * @memberof BudgetLimit
     */
    start: Date;
    /**
     * End date of the budget limit.
     * @type {Date}
     * @memberof BudgetLimit
     */
    end: Date;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetLimit
     */
    currencyId?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetLimit
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof BudgetLimit
     */
    readonly currencyName?: string;
    /**
     *
     * @type {string}
     * @memberof BudgetLimit
     */
    readonly currencySymbol?: string;
    /**
     *
     * @type {number}
     * @memberof BudgetLimit
     */
    readonly currencyDecimalPlaces?: number;
    /**
     * The budget ID of the associated budget.
     * @type {string}
     * @memberof BudgetLimit
     */
    readonly budgetId: string;
    /**
     * Period of the budget limit. Only used when auto-generated by auto-budget.
     * @type {string}
     * @memberof BudgetLimit
     */
    readonly period?: string | null;
    /**
     *
     * @type {string}
     * @memberof BudgetLimit
     */
    amount: string;
    /**
     *
     * @type {string}
     * @memberof BudgetLimit
     */
    readonly spent?: string | null;
}
export declare function BudgetLimitFromJSON(json: any): BudgetLimit;
export declare function BudgetLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetLimit;
export declare function BudgetLimitToJSON(value?: BudgetLimit | null): any;
