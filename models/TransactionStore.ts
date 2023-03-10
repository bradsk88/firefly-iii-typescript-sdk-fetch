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
    TransactionSplitStore,
    TransactionSplitStoreFromJSON,
    TransactionSplitStoreFromJSONTyped,
    TransactionSplitStoreToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransactionStore
 */
export interface TransactionStore {
    /**
     * Break if the submitted transaction exists already.
     * @type {boolean}
     * @memberof TransactionStore
     */
    errorIfDuplicateHash?: boolean;
    /**
     * Whether or not to apply rules when submitting transaction.
     * @type {boolean}
     * @memberof TransactionStore
     */
    applyRules?: boolean;
    /**
     * Whether or not to fire the webhooks that are related to this event.
     * @type {boolean}
     * @memberof TransactionStore
     */
    fireWebhooks?: boolean;
    /**
     * Title of the transaction if it has been split in more than one piece. Empty otherwise.
     * @type {string}
     * @memberof TransactionStore
     */
    groupTitle?: string | null;
    /**
     * 
     * @type {Array<TransactionSplitStore>}
     * @memberof TransactionStore
     */
    transactions: Array<TransactionSplitStore>;
}

export function TransactionStoreFromJSON(json: any): TransactionStore {
    return TransactionStoreFromJSONTyped(json, false);
}

export function TransactionStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorIfDuplicateHash': !exists(json, 'error_if_duplicate_hash') ? undefined : json['error_if_duplicate_hash'],
        'applyRules': !exists(json, 'apply_rules') ? undefined : json['apply_rules'],
        'fireWebhooks': !exists(json, 'fire_webhooks') ? undefined : json['fire_webhooks'],
        'groupTitle': !exists(json, 'group_title') ? undefined : json['group_title'],
        'transactions': ((json['transactions'] as Array<any>).map(TransactionSplitStoreFromJSON)),
    };
}

export function TransactionStoreToJSON(value?: TransactionStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_if_duplicate_hash': value.errorIfDuplicateHash,
        'apply_rules': value.applyRules,
        'fire_webhooks': value.fireWebhooks,
        'group_title': value.groupTitle,
        'transactions': ((value.transactions as Array<any>).map(TransactionSplitStoreToJSON)),
    };
}


