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
 * @interface TransactionLink
 */
export interface TransactionLink {
    /**
     *
     * @type {Date}
     * @memberof TransactionLink
     */
    readonly createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof TransactionLink
     */
    readonly updatedAt?: Date;
    /**
     * The link type ID to use. You can also use the link_type_name field.
     * @type {string}
     * @memberof TransactionLink
     */
    linkTypeId: string;
    /**
     * The link type name to use. You can also use the link_type_id field.
     * @type {string}
     * @memberof TransactionLink
     */
    linkTypeName?: string;
    /**
     * The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set.
     * @type {string}
     * @memberof TransactionLink
     */
    inwardId: string;
    /**
     * The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set.
     * @type {string}
     * @memberof TransactionLink
     */
    outwardId: string;
    /**
     * Optional. Some notes.
     * @type {string}
     * @memberof TransactionLink
     */
    notes?: string | null;
}
export declare function TransactionLinkFromJSON(json: any): TransactionLink;
export declare function TransactionLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLink;
export declare function TransactionLinkToJSON(value?: TransactionLink | null): any;