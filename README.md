<div id="top"></div>

# 📌bookshelf-api📚

Bookshelf API is a project to store book information in the form of data from client to server

## 🎯Criteria

1. The API can store books via routes:

- Method : `POST`
- URL : `/books`
- Body Request:

```
{
  "name": string,
  "year": number,
  "author": string,
  "summary": string,
  "publisher": string,
  "pageCount": number,
  "readPage": number,
  "reading": boolean
}
```

- The book object stored on the server has a structure like an example below:
<pre>
{
  <b>"id": "Qbax5Oy7L8WKf74l",</b>
  "name": "Buku A",
  "year": 2010,
  "author": "John Doe",
  "summary": "Lorem ipsum dolor sit amet",
  "publisher": "Dicoding Indonesia",
  "pageCount": 100,
  "readPage": 25,
  <b>"finished": false,</b>
  "reading": false,
  <b>"insertedAt": "2021-03-04T09:11:44.598Z",</b>
  <b>"updatedAt": "2021-03-04T09:11:44.598Z"</b>
}
</pre>

- Server responding failed

  - The client did not attach the `name` property to the Request Body:

    - Status Code: `400`
    - Response Body:

    ```
    {
      "status": "fail",
      "message": "Gagal menambahkan buku. Mohon isi nama buku"
    }
    ```

  - The client attaches the value of the `readPage` property which is greater than the value of the `pageCount` property, then:
    - Status Code: `400`
    - Response Body:
    ```
    {
      "status": "fail",
      "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
    }
    ```
  - The server failed to load the book for a common reason (generic error). Then the server will respond with:
    - Status Code : `500`
    - Response Body:
    ```
    {
      "status": "error",
      "message": "Buku gagal ditambahkan"
    }
    ```

- When the book is entered **successfully**, the server should return a response with:
  - Status Code : `201`
  - Response Body:
  ```
  {
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "1L7ZtDUFeGs7VlEt"
    }
  }
  ```

2. The API can display entire books via routes:

- Method : `GET`
- URL: `/books`
- The server should return a response with:
  - Status Code : `200`
  - Response Body:
  ```
    {
    "status": "success",
    "data": {
        "books": [
            {
               "id": "Qbax5Oy7L8WKf74l",
               "name": "Buku A",
               "publisher": "Dicoding Indonesia"
            },
            {
              "id": "1L7ZtDUFeGs7VlEt",
              "name": "Buku B",
              "publisher": "Dicoding Indonesia"
            },
            {
              "id": "K8DZbfI-t3LrY7lD",
              "name": "Buku C",
              "publisher": "Dicoding Indonesia"
            }
        ]
    }
  }
  ```
- If no books have been entered, the server can respond with an empty `books` array.

```
{
  "status": "success",
  "data": {
      "books": []
  }
}
```

3. The API can display book details via routes:

- Method : `GET`
- URL: `/books/{bookId}`
- If the book with the `id` attached by the client is not found, then the server should return a response with:

  - Status Code : `404`
  - Response Body:

  ```
  {
    "status": "fail",
    "message": "Buku tidak ditemukan"
  }
  ```

- When a book with an attached `id` is **found**, then the server should return a response with:

```
{
  "status": "success",
  "data": {
      "book": {
          "id": "aWZBUW3JN_VBE-9I",
          "name": "Buku A Revisi",
          "year": 2011,
          "author": "Jane Doe",
          "summary": "Lorem Dolor sit Amet",
          "publisher": "Dicoding",
          "pageCount": 200,
          "readPage": 26,
          "finished": false,
          "reading": false,
          "insertedAt": "2021-03-05T06:14:28.930Z",
          "updatedAt": "2021-03-05T06:14:30.718Z"
      }
  }
}
```

4. API can modify book data by `id` via route:

- Method : `PUT`
- URL : `/books/{bookId}`
- Body Request:

```
{
  "name": string,
  "year": number,
  "author": string,
  "summary": string,
  "publisher": string,
  "pageCount": number,
  "readPage": number,
  "reading": boolean
}
```

- The server should respond to **fail** when:

  - The client does not attach the `name` property to the request body. Then the server will respond with:

    - Status Code : `400`
    - Response Body:

    ```
    {
      "status": "fail",
      "message": "Gagal memperbarui buku. Mohon isi nama buku"
    }
    ```

  - The client attaches the value of the `readPage` property which is greater than the value of the `pageCount` property. Then the server will respond with:
    - Status Code : `400`
    - Response Body:
    ```
    {
      "status": "fail",
      "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
    }
    ```
  - The `id` attached by the client is not found by the server. Then the server will respond with:
    - Status Code : `400`
    - Response Body:
    ```
    {
      "status": "fail",
      "message": "Gagal memperbarui buku. Id tidak ditemukan"
    }
    ```

- When the book is **updated successfully**, the server should return a response with:
  - Status Code : `200`
  - Response Body:
  ```
  {
    "status": "success",
    "message": "Buku berhasil diperbarui"
  }
  ```

5. API can delete books by id via route:

- Method : `DELETE`
- URL: `/books/{bookId}`
- If the attached `id` is not owned by any book, then the server should return the following response:

  - Status Code : `404`
  - Response Body:

  ```
  {
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
  }
  ```

- If the `id` is found, then the book should be deleted and the server returns the following response:
  - Status Code : `200`
  - Response Body:
  ```
  {
    "status": "success",
    "message": "Buku berhasil dihapus"
  }
  ```

## 🎯Features

- Query parameters feature on route GET `/books` (Gets all books)
- Implement CORS on all resources
- Using ESLint AirBnb

<p align="right"><a href="#top">Back to top</a></p>
