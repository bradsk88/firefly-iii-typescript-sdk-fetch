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
 * @interface InsightGroupEntry
 */
export interface InsightGroupEntry {
    /**
     * This ID is a reference to the original object.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    id?: string;
    /**
     * This is the name of the object.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    name?: string;
    /**
     * The amount spent or earned between start date and end date, a number defined as a string, for this object and all asset accounts.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    difference?: string;
    /**
     * The amount spent or earned between start date and end date, a number as a float, for this object and all asset accounts. May have rounding errors.
     * @type {number}
     * @memberof InsightGroupEntry
     */
    differenceFloat?: number;
    /**
     * The currency ID of the expenses listed for this account.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    currencyId?: string;
    /**
     * The currency code of the expenses listed for this account.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    currencyCode?: string;
}
export declare function InsightGroupEntryFromJSON(json: any): InsightGroupEntry;
export declare function InsightGroupEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsightGroupEntry;
export declare function InsightGroupEntryToJSON(value?: InsightGroupEntry | null): any;