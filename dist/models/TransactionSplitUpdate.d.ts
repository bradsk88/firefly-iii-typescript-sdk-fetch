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
 * @interface TransactionSplitUpdate
 */
export interface TransactionSplitUpdate {
    /**
     * Date of the transaction
     * @type {Date}
     * @memberof TransactionSplitUpdate
     */
    date?: Date;
    /**
     * Amount of the transaction.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    amount?: string;
    /**
     * Description of the transaction.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    description?: string;
    /**
     * Order of this entry in the list of transactions.
     * @type {number}
     * @memberof TransactionSplitUpdate
     */
    order?: number | null;
    /**
     * Currency ID. Default is the source account's currency, or the user's default currency. Can be used instead of currency_code.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    currencyId?: string | null;
    /**
     * Currency code. Default is the source account's currency, or the user's default currency. Can be used instead of currency_id.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    currencyCode?: string | null;
    /**
     *
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    readonly currencySymbol?: string;
    /**
     *
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    readonly currencyName?: string;
    /**
     * Number of decimals used in this currency.
     * @type {number}
     * @memberof TransactionSplitUpdate
     */
    readonly currencyDecimalPlaces?: number;
    /**
     * The amount in a foreign currency.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    foreignAmount?: string | null;
    /**
     * Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    foreignCurrencyId?: string | null;
    /**
     * Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    foreignCurrencyCode?: string | null;
    /**
     *
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    readonly foreignCurrencySymbol?: string | null;
    /**
     * Number of decimals in the currency
     * @type {number}
     * @memberof TransactionSplitUpdate
     */
    readonly foreignCurrencyDecimalPlaces?: number | null;
    /**
     * The budget ID for this transaction.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    budgetId?: string | null;
    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    readonly budgetName?: string | null;
    /**
     * The category ID for this transaction.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    categoryId?: string | null;
    /**
     * The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    categoryName?: string | null;
    /**
     * ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sourceId?: string | null;
    /**
     * Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sourceName?: string | null;
    /**
     *
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sourceIban?: string | null;
    /**
     * ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    destinationId?: string | null;
    /**
     * Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    destinationName?: string | null;
    /**
     *
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    destinationIban?: string | null;
    /**
     * If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.
     * @type {boolean}
     * @memberof TransactionSplitUpdate
     */
    reconciled?: boolean;
    /**
     * Optional. Use either this or the bill_name
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    billId?: string | null;
    /**
     * Optional. Use either this or the bill_id
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    billName?: string | null;
    /**
     * Array of tags.
     * @type {Array<string>}
     * @memberof TransactionSplitUpdate
     */
    tags?: Array<string> | null;
    /**
     *
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    notes?: string | null;
    /**
     * Reference to internal reference of other systems.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    internalReference?: string | null;
    /**
     * Reference to external ID in other systems.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    externalId?: string | null;
    /**
     * External, custom URL for this transaction.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    externalUrl?: string | null;
    /**
     * Internal ID of bunq transaction.
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    bunqPaymentId?: string | null;
    /**
     * SEPA Clearing Code
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaCc?: string | null;
    /**
     * SEPA Opposing Account Identifier
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaCtOp?: string | null;
    /**
     * SEPA end-to-end Identifier
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaCtId?: string | null;
    /**
     * SEPA mandate identifier
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaDb?: string | null;
    /**
     * SEPA Country
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaCountry?: string | null;
    /**
     * SEPA External Purpose indicator
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaEp?: string | null;
    /**
     * SEPA Creditor Identifier
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaCi?: string | null;
    /**
     * SEPA Batch ID
     * @type {string}
     * @memberof TransactionSplitUpdate
     */
    sepaBatchId?: string | null;
    /**
     *
     * @type {Date}
     * @memberof TransactionSplitUpdate
     */
    interestDate?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof TransactionSplitUpdate
     */
    bookDate?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof TransactionSplitUpdate
     */
    processDate?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof TransactionSplitUpdate
     */
    dueDate?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof TransactionSplitUpdate
     */
    paymentDate?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof TransactionSplitUpdate
     */
    invoiceDate?: Date | null;
}
export declare function TransactionSplitUpdateFromJSON(json: any): TransactionSplitUpdate;
export declare function TransactionSplitUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSplitUpdate;
export declare function TransactionSplitUpdateToJSON(value?: TransactionSplitUpdate | null): any;
