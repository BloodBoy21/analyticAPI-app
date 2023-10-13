---
title: Example Guide
description: A guide to create an analytics process.
---

## How process works

This project is a simple implementation of pandas and fastapi to analyze anomalies in a dataset using the Gauss Bell Curve.

## Create analytics process
### Create the process

```bash
curl -X POST "https://api.analytics.idk.dev/api/analytics" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"name\":\"my process\",\"description\":\"Process to analyze custom data\",\"webhook\":\"https://myWebhook.com\",\"dataColumn\":\"count\",\"windowSize\":30,\"threshold\":2}"
```

### Upload the data

```bash
curl -X POST "https://api.analytics.idk.dev/api/documents" -H "accept: application/json" -H "Content-Type: multipart/form-data" -H "Authorization:"Bearer <Mytoken>"   -F "file=@myData.csv"
```

### Receive the results in your webhook

```json
{
  "process_id": 1,
  "process_name": "my process",
  "data": [
      {
          "id": 76,
          "count": 102.469
      },
      {
          "id": 96,
          "count": 176.827
      }
  ]
}
```