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
 * @interface CategorySpent
 */
export interface CategorySpent {
    /**
     *
     * @type {string}
     * @memberof CategorySpent
     */
    currencyId?: string;
    /**
     *
     * @type {string}
     * @memberof CategorySpent
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof CategorySpent
     */
    currencySymbol?: string;
    /**
     * Number of decimals supported by the currency
     * @type {number}
     * @memberof CategorySpent
     */
    currencyDecimalPlaces?: number;
    /**
     * The amount spent.
     * @type {string}
     * @memberof CategorySpent
     */
    sum?: string;
}
export declare function CategorySpentFromJSON(json: any): CategorySpent;
export declare function CategorySpentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategorySpent;
export declare function CategorySpentToJSON(value?: CategorySpent | null): any;
