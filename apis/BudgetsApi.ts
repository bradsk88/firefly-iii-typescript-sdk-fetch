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


import * as runtime from '../runtime';
import {
    AttachmentArray,
    AttachmentArrayFromJSON,
    AttachmentArrayToJSON,
    BudgetArray,
    BudgetArrayFromJSON,
    BudgetArrayToJSON,
    BudgetLimit,
    BudgetLimitFromJSON,
    BudgetLimitToJSON,
    BudgetLimitArray,
    BudgetLimitArrayFromJSON,
    BudgetLimitArrayToJSON,
    BudgetLimitSingle,
    BudgetLimitSingleFromJSON,
    BudgetLimitSingleToJSON,
    BudgetLimitStore,
    BudgetLimitStoreFromJSON,
    BudgetLimitStoreToJSON,
    BudgetSingle,
    BudgetSingleFromJSON,
    BudgetSingleToJSON,
    BudgetStore,
    BudgetStoreFromJSON,
    BudgetStoreToJSON,
    BudgetUpdate,
    BudgetUpdateFromJSON,
    BudgetUpdateToJSON,
    TransactionArray,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
    TransactionTypeFilter,
    TransactionTypeFilterFromJSON,
    TransactionTypeFilterToJSON,
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface DeleteBudgetRequest {
    id: string;
}

export interface DeleteBudgetLimitRequest {
    id: string;
    limitId: string;
}

export interface GetBudgetRequest {
    id: string;
    start?: Date;
    end?: Date;
}

export interface GetBudgetLimitRequest {
    id: string;
    limitId: number;
}

export interface ListAttachmentByBudgetRequest {
    id: string;
    page?: number;
}

export interface ListBudgetRequest {
    page?: number;
    start?: Date;
    end?: Date;
}

export interface ListBudgetLimitRequest {
    start: Date;
    end: Date;
}

export interface ListBudgetLimitByBudgetRequest {
    id: string;
    start?: Date;
    end?: Date;
}

export interface ListTransactionByBudgetRequest {
    id: string;
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface ListTransactionByBudgetLimitRequest {
    id: string;
    limitId: string;
    page?: number;
    type?: TransactionTypeFilter;
}

export interface ListTransactionWithoutBudgetRequest {
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface StoreBudgetRequest {
    budgetStore: BudgetStore;
}

export interface StoreBudgetLimitRequest {
    id: string;
    budgetLimitStore: BudgetLimitStore;
}

export interface UpdateBudgetRequest {
    id: string;
    budgetUpdate: BudgetUpdate;
}

export interface UpdateBudgetLimitRequest {
    id: string;
    limitId: string;
    budgetLimit: BudgetLimit;
}

/**
 * 
 */
export class BudgetsApi extends runtime.BaseAPI {

    /**
     * Delete a budget. Transactions will not be deleted.
     * Delete a budget.
     */
    async deleteBudgetRaw(requestParameters: DeleteBudgetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteBudget.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a budget. Transactions will not be deleted.
     * Delete a budget.
     */
    async deleteBudget(requestParameters: DeleteBudgetRequest): Promise<void> {
        await this.deleteBudgetRaw(requestParameters);
    }

    /**
     * Delete a budget limit.
     * Delete a budget limit.
     */
    async deleteBudgetLimitRaw(requestParameters: DeleteBudgetLimitRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteBudgetLimit.');
        }

        if (requestParameters.limitId === null || requestParameters.limitId === undefined) {
            throw new runtime.RequiredError('limitId','Required parameter requestParameters.limitId was null or undefined when calling deleteBudgetLimit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/limits/{limitId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"limitId"}}`, encodeURIComponent(String(requestParameters.limitId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a budget limit.
     * Delete a budget limit.
     */
    async deleteBudgetLimit(requestParameters: DeleteBudgetLimitRequest): Promise<void> {
        await this.deleteBudgetLimitRaw(requestParameters);
    }

    /**
     * Get a single budget. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * Get a single budget.
     */
    async getBudgetRaw(requestParameters: GetBudgetRequest): Promise<runtime.ApiResponse<BudgetSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBudget.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetSingleFromJSON(jsonValue));
    }

    /**
     * Get a single budget. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * Get a single budget.
     */
    async getBudget(requestParameters: GetBudgetRequest): Promise<BudgetSingle> {
        const response = await this.getBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get single budget limit.
     */
    async getBudgetLimitRaw(requestParameters: GetBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBudgetLimit.');
        }

        if (requestParameters.limitId === null || requestParameters.limitId === undefined) {
            throw new runtime.RequiredError('limitId','Required parameter requestParameters.limitId was null or undefined when calling getBudgetLimit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/limits/{limitId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"limitId"}}`, encodeURIComponent(String(requestParameters.limitId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetLimitSingleFromJSON(jsonValue));
    }

    /**
     * Get single budget limit.
     */
    async getBudgetLimit(requestParameters: GetBudgetLimitRequest): Promise<BudgetLimitSingle> {
        const response = await this.getBudgetLimitRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all attachments.
     * Lists all attachments of a budget.
     */
    async listAttachmentByBudgetRaw(requestParameters: ListAttachmentByBudgetRequest): Promise<runtime.ApiResponse<AttachmentArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listAttachmentByBudget.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentArrayFromJSON(jsonValue));
    }

    /**
     * Lists all attachments.
     * Lists all attachments of a budget.
     */
    async listAttachmentByBudget(requestParameters: ListAttachmentByBudgetRequest): Promise<AttachmentArray> {
        const response = await this.listAttachmentByBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all the budgets the user has made. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * List all budgets.
     */
    async listBudgetRaw(requestParameters: ListBudgetRequest): Promise<runtime.ApiResponse<BudgetArray>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetArrayFromJSON(jsonValue));
    }

    /**
     * List all the budgets the user has made. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * List all budgets.
     */
    async listBudget(requestParameters: ListBudgetRequest): Promise<BudgetArray> {
        const response = await this.listBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all budget limits for for this date range. 
     * Get list of budget limits by date
     */
    async listBudgetLimitRaw(requestParameters: ListBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitArray>> {
        if (requestParameters.start === null || requestParameters.start === undefined) {
            throw new runtime.RequiredError('start','Required parameter requestParameters.start was null or undefined when calling listBudgetLimit.');
        }

        if (requestParameters.end === null || requestParameters.end === undefined) {
            throw new runtime.RequiredError('end','Required parameter requestParameters.end was null or undefined when calling listBudgetLimit.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budget-limits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetLimitArrayFromJSON(jsonValue));
    }

    /**
     * Get all budget limits for for this date range. 
     * Get list of budget limits by date
     */
    async listBudgetLimit(requestParameters: ListBudgetLimitRequest): Promise<BudgetLimitArray> {
        const response = await this.listBudgetLimitRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all budget limits for this budget and the money spent, and money left. You can limit the list by submitting a date range as well. The \"spent\" array for each budget limit is NOT influenced by the start and end date of your query, but by the start and end date of the budget limit itself. 
     * Get all limits for a budget.
     */
    async listBudgetLimitByBudgetRaw(requestParameters: ListBudgetLimitByBudgetRequest): Promise<runtime.ApiResponse<BudgetLimitArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listBudgetLimitByBudget.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/limits`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetLimitArrayFromJSON(jsonValue));
    }

    /**
     * Get all budget limits for this budget and the money spent, and money left. You can limit the list by submitting a date range as well. The \"spent\" array for each budget limit is NOT influenced by the start and end date of your query, but by the start and end date of the budget limit itself. 
     * Get all limits for a budget.
     */
    async listBudgetLimitByBudget(requestParameters: ListBudgetLimitByBudgetRequest): Promise<BudgetLimitArray> {
        const response = await this.listBudgetLimitByBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all transactions linked to a budget, possibly limited by start and end
     * All transactions to a budget.
     */
    async listTransactionByBudgetRaw(requestParameters: ListTransactionByBudgetRequest): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listTransactionByBudget.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * Get all transactions linked to a budget, possibly limited by start and end
     * All transactions to a budget.
     */
    async listTransactionByBudget(requestParameters: ListTransactionByBudgetRequest): Promise<TransactionArray> {
        const response = await this.listTransactionByBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all the transactions within one budget limit. The start and end date are dictated by the budget limit.
     * List all transactions by a budget limit ID.
     */
    async listTransactionByBudgetLimitRaw(requestParameters: ListTransactionByBudgetLimitRequest): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listTransactionByBudgetLimit.');
        }

        if (requestParameters.limitId === null || requestParameters.limitId === undefined) {
            throw new runtime.RequiredError('limitId','Required parameter requestParameters.limitId was null or undefined when calling listTransactionByBudgetLimit.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/limits/{limitId}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"limitId"}}`, encodeURIComponent(String(requestParameters.limitId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * List all the transactions within one budget limit. The start and end date are dictated by the budget limit.
     * List all transactions by a budget limit ID.
     */
    async listTransactionByBudgetLimit(requestParameters: ListTransactionByBudgetLimitRequest): Promise<TransactionArray> {
        const response = await this.listTransactionByBudgetLimitRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all transactions without a budget, possibly limited by start and end
     * All transactions without a budget.
     */
    async listTransactionWithoutBudgetRaw(requestParameters: ListTransactionWithoutBudgetRequest): Promise<runtime.ApiResponse<TransactionArray>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/transactions-without-budget`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * Get all transactions without a budget, possibly limited by start and end
     * All transactions without a budget.
     */
    async listTransactionWithoutBudget(requestParameters: ListTransactionWithoutBudgetRequest): Promise<TransactionArray> {
        const response = await this.listTransactionWithoutBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a new budget. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new budget
     */
    async storeBudgetRaw(requestParameters: StoreBudgetRequest): Promise<runtime.ApiResponse<BudgetSingle>> {
        if (requestParameters.budgetStore === null || requestParameters.budgetStore === undefined) {
            throw new runtime.RequiredError('budgetStore','Required parameter requestParameters.budgetStore was null or undefined when calling storeBudget.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BudgetStoreToJSON(requestParameters.budgetStore),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new budget. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new budget
     */
    async storeBudget(requestParameters: StoreBudgetRequest): Promise<BudgetSingle> {
        const response = await this.storeBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Store a new budget limit under this budget.
     * Store new budget limit.
     */
    async storeBudgetLimitRaw(requestParameters: StoreBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling storeBudgetLimit.');
        }

        if (requestParameters.budgetLimitStore === null || requestParameters.budgetLimitStore === undefined) {
            throw new runtime.RequiredError('budgetLimitStore','Required parameter requestParameters.budgetLimitStore was null or undefined when calling storeBudgetLimit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/limits`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BudgetLimitStoreToJSON(requestParameters.budgetLimitStore),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetLimitSingleFromJSON(jsonValue));
    }

    /**
     * Store a new budget limit under this budget.
     * Store new budget limit.
     */
    async storeBudgetLimit(requestParameters: StoreBudgetLimitRequest): Promise<BudgetLimitSingle> {
        const response = await this.storeBudgetLimitRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update existing budget. This endpoint cannot be used to set budget amount limits.
     * Update existing budget.
     */
    async updateBudgetRaw(requestParameters: UpdateBudgetRequest): Promise<runtime.ApiResponse<BudgetSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateBudget.');
        }

        if (requestParameters.budgetUpdate === null || requestParameters.budgetUpdate === undefined) {
            throw new runtime.RequiredError('budgetUpdate','Required parameter requestParameters.budgetUpdate was null or undefined when calling updateBudget.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BudgetUpdateToJSON(requestParameters.budgetUpdate),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetSingleFromJSON(jsonValue));
    }

    /**
     * Update existing budget. This endpoint cannot be used to set budget amount limits.
     * Update existing budget.
     */
    async updateBudget(requestParameters: UpdateBudgetRequest): Promise<BudgetSingle> {
        const response = await this.updateBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update existing budget limit.
     * Update existing budget limit.
     */
    async updateBudgetLimitRaw(requestParameters: UpdateBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateBudgetLimit.');
        }

        if (requestParameters.limitId === null || requestParameters.limitId === undefined) {
            throw new runtime.RequiredError('limitId','Required parameter requestParameters.limitId was null or undefined when calling updateBudgetLimit.');
        }

        if (requestParameters.budgetLimit === null || requestParameters.budgetLimit === undefined) {
            throw new runtime.RequiredError('budgetLimit','Required parameter requestParameters.budgetLimit was null or undefined when calling updateBudgetLimit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/budgets/{id}/limits/{limitId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"limitId"}}`, encodeURIComponent(String(requestParameters.limitId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BudgetLimitToJSON(requestParameters.budgetLimit),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetLimitSingleFromJSON(jsonValue));
    }

    /**
     * Update existing budget limit.
     * Update existing budget limit.
     */
    async updateBudgetLimit(requestParameters: UpdateBudgetLimitRequest): Promise<BudgetLimitSingle> {
        const response = await this.updateBudgetLimitRaw(requestParameters);
        return await response.value();
    }

}
