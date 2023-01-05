"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class CategoriesApi extends runtime.BaseAPI {
    /**
     * Delete a category. Transactions will not be removed.
     * Delete a category.
     */
    async deleteCategoryRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling deleteCategory.');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * Delete a category. Transactions will not be removed.
     * Delete a category.
     */
    async deleteCategory(requestParameters) {
        await this.deleteCategoryRaw(requestParameters);
    }
    /**
     * Get a single category.
     * Get a single category.
     */
    async getCategoryRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getCategory.');
        }
        const queryParameters = {};
        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start.toISOString().substr(0, 10);
        }
        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end.toISOString().substr(0, 10);
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CategorySingleFromJSON)(jsonValue));
    }
    /**
     * Get a single category.
     * Get a single category.
     */
    async getCategory(requestParameters) {
        const response = await this.getCategoryRaw(requestParameters);
        return await response.value();
    }
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByCategoryRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling listAttachmentByCategory.');
        }
        const queryParameters = {};
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AttachmentArrayFromJSON)(jsonValue));
    }
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByCategory(requestParameters) {
        const response = await this.listAttachmentByCategoryRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all categories.
     * List all categories.
     */
    async listCategoryRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CategoryArrayFromJSON)(jsonValue));
    }
    /**
     * List all categories.
     * List all categories.
     */
    async listCategory(requestParameters) {
        const response = await this.listCategoryRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all transactions in a category, optionally limited to the date ranges specified.
     * List all transactions in a category.
     */
    async listTransactionByCategoryRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling listTransactionByCategory.');
        }
        const queryParameters = {};
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start.toISOString().substr(0, 10);
        }
        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end.toISOString().substr(0, 10);
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories/{id}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionArrayFromJSON)(jsonValue));
    }
    /**
     * List all transactions in a category, optionally limited to the date ranges specified.
     * List all transactions in a category.
     */
    async listTransactionByCategory(requestParameters) {
        const response = await this.listTransactionByCategoryRaw(requestParameters);
        return await response.value();
    }
    /**
     * Get all transactions without a category, possibly limited by start and end
     * All transactions without a category.
     */
    async listTransactionWithoutCategoryRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start.toISOString().substr(0, 10);
        }
        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end.toISOString().substr(0, 10);
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories/transactions-without-category`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionArrayFromJSON)(jsonValue));
    }
    /**
     * Get all transactions without a category, possibly limited by start and end
     * All transactions without a category.
     */
    async listTransactionWithoutCategory(requestParameters) {
        const response = await this.listTransactionWithoutCategoryRaw(requestParameters);
        return await response.value();
    }
    /**
     * Creates a new category. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new category
     */
    async storeCategoryRaw(requestParameters) {
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new runtime.RequiredError('category', 'Required parameter requestParameters.category was null or undefined when calling storeCategory.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.CategoryToJSON)(requestParameters.category),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CategorySingleFromJSON)(jsonValue));
    }
    /**
     * Creates a new category. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new category
     */
    async storeCategory(requestParameters) {
        const response = await this.storeCategoryRaw(requestParameters);
        return await response.value();
    }
    /**
     * Update existing category.
     * Update existing category.
     */
    async updateCategoryRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling updateCategory.');
        }
        if (requestParameters.categoryUpdate === null || requestParameters.categoryUpdate === undefined) {
            throw new runtime.RequiredError('categoryUpdate', 'Required parameter requestParameters.categoryUpdate was null or undefined when calling updateCategory.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.CategoryUpdateToJSON)(requestParameters.categoryUpdate),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CategorySingleFromJSON)(jsonValue));
    }
    /**
     * Update existing category.
     * Update existing category.
     */
    async updateCategory(requestParameters) {
        const response = await this.updateCategoryRaw(requestParameters);
        return await response.value();
    }
}
exports.CategoriesApi = CategoriesApi;