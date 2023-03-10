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
exports.CurrenciesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class CurrenciesApi extends runtime.BaseAPI {
    /**
     * Make this currency the default currency for the user. If the currency is not enabled, it will be enabled as well.
     * Make currency default currency.
     */
    async defaultCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling defaultCurrency.');
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
            path: `/api/v1/currencies/{code}/default`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencySingleFromJSON)(jsonValue));
    }
    /**
     * Make this currency the default currency for the user. If the currency is not enabled, it will be enabled as well.
     * Make currency default currency.
     */
    async defaultCurrency(requestParameters) {
        const response = await this.defaultCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * Delete a currency.
     * Delete a currency.
     */
    async deleteCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling deleteCurrency.');
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
            path: `/api/v1/currencies/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * Delete a currency.
     * Delete a currency.
     */
    async deleteCurrency(requestParameters) {
        await this.deleteCurrencyRaw(requestParameters);
    }
    /**
     * Disable a currency.
     * Disable a currency.
     */
    async disableCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling disableCurrency.');
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
            path: `/api/v1/currencies/{code}/disable`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencySingleFromJSON)(jsonValue));
    }
    /**
     * Disable a currency.
     * Disable a currency.
     */
    async disableCurrency(requestParameters) {
        const response = await this.disableCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * Enable a single currency.
     * Enable a single currency.
     */
    async enableCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling enableCurrency.');
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
            path: `/api/v1/currencies/{code}/enable`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencySingleFromJSON)(jsonValue));
    }
    /**
     * Enable a single currency.
     * Enable a single currency.
     */
    async enableCurrency(requestParameters) {
        const response = await this.enableCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * Get a single currency.
     * Get a single currency.
     */
    async getCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling getCurrency.');
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
            path: `/api/v1/currencies/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencySingleFromJSON)(jsonValue));
    }
    /**
     * Get a single currency.
     * Get a single currency.
     */
    async getCurrency(requestParameters) {
        const response = await this.getCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * Get the user\'s default currency.
     * Get the user\'s default currency.
     */
    async getDefaultCurrencyRaw() {
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
            path: `/api/v1/currencies/default`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencySingleFromJSON)(jsonValue));
    }
    /**
     * Get the user\'s default currency.
     * Get the user\'s default currency.
     */
    async getDefaultCurrency() {
        const response = await this.getDefaultCurrencyRaw();
        return await response.value();
    }
    /**
     * List all accounts with this currency.
     * List all accounts with this currency.
     */
    async listAccountByCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling listAccountByCurrency.');
        }
        const queryParameters = {};
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date.toISOString().substr(0, 10);
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
            path: `/api/v1/currencies/{code}/accounts`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountArrayFromJSON)(jsonValue));
    }
    /**
     * List all accounts with this currency.
     * List all accounts with this currency.
     */
    async listAccountByCurrency(requestParameters) {
        const response = await this.listAccountByCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all available budgets with this currency.
     * List all available budgets with this currency.
     */
    async listAvailableBudgetByCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling listAvailableBudgetByCurrency.');
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
            path: `/api/v1/currencies/{code}/available_budgets`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AvailableBudgetArrayFromJSON)(jsonValue));
    }
    /**
     * List all available budgets with this currency.
     * List all available budgets with this currency.
     */
    async listAvailableBudgetByCurrency(requestParameters) {
        const response = await this.listAvailableBudgetByCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all bills with this currency.
     * List all bills with this currency.
     */
    async listBillByCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling listBillByCurrency.');
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
            path: `/api/v1/currencies/{code}/bills`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BillArrayFromJSON)(jsonValue));
    }
    /**
     * List all bills with this currency.
     * List all bills with this currency.
     */
    async listBillByCurrency(requestParameters) {
        const response = await this.listBillByCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all budget limits with this currency
     * List all budget limits with this currency
     */
    async listBudgetLimitByCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling listBudgetLimitByCurrency.');
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
            path: `/api/v1/currencies/{code}/budget_limits`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BudgetLimitArrayFromJSON)(jsonValue));
    }
    /**
     * List all budget limits with this currency
     * List all budget limits with this currency
     */
    async listBudgetLimitByCurrency(requestParameters) {
        const response = await this.listBudgetLimitByCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all currencies.
     * List all currencies.
     */
    async listCurrencyRaw(requestParameters) {
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
            path: `/api/v1/currencies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencyArrayFromJSON)(jsonValue));
    }
    /**
     * List all currencies.
     * List all currencies.
     */
    async listCurrency(requestParameters) {
        const response = await this.listCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all recurring transactions with this currency.
     * List all recurring transactions with this currency.
     */
    async listRecurrenceByCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling listRecurrenceByCurrency.');
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
            path: `/api/v1/currencies/{code}/recurrences`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.RecurrenceArrayFromJSON)(jsonValue));
    }
    /**
     * List all recurring transactions with this currency.
     * List all recurring transactions with this currency.
     */
    async listRecurrenceByCurrency(requestParameters) {
        const response = await this.listRecurrenceByCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all rules with this currency.
     * List all rules with this currency.
     */
    async listRuleByCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling listRuleByCurrency.');
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
            path: `/api/v1/currencies/{code}/rules`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.RuleArrayFromJSON)(jsonValue));
    }
    /**
     * List all rules with this currency.
     * List all rules with this currency.
     */
    async listRuleByCurrency(requestParameters) {
        const response = await this.listRuleByCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all transactions with this currency.
     * List all transactions with this currency.
     */
    async listTransactionByCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling listTransactionByCurrency.');
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
            path: `/api/v1/currencies/{code}/transactions`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionArrayFromJSON)(jsonValue));
    }
    /**
     * List all transactions with this currency.
     * List all transactions with this currency.
     */
    async listTransactionByCurrency(requestParameters) {
        const response = await this.listTransactionByCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * Creates a new currency. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new currency
     */
    async storeCurrencyRaw(requestParameters) {
        if (requestParameters.currencyStore === null || requestParameters.currencyStore === undefined) {
            throw new runtime.RequiredError('currencyStore', 'Required parameter requestParameters.currencyStore was null or undefined when calling storeCurrency.');
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
            path: `/api/v1/currencies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.CurrencyStoreToJSON)(requestParameters.currencyStore),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencySingleFromJSON)(jsonValue));
    }
    /**
     * Creates a new currency. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new currency
     */
    async storeCurrency(requestParameters) {
        const response = await this.storeCurrencyRaw(requestParameters);
        return await response.value();
    }
    /**
     * Update existing currency.
     * Update existing currency.
     */
    async updateCurrencyRaw(requestParameters) {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling updateCurrency.');
        }
        if (requestParameters.currencyUpdate === null || requestParameters.currencyUpdate === undefined) {
            throw new runtime.RequiredError('currencyUpdate', 'Required parameter requestParameters.currencyUpdate was null or undefined when calling updateCurrency.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/vnd.api+json';
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
            path: `/api/v1/currencies/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.CurrencyUpdateToJSON)(requestParameters.currencyUpdate),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CurrencySingleFromJSON)(jsonValue));
    }
    /**
     * Update existing currency.
     * Update existing currency.
     */
    async updateCurrency(requestParameters) {
        const response = await this.updateCurrencyRaw(requestParameters);
        return await response.value();
    }
}
exports.CurrenciesApi = CurrenciesApi;
