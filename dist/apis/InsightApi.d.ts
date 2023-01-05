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
import { InsightGroupEntry, InsightTotalEntry, InsightTransferEntry } from '../models';
export interface InsightExpenseAssetRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightExpenseBillRequest {
    start: Date;
    end: Date;
    bills?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightExpenseBudgetRequest {
    start: Date;
    end: Date;
    budgets?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightExpenseCategoryRequest {
    start: Date;
    end: Date;
    categories?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightExpenseExpenseRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightExpenseNoBillRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightExpenseNoBudgetRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightExpenseNoCategoryRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightExpenseNoTagRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightExpenseTagRequest {
    start: Date;
    end: Date;
    tags?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightExpenseTotalRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightIncomeAssetRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightIncomeCategoryRequest {
    start: Date;
    end: Date;
    categories?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightIncomeNoCategoryRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightIncomeNoTagRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightIncomeRevenueRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightIncomeTagRequest {
    start: Date;
    end: Date;
    tags?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightIncomeTotalRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightTransferCategoryRequest {
    start: Date;
    end: Date;
    categories?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightTransferNoCategoryRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightTransferNoTagRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightTransferTagRequest {
    start: Date;
    end: Date;
    tags?: Array<number>;
    accounts?: Array<number>;
}
export interface InsightTransferTotalRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
export interface InsightTransfersRequest {
    start: Date;
    end: Date;
    accounts?: Array<number>;
}
/**
 *
 */
export declare class InsightApi extends runtime.BaseAPI {
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by asset account.
     * Insight into expenses, grouped by asset account.
     */
    insightExpenseAssetRaw(requestParameters: InsightExpenseAssetRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by asset account.
     * Insight into expenses, grouped by asset account.
     */
    insightExpenseAsset(requestParameters: InsightExpenseAssetRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) bill.
     * Insight into expenses, grouped by bill.
     */
    insightExpenseBillRaw(requestParameters: InsightExpenseBillRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) bill.
     * Insight into expenses, grouped by bill.
     */
    insightExpenseBill(requestParameters: InsightExpenseBillRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) budget.
     * Insight into expenses, grouped by budget.
     */
    insightExpenseBudgetRaw(requestParameters: InsightExpenseBudgetRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) budget.
     * Insight into expenses, grouped by budget.
     */
    insightExpenseBudget(requestParameters: InsightExpenseBudgetRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) category.
     * Insight into expenses, grouped by category.
     */
    insightExpenseCategoryRaw(requestParameters: InsightExpenseCategoryRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) category.
     * Insight into expenses, grouped by category.
     */
    insightExpenseCategory(requestParameters: InsightExpenseCategoryRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by expense account.
     * Insight into expenses, grouped by expense account.
     */
    insightExpenseExpenseRaw(requestParameters: InsightExpenseExpenseRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by expense account.
     * Insight into expenses, grouped by expense account.
     */
    insightExpenseExpense(requestParameters: InsightExpenseExpenseRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no bill.
     * Insight into expenses, without bill.
     */
    insightExpenseNoBillRaw(requestParameters: InsightExpenseNoBillRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no bill.
     * Insight into expenses, without bill.
     */
    insightExpenseNoBill(requestParameters: InsightExpenseNoBillRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no budget.
     * Insight into expenses, without budget.
     */
    insightExpenseNoBudgetRaw(requestParameters: InsightExpenseNoBudgetRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no budget.
     * Insight into expenses, without budget.
     */
    insightExpenseNoBudget(requestParameters: InsightExpenseNoBudgetRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no category.
     * Insight into expenses, without category.
     */
    insightExpenseNoCategoryRaw(requestParameters: InsightExpenseNoCategoryRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no category.
     * Insight into expenses, without category.
     */
    insightExpenseNoCategory(requestParameters: InsightExpenseNoCategoryRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no tag.
     * Insight into expenses, without tag.
     */
    insightExpenseNoTagRaw(requestParameters: InsightExpenseNoTagRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no tag.
     * Insight into expenses, without tag.
     */
    insightExpenseNoTag(requestParameters: InsightExpenseNoTagRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) tag.
     * Insight into expenses, grouped by tag.
     */
    insightExpenseTagRaw(requestParameters: InsightExpenseTagRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) tag.
     * Insight into expenses, grouped by tag.
     */
    insightExpenseTag(requestParameters: InsightExpenseTagRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a sum of the total expenses made by the user.
     * Insight into total expenses.
     */
    insightExpenseTotalRaw(requestParameters: InsightExpenseTotalRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a sum of the total expenses made by the user.
     * Insight into total expenses.
     */
    insightExpenseTotal(requestParameters: InsightExpenseTotalRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by asset account.
     * Insight into income, grouped by asset account.
     */
    insightIncomeAssetRaw(requestParameters: InsightIncomeAssetRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by asset account.
     * Insight into income, grouped by asset account.
     */
    insightIncomeAsset(requestParameters: InsightIncomeAssetRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by (any) category.
     * Insight into income, grouped by category.
     */
    insightIncomeCategoryRaw(requestParameters: InsightIncomeCategoryRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by (any) category.
     * Insight into income, grouped by category.
     */
    insightIncomeCategory(requestParameters: InsightIncomeCategoryRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the income received by the user, including only income with no category.
     * Insight into income, without category.
     */
    insightIncomeNoCategoryRaw(requestParameters: InsightIncomeNoCategoryRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the income received by the user, including only income with no category.
     * Insight into income, without category.
     */
    insightIncomeNoCategory(requestParameters: InsightIncomeNoCategoryRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the income received by the user, including only income with no tag.
     * Insight into income, without tag.
     */
    insightIncomeNoTagRaw(requestParameters: InsightIncomeNoTagRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the income received by the user, including only income with no tag.
     * Insight into income, without tag.
     */
    insightIncomeNoTag(requestParameters: InsightIncomeNoTagRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by revenue account.
     * Insight into income, grouped by revenue account.
     */
    insightIncomeRevenueRaw(requestParameters: InsightIncomeRevenueRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by revenue account.
     * Insight into income, grouped by revenue account.
     */
    insightIncomeRevenue(requestParameters: InsightIncomeRevenueRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by (any) tag.
     * Insight into income, grouped by tag.
     */
    insightIncomeTagRaw(requestParameters: InsightIncomeTagRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the income received by the user, grouped by (any) tag.
     * Insight into income, grouped by tag.
     */
    insightIncomeTag(requestParameters: InsightIncomeTagRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a sum of the total income received by the user.
     * Insight into total income.
     */
    insightIncomeTotalRaw(requestParameters: InsightIncomeTotalRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a sum of the total income received by the user.
     * Insight into total income.
     */
    insightIncomeTotal(requestParameters: InsightIncomeTotalRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, grouped by (any) category.
     * Insight into transfers, grouped by category.
     */
    insightTransferCategoryRaw(requestParameters: InsightTransferCategoryRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, grouped by (any) category.
     * Insight into transfers, grouped by category.
     */
    insightTransferCategory(requestParameters: InsightTransferCategoryRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, including only transfers with no category.
     * Insight into transfers, without category.
     */
    insightTransferNoCategoryRaw(requestParameters: InsightTransferNoCategoryRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, including only transfers with no category.
     * Insight into transfers, without category.
     */
    insightTransferNoCategory(requestParameters: InsightTransferNoCategoryRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, including only transfers with no tag.
     * Insight into expenses, without tag.
     */
    insightTransferNoTagRaw(requestParameters: InsightTransferNoTagRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, including only transfers with no tag.
     * Insight into expenses, without tag.
     */
    insightTransferNoTag(requestParameters: InsightTransferNoTagRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the transfers created by the user, grouped by (any) tag.
     * Insight into transfers, grouped by tag.
     */
    insightTransferTagRaw(requestParameters: InsightTransferTagRequest): Promise<runtime.ApiResponse<Array<InsightGroupEntry>>>;
    /**
     * This endpoint gives a summary of the transfers created by the user, grouped by (any) tag.
     * Insight into transfers, grouped by tag.
     */
    insightTransferTag(requestParameters: InsightTransferTagRequest): Promise<Array<InsightGroupEntry>>;
    /**
     * This endpoint gives a sum of the total amount transfers made by the user.
     * Insight into total transfers.
     */
    insightTransferTotalRaw(requestParameters: InsightTransferTotalRequest): Promise<runtime.ApiResponse<Array<InsightTotalEntry>>>;
    /**
     * This endpoint gives a sum of the total amount transfers made by the user.
     * Insight into total transfers.
     */
    insightTransferTotal(requestParameters: InsightTransferTotalRequest): Promise<Array<InsightTotalEntry>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, grouped by asset account or lability.
     * Insight into transfers, grouped by account.
     */
    insightTransfersRaw(requestParameters: InsightTransfersRequest): Promise<runtime.ApiResponse<Array<InsightTransferEntry>>>;
    /**
     * This endpoint gives a summary of the transfers made by the user, grouped by asset account or lability.
     * Insight into transfers, grouped by account.
     */
    insightTransfers(requestParameters: InsightTransfersRequest): Promise<Array<InsightTransferEntry>>;
}