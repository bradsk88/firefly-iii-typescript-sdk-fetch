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
import { AttachmentArray, Category, CategoryArray, CategorySingle, CategoryUpdate, TransactionArray, TransactionTypeFilter } from '../models';
export interface DeleteCategoryRequest {
    id: string;
}
export interface GetCategoryRequest {
    id: string;
    start?: Date;
    end?: Date;
}
export interface ListAttachmentByCategoryRequest {
    id: string;
    page?: number;
}
export interface ListCategoryRequest {
    page?: number;
}
export interface ListTransactionByCategoryRequest {
    id: string;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}
export interface ListTransactionWithoutCategoryRequest {
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}
export interface StoreCategoryRequest {
    category: Category;
}
export interface UpdateCategoryRequest {
    id: string;
    categoryUpdate: CategoryUpdate;
}
/**
 *
 */
export declare class CategoriesApi extends runtime.BaseAPI {
    /**
     * Delete a category. Transactions will not be removed.
     * Delete a category.
     */
    deleteCategoryRaw(requestParameters: DeleteCategoryRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a category. Transactions will not be removed.
     * Delete a category.
     */
    deleteCategory(requestParameters: DeleteCategoryRequest): Promise<void>;
    /**
     * Get a single category.
     * Get a single category.
     */
    getCategoryRaw(requestParameters: GetCategoryRequest): Promise<runtime.ApiResponse<CategorySingle>>;
    /**
     * Get a single category.
     * Get a single category.
     */
    getCategory(requestParameters: GetCategoryRequest): Promise<CategorySingle>;
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    listAttachmentByCategoryRaw(requestParameters: ListAttachmentByCategoryRequest): Promise<runtime.ApiResponse<AttachmentArray>>;
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    listAttachmentByCategory(requestParameters: ListAttachmentByCategoryRequest): Promise<AttachmentArray>;
    /**
     * List all categories.
     * List all categories.
     */
    listCategoryRaw(requestParameters: ListCategoryRequest): Promise<runtime.ApiResponse<CategoryArray>>;
    /**
     * List all categories.
     * List all categories.
     */
    listCategory(requestParameters: ListCategoryRequest): Promise<CategoryArray>;
    /**
     * List all transactions in a category, optionally limited to the date ranges specified.
     * List all transactions in a category.
     */
    listTransactionByCategoryRaw(requestParameters: ListTransactionByCategoryRequest): Promise<runtime.ApiResponse<TransactionArray>>;
    /**
     * List all transactions in a category, optionally limited to the date ranges specified.
     * List all transactions in a category.
     */
    listTransactionByCategory(requestParameters: ListTransactionByCategoryRequest): Promise<TransactionArray>;
    /**
     * Get all transactions without a category, possibly limited by start and end
     * All transactions without a category.
     */
    listTransactionWithoutCategoryRaw(requestParameters: ListTransactionWithoutCategoryRequest): Promise<runtime.ApiResponse<TransactionArray>>;
    /**
     * Get all transactions without a category, possibly limited by start and end
     * All transactions without a category.
     */
    listTransactionWithoutCategory(requestParameters: ListTransactionWithoutCategoryRequest): Promise<TransactionArray>;
    /**
     * Creates a new category. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new category
     */
    storeCategoryRaw(requestParameters: StoreCategoryRequest): Promise<runtime.ApiResponse<CategorySingle>>;
    /**
     * Creates a new category. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new category
     */
    storeCategory(requestParameters: StoreCategoryRequest): Promise<CategorySingle>;
    /**
     * Update existing category.
     * Update existing category.
     */
    updateCategoryRaw(requestParameters: UpdateCategoryRequest): Promise<runtime.ApiResponse<CategorySingle>>;
    /**
     * Update existing category.
     * Update existing category.
     */
    updateCategory(requestParameters: UpdateCategoryRequest): Promise<CategorySingle>;
}