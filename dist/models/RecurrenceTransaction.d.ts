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
import { AccountTypeProperty } from './';
/**
 *
 * @export
 * @interface RecurrenceTransaction
 */
export interface RecurrenceTransaction {
    /**
     *
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    description: string;
    /**
     * Amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    amount: string;
    /**
     * Foreign amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    foreignAmount?: string | null;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    currencyId?: string;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    readonly currencySymbol?: string;
    /**
     * Number of decimals in the currency
     * @type {number}
     * @memberof RecurrenceTransaction
     */
    readonly currencyDecimalPlaces?: number;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    foreignCurrencyId?: string | null;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    foreignCurrencyCode?: string | null;
    /**
     *
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    readonly foreignCurrencySymbol?: string | null;
    /**
     * Number of decimals in the currency
     * @type {number}
     * @memberof RecurrenceTransaction
     */
    readonly foreignCurrencyDecimalPlaces?: number | null;
    /**
     * The budget ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    budgetId?: string;
    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    readonly budgetName?: string | null;
    /**
     * Category ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    categoryId?: string;
    /**
     * Category name for this transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    categoryName?: string;
    /**
     * ID of the source account. Submit either this or source_name.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    sourceId?: string;
    /**
     * Name of the source account. Submit either this or source_id.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    sourceName?: string;
    /**
     *
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    readonly sourceIban?: string | null;
    /**
     *
     * @type {AccountTypeProperty}
     * @memberof RecurrenceTransaction
     */
    sourceType?: AccountTypeProperty;
    /**
     * ID of the destination account. Submit either this or destination_name.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    destinationId?: string;
    /**
     * Name of the destination account. Submit either this or destination_id.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    destinationName?: string;
    /**
     *
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    readonly destinationIban?: string | null;
    /**
     *
     * @type {AccountTypeProperty}
     * @memberof RecurrenceTransaction
     */
    destinationType?: AccountTypeProperty;
    /**
     * Array of tags.
     * @type {Array<string>}
     * @memberof RecurrenceTransaction
     */
    tags?: Array<string> | null;
    /**
     * Optional. Use either this or the piggy_bank_name
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    piggyBankId?: string | null;
    /**
     * Optional. Use either this or the piggy_bank_id
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    piggyBankName?: string | null;
}
export declare function RecurrenceTransactionFromJSON(json: any): RecurrenceTransaction;
export declare function RecurrenceTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceTransaction;
export declare function RecurrenceTransactionToJSON(value?: RecurrenceTransaction | null): any;