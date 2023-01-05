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
import { RecurrenceRepetitionStore, RecurrenceTransactionStore, RecurrenceTransactionType } from './';
/**
 *
 * @export
 * @interface RecurrenceStore
 */
export interface RecurrenceStore {
    /**
     *
     * @type {RecurrenceTransactionType}
     * @memberof RecurrenceStore
     */
    type: RecurrenceTransactionType;
    /**
     *
     * @type {string}
     * @memberof RecurrenceStore
     */
    title: string;
    /**
     * Not to be confused with the description of the actual transaction(s) being created.
     * @type {string}
     * @memberof RecurrenceStore
     */
    description?: string;
    /**
     * First time the recurring transaction will fire. Must be after today.
     * @type {Date}
     * @memberof RecurrenceStore
     */
    firstDate: Date;
    /**
     * Date until the recurring transaction can fire. Use either this field or repetitions.
     * @type {Date}
     * @memberof RecurrenceStore
     */
    repeatUntil: Date | null;
    /**
     * Max number of created transactions. Use either this field or repeat_until.
     * @type {number}
     * @memberof RecurrenceStore
     */
    nrOfRepetitions?: number | null;
    /**
     * Whether or not to fire the rules after the creation of a transaction.
     * @type {boolean}
     * @memberof RecurrenceStore
     */
    applyRules?: boolean;
    /**
     * If the recurrence is even active.
     * @type {boolean}
     * @memberof RecurrenceStore
     */
    active?: boolean;
    /**
     *
     * @type {string}
     * @memberof RecurrenceStore
     */
    notes?: string | null;
    /**
     *
     * @type {Array<RecurrenceRepetitionStore>}
     * @memberof RecurrenceStore
     */
    repetitions: Array<RecurrenceRepetitionStore>;
    /**
     *
     * @type {Array<RecurrenceTransactionStore>}
     * @memberof RecurrenceStore
     */
    transactions: Array<RecurrenceTransactionStore>;
}
export declare function RecurrenceStoreFromJSON(json: any): RecurrenceStore;
export declare function RecurrenceStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceStore;
export declare function RecurrenceStoreToJSON(value?: RecurrenceStore | null): any;