/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ApiResponseVoid } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Migration<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Product 테이블의 brand_name, ingredients, product_detail, product_name을 Translation 테이블로 마이그레이션
   *
   * @tags Migration
   * @name MigrateProductTranslations
   * @summary Product 번역 데이터 마이그레이션
   * @request POST:/api/migration/products/translations
   * @secure
   */
  migrateProductTranslations = (params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/migration/products/translations`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 특정 Product ID의 brand_name, ingredients, product_detail, product_name을 Translation 테이블로 마이그레이션
   *
   * @tags Migration
   * @name MigrateSingleProduct
   * @summary 특정 Product 번역 데이터 마이그레이션
   * @request POST:/api/migration/products/translations/{productId}
   * @secure
   */
  migrateSingleProduct = (productId: number, params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/migration/products/translations/${productId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 모든 Product의 번역이 제대로 마이그레이션 되었는지 검증
   *
   * @tags Migration
   * @name ValidateMigration
   * @summary Product 번역 마이그레이션 검증
   * @request POST:/api/migration/products/translations/validate
   * @secure
   */
  validateMigration = (params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/migration/products/translations/validate`,
      method: "POST",
      secure: true,
      ...params,
    });
}
