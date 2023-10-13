---
title: Analytics
description: Analytics endpoints for the Analytics API
---

**All analytics process has a 30 day expiration date.**

URL: `https://analytic-api.zeabur.app/api/analytics`

### Create analytics process
      
  ```http
  POST api/analytics
  ```

##### Body Parameters

```json
{
  "name": "string",
  "description": "string" = "",
  "webhook": "string",
  "dataColumn": "string" = "data",
  "windowSize": "number" = 10,
  "threshold": "number" = 2,
}
```

#### Responses 

##### 200 OK

```json
{
  "status": "string",
  "token": "string"
}
```

##### 400 Bad Request

  ```json
  {
    "message": "string"
  }
  ```

### Get analytics process
      
  ```http
  GET /analytics?token=${token}
  ```

#### Responses

##### 200 OK

  ```json
  {
    "data": [{}],
    "process_id": "number",
    "process_name": "string",
  }
  ```

##### 400 Bad Request

  ```json
  {
    "message": "string"
  }
  ```

### Update analytic process
      
  ```http
  PATCH /analytics
  ```
  **Require Bearer Token**

##### Body Parameters
  
  ```json
  {
    "name": "string",
    "description": "string",
    "webhook": "string",
    "dataColumn": "string",
    "windowSize": "number" = 10,
    "threshold": "number" = 2,
  }
  ```

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

### Re run analytic process
```http
    POST /analytics/process
```
**Require Bearer Token**

#### Responses

##### 200 OK

  ```json
  {
    "data": [{}],
    "process_id": "number",
    "process_name": "string",
  }
  ```

##### 400 Bad Request

  ```json
  {
    "message": "string"
  }
  ```