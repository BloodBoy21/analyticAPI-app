---
title: Documents
description: Documents endpoints for the Analytics API
---

URL: `https://analytic-api.zeabur.app/api/documents`

### Upload document
  ```http
  POST /
  ```
  **Require Bearer Token**
  
  **Required** `multipart/form-data` with `file` field.

#### Responses

##### 200 OK

  ```json
  {
    "url": "string",
  }
  ```

##### 400 Bad Request

  ```json
  {
  "message": "string"
  }
  ```


### Add data to document
  ```http
  POST /add
  ```
  **Require Bearer Token**
  **Required** `multipart/form-data` with `file` field.

#### Responses

##### 200 OK

  ```json
  {
    "message": "string",
    "process_id": "number",
    "process_name": "string"
  }
  ```

##### 400 Bad Request

  ```json
  {
  "message": "string"
  }
  ```