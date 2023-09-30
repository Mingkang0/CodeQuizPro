/*
* Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import agconnect from '@agconnect/api';
import '@agconnect/instance';

/**
 * Initializes app configuration
 */

export function configInstance() {
  agconnect.instance().configInstance(agConnectConfig);
}

// paste your SDK Code Snippet here, SDK Code Snippet can be found on your project general information
var agConnectConfig =
{
  "agcgw": {
    "backurl": "connect-dra.hispace.hicloud.com",
    "url": "connect-dra.dbankcloud.cn",
    "websocketbackurl": "connect-ws-dra.hispace.dbankcloud.com",
    "websocketurl": "connect-ws-dra.hispace.dbankcloud.cn"
  },
  "client": {
    "cp_id": "10060000024183182",
    "product_id": "388421841221700807",
    "client_id": "1253703172698983360",
    "client_secret": "4B4FDBE477E261EC6718DBAD8A8998FA517BB7357C717778DE8E33AB3F7E698E",
    "project_id": "388421841221700807",
    "app_id": "109269671",
    "api_key": "DAEDADdtVUBqBgKZetmMLApiRtPZ2Kbp9uxBz+7ojuV5E02QqOkp+mlchAPsPe6nRCpGrRd3XKUnOVn/D9EfUASf9DREg1Q1OYKgrg==",
    "package_name": "com.android.codequizpro"
  },
  "service": {
    "analytics": {
      "collector_url": "datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn",
      "collector_url_ru": "datacollector-drru.dt.dbankcloud.ru,datacollector-drru.dt.hicloud.com",
      "collector_url_sg": "datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn",
      "collector_url_de": "datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn",
      "collector_url_cn": "datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn",
      "resource_id": "p1",
      "channel_id": ""
    },
    "edukit": {
      "edu_url": "edukit.edu.cloud.huawei.com.cn",
      "dh_url": "edukit.edu.cloud.huawei.com.cn"
    },
    "search": {
      "url": "https://search-dra.cloud.huawei.com"
    },
    "cloudstorage": {
      "storage_url_sg_back": "https://agc-storage-dra.cloud.huawei.asia",
      "storage_url_ru_back": "https://agc-storage-drru.cloud.huawei.ru",
      "storage_url_ru": "https://agc-storage-drru.cloud.huawei.ru",
      "storage_url_de_back": "https://agc-storage-dre.cloud.huawei.eu",
      "storage_url_de": "https://ops-dre.agcstorage.link",
      "storage_url": "https://agc-storage-drcn.platform.dbankcloud.cn",
      "storage_url_sg": "https://ops-dra.agcstorage.link",
      "storage_url_cn_back": "https://agc-storage-drcn.cloud.huawei.com.cn",
      "storage_url_cn": "https://agc-storage-drcn.platform.dbankcloud.cn"
    },
    "ml": {
      "mlservice_url": "ml-api-dra.ai.dbankcloud.com,ml-api-dra.ai.dbankcloud.cn"
    }
  },
  "region": "SG",
  "configuration_version": "3.0"
}

