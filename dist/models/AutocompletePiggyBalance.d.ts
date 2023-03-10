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
 * @interface AutocompletePiggyBalance
 */
export interface AutocompletePiggyBalance {
    /**
     *
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    id: string;
    /**
     * Name of the piggy bank found by an auto-complete search.
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    name: string;
    /**
     * Name of the piggy bank found by an auto-complete search with the current balance formatted nicely.
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    nameWithBalance?: string;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    objectGroupId?: string | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    objectGroupTitle?: string | null;
    /**
     * Currency ID for this piggy bank.
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    currencyId?: string;
    /**
     * Currency code for this piggy bank.
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof AutocompletePiggyBalance
     */
    currencySymbol?: string;
    /**
     *
     * @type {number}
     * @memberof AutocompletePiggyBalance
     */
    currencyDecimalPlaces?: number;
}
export declare function AutocompletePiggyBalanceFromJSON(json: any): AutocompletePiggyBalance;
export declare function AutocompletePiggyBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompletePiggyBalance;
export declare function AutocompletePiggyBalanceToJSON(value?: AutocompletePiggyBalance | null): any;
