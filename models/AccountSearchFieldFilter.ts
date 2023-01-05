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

/**
 * 
 * @export
 * @enum {string}
 */
export enum AccountSearchFieldFilter {
    All = 'all',
    Iban = 'iban',
    Name = 'name',
    Number = 'number',
    Id = 'id'
}

export function AccountSearchFieldFilterFromJSON(json: any): AccountSearchFieldFilter {
    return AccountSearchFieldFilterFromJSONTyped(json, false);
}

export function AccountSearchFieldFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountSearchFieldFilter {
    return json as AccountSearchFieldFilter;
}

export function AccountSearchFieldFilterToJSON(value?: AccountSearchFieldFilter | null): any {
    return value as any;
}
