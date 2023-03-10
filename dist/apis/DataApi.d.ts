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
import { DataDestroyObject, ExportFileFilter } from '../models';
export interface BulkUpdateTransactionsRequest {
    query: string;
}
export interface DestroyDataRequest {
    objects: DataDestroyObject;
}
export interface ExportAccountsRequest {
    type?: ExportFileFilter;
}
export interface ExportBillsRequest {
    type?: ExportFileFilter;
}
export interface ExportBudgetsRequest {
    type?: ExportFileFilter;
}
export interface ExportCategoriesRequest {
    type?: ExportFileFilter;
}
export interface ExportPiggiesRequest {
    type?: ExportFileFilter;
}
export interface ExportRecurringRequest {
    type?: ExportFileFilter;
}
export interface ExportRulesRequest {
    type?: ExportFileFilter;
}
export interface ExportTagsRequest {
    type?: ExportFileFilter;
}
export interface ExportTransactionsRequest {
    start: Date;
    end: Date;
    accounts?: string;
    type?: ExportFileFilter;
}
/**
 *
 */
export declare class DataApi extends runtime.BaseAPI {
    /**
     * Allows you to update transactions in bulk.
     * Bulk update transaction properties. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     */
    bulkUpdateTransactionsRaw(requestParameters: BulkUpdateTransactionsRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Allows you to update transactions in bulk.
     * Bulk update transaction properties. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     */
    bulkUpdateTransactions(requestParameters: BulkUpdateTransactionsRequest): Promise<void>;
    /**
     * A call to this endpoint permanently destroys the requested data type. Use it with care and always with user permission. The demo user is incapable of using this endpoint.
     * Endpoint to destroy user data
     */
    destroyDataRaw(requestParameters: DestroyDataRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * A call to this endpoint permanently destroys the requested data type. Use it with care and always with user permission. The demo user is incapable of using this endpoint.
     * Endpoint to destroy user data
     */
    destroyData(requestParameters: DestroyDataRequest): Promise<void>;
    /**
     * This endpoint allows you to export your accounts from Firefly III into a file. Currently supports CSV exports only.
     * Export account data from Firefly III
     */
    exportAccountsRaw(requestParameters: ExportAccountsRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your accounts from Firefly III into a file. Currently supports CSV exports only.
     * Export account data from Firefly III
     */
    exportAccounts(requestParameters: ExportAccountsRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export your bills from Firefly III into a file. Currently supports CSV exports only.
     * Export bills from Firefly III
     */
    exportBillsRaw(requestParameters: ExportBillsRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your bills from Firefly III into a file. Currently supports CSV exports only.
     * Export bills from Firefly III
     */
    exportBills(requestParameters: ExportBillsRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export your budgets and associated budget data from Firefly III into a file. Currently supports CSV exports only.
     * Export budgets and budget amount data from Firefly III
     */
    exportBudgetsRaw(requestParameters: ExportBudgetsRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your budgets and associated budget data from Firefly III into a file. Currently supports CSV exports only.
     * Export budgets and budget amount data from Firefly III
     */
    exportBudgets(requestParameters: ExportBudgetsRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export your categories from Firefly III into a file. Currently supports CSV exports only.
     * Export category data from Firefly III
     */
    exportCategoriesRaw(requestParameters: ExportCategoriesRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your categories from Firefly III into a file. Currently supports CSV exports only.
     * Export category data from Firefly III
     */
    exportCategories(requestParameters: ExportCategoriesRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export your piggy banks from Firefly III into a file. Currently supports CSV exports only.
     * Export piggy banks from Firefly III
     */
    exportPiggiesRaw(requestParameters: ExportPiggiesRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your piggy banks from Firefly III into a file. Currently supports CSV exports only.
     * Export piggy banks from Firefly III
     */
    exportPiggies(requestParameters: ExportPiggiesRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export your recurring transactions from Firefly III into a file. Currently supports CSV exports only.
     * Export recurring transaction data from Firefly III
     */
    exportRecurringRaw(requestParameters: ExportRecurringRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your recurring transactions from Firefly III into a file. Currently supports CSV exports only.
     * Export recurring transaction data from Firefly III
     */
    exportRecurring(requestParameters: ExportRecurringRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export your rules and rule groups from Firefly III into a file. Currently supports CSV exports only.
     * Export rule groups and rule data from Firefly III
     */
    exportRulesRaw(requestParameters: ExportRulesRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your rules and rule groups from Firefly III into a file. Currently supports CSV exports only.
     * Export rule groups and rule data from Firefly III
     */
    exportRules(requestParameters: ExportRulesRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export your tags from Firefly III into a file. Currently supports CSV exports only.
     * Export tag data from Firefly III
     */
    exportTagsRaw(requestParameters: ExportTagsRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export your tags from Firefly III into a file. Currently supports CSV exports only.
     * Export tag data from Firefly III
     */
    exportTags(requestParameters: ExportTagsRequest): Promise<Blob>;
    /**
     * This endpoint allows you to export transactions from Firefly III into a file. Currently supports CSV exports only.
     * Export transaction data from Firefly III
     */
    exportTransactionsRaw(requestParameters: ExportTransactionsRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * This endpoint allows you to export transactions from Firefly III into a file. Currently supports CSV exports only.
     * Export transaction data from Firefly III
     */
    exportTransactions(requestParameters: ExportTransactionsRequest): Promise<Blob>;
}
