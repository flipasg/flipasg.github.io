# API CONTRACTS

This project currently has no backend APIs.  
Future extensions may include:

## Example: Blog posts API

- **GET /api/posts**
  - 200 OK
  ```json
  [
    {
      "id": "1",
      "title": "My first post",
      "date": "2025-01-01",
      "content": "..."
    }
  ]
  ```

````
  - Error responses
    - 500:
    ```json
      { "error": "Internal Server Error" }
    ```
````
