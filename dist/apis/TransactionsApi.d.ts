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
import * as runtime from '../runtime';
import { AttachmentArray, PiggyBankEventArray, TransactionArray, TransactionLinkArray, TransactionSingle, TransactionStore, TransactionTypeFilter, TransactionUpdate } from '../models';
export interface DeleteTransactionRequest {
    id: string;
}
export interface DeleteTransactionJournalRequest {
    id: string;
}
export interface GetTransactionRequest {
    id: string;
}
export interface GetTransactionByJournalRequest {
    id: string;
}
export interface ListAttachmentByTransactionRequest {
    id: string;
    page?: number;
}
export interface ListEventByTransactionRequest {
    id: string;
    page?: number;
}
export interface ListLinksByJournalRequest {
    id: string;
    page?: number;
}
export interface ListTransactionRequest {
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}
export interface StoreTransactionRequest {
    transactionStore: TransactionStore;
}
export interface UpdateTransactionRequest {
    id: string;
    transactionUpdate: TransactionUpdate;
}
/**
 *
 */
export declare class TransactionsApi extends runtime.BaseAPI {
    /**
     * Delete a transaction.
     * Delete a transaction.
     */
    deleteTransactionRaw(requestParameters: DeleteTransactionRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a transaction.
     * Delete a transaction.
     */
    deleteTransaction(requestParameters: DeleteTransactionRequest): Promise<void>;
    /**
     * Delete an individual journal (split) from a transaction.
     * Delete split from transaction
     */
    deleteTransactionJournalRaw(requestParameters: DeleteTransactionJournalRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete an individual journal (split) from a transaction.
     * Delete split from transaction
     */
    deleteTransactionJournal(requestParameters: DeleteTransactionJournalRequest): Promise<void>;
    /**
     * Get a single transaction.
     * Get a single transaction.
     */
    getTransactionRaw(requestParameters: GetTransactionRequest): Promise<runtime.ApiResponse<TransactionSingle>>;
    /**
     * Get a single transaction.
     * Get a single transaction.
     */
    getTransaction(requestParameters: GetTransactionRequest): Promise<TransactionSingle>;
    /**
     * Get a single transaction by underlying journal (split).
     * Get a single transaction, based on one of the underlying transaction journals (transaction splits).
     */
    getTransactionByJournalRaw(requestParameters: GetTransactionByJournalRequest): Promise<runtime.ApiResponse<TransactionSingle>>;
    /**
     * Get a single transaction by underlying journal (split).
     * Get a single transaction, based on one of the underlying transaction journals (transaction splits).
     */
    getTransactionByJournal(requestParameters: GetTransactionByJournalRequest): Promise<TransactionSingle>;
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    listAttachmentByTransactionRaw(requestParameters: ListAttachmentByTransactionRequest): Promise<runtime.ApiResponse<AttachmentArray>>;
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    listAttachmentByTransaction(requestParameters: ListAttachmentByTransactionRequest): Promise<AttachmentArray>;
    /**
     * Lists all piggy bank events.
     * Lists all piggy bank events.
     */
    listEventByTransactionRaw(requestParameters: ListEventByTransactionRequest): Promise<runtime.ApiResponse<PiggyBankEventArray>>;
    /**
     * Lists all piggy bank events.
     * Lists all piggy bank events.
     */
    listEventByTransaction(requestParameters: ListEventByTransactionRequest): Promise<PiggyBankEventArray>;
    /**
     * Lists all the transaction links for an individual journal (a split). Don\'t use the group ID, you need the actual underlying journal (the split).
     * Lists all the transaction links for an individual journal (individual split).
     */
    listLinksByJournalRaw(requestParameters: ListLinksByJournalRequest): Promise<runtime.ApiResponse<TransactionLinkArray>>;
    /**
     * Lists all the transaction links for an individual journal (a split). Don\'t use the group ID, you need the actual underlying journal (the split).
     * Lists all the transaction links for an individual journal (individual split).
     */
    listLinksByJournal(requestParameters: ListLinksByJournalRequest): Promise<TransactionLinkArray>;
    /**
     * List all the user\'s transactions.
     * List all the user\'s transactions.
     */
    listTransactionRaw(requestParameters: ListTransactionRequest): Promise<runtime.ApiResponse<TransactionArray>>;
    /**
     * List all the user\'s transactions.
     * List all the user\'s transactions.
     */
    listTransaction(requestParameters: ListTransactionRequest): Promise<TransactionArray>;
    /**
     * Creates a new transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new transaction
     */
    storeTransactionRaw(requestParameters: StoreTransactionRequest): Promise<runtime.ApiResponse<TransactionSingle>>;
    /**
     * Creates a new transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new transaction
     */
    storeTransaction(requestParameters: StoreTransactionRequest): Promise<TransactionSingle>;
    /**
     * Update an existing transaction.
     * Update existing transaction. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     */
    updateTransactionRaw(requestParameters: UpdateTransactionRequest): Promise<runtime.ApiResponse<TransactionSingle>>;
    /**
     * Update an existing transaction.
     * Update existing transaction. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     */
    updateTransaction(requestParameters: UpdateTransactionRequest): Promise<TransactionSingle>;
}
