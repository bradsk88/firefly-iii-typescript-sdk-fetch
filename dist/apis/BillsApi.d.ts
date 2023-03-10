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
import { AttachmentArray, BillArray, BillSingle, BillStore, BillUpdate, RuleArray, TransactionArray, TransactionTypeFilter } from '../models';
export interface DeleteBillRequest {
    id: string;
}
export interface GetBillRequest {
    id: string;
    start?: Date;
    end?: Date;
}
export interface ListAttachmentByBillRequest {
    id: string;
    page?: number;
}
export interface ListBillRequest {
    page?: number;
    start?: Date;
    end?: Date;
}
export interface ListRuleByBillRequest {
    id: string;
}
export interface ListTransactionByBillRequest {
    id: string;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}
export interface StoreBillRequest {
    billStore: BillStore;
}
export interface UpdateBillRequest {
    id: string;
    billUpdate: BillUpdate;
}
/**
 *
 */
export declare class BillsApi extends runtime.BaseAPI {
    /**
     * Delete a bill. This will not delete any associated rules. Will not remove associated transactions. WILL remove all associated attachments.
     * Delete a bill.
     */
    deleteBillRaw(requestParameters: DeleteBillRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a bill. This will not delete any associated rules. Will not remove associated transactions. WILL remove all associated attachments.
     * Delete a bill.
     */
    deleteBill(requestParameters: DeleteBillRequest): Promise<void>;
    /**
     * Get a single bill.
     * Get a single bill.
     */
    getBillRaw(requestParameters: GetBillRequest): Promise<runtime.ApiResponse<BillSingle>>;
    /**
     * Get a single bill.
     * Get a single bill.
     */
    getBill(requestParameters: GetBillRequest): Promise<BillSingle>;
    /**
     * This endpoint will list all attachments linked to the bill.
     * List all attachments uploaded to the bill.
     */
    listAttachmentByBillRaw(requestParameters: ListAttachmentByBillRequest): Promise<runtime.ApiResponse<AttachmentArray>>;
    /**
     * This endpoint will list all attachments linked to the bill.
     * List all attachments uploaded to the bill.
     */
    listAttachmentByBill(requestParameters: ListAttachmentByBillRequest): Promise<AttachmentArray>;
    /**
     * This endpoint will list all the user\'s bills.
     * List all bills.
     */
    listBillRaw(requestParameters: ListBillRequest): Promise<runtime.ApiResponse<BillArray>>;
    /**
     * This endpoint will list all the user\'s bills.
     * List all bills.
     */
    listBill(requestParameters: ListBillRequest): Promise<BillArray>;
    /**
     * This endpoint will list all rules that have an action to set the bill to this bill.
     * List all rules associated with the bill.
     */
    listRuleByBillRaw(requestParameters: ListRuleByBillRequest): Promise<runtime.ApiResponse<RuleArray>>;
    /**
     * This endpoint will list all rules that have an action to set the bill to this bill.
     * List all rules associated with the bill.
     */
    listRuleByBill(requestParameters: ListRuleByBillRequest): Promise<RuleArray>;
    /**
     * This endpoint will list all transactions linked to this bill.
     * List all transactions associated with the  bill.
     */
    listTransactionByBillRaw(requestParameters: ListTransactionByBillRequest): Promise<runtime.ApiResponse<TransactionArray>>;
    /**
     * This endpoint will list all transactions linked to this bill.
     * List all transactions associated with the  bill.
     */
    listTransactionByBill(requestParameters: ListTransactionByBillRequest): Promise<TransactionArray>;
    /**
     * Creates a new bill. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new bill
     */
    storeBillRaw(requestParameters: StoreBillRequest): Promise<runtime.ApiResponse<BillSingle>>;
    /**
     * Creates a new bill. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new bill
     */
    storeBill(requestParameters: StoreBillRequest): Promise<BillSingle>;
    /**
     * Update existing bill.
     * Update existing bill.
     */
    updateBillRaw(requestParameters: UpdateBillRequest): Promise<runtime.ApiResponse<BillSingle>>;
    /**
     * Update existing bill.
     * Update existing bill.
     */
    updateBill(requestParameters: UpdateBillRequest): Promise<BillSingle>;
}
