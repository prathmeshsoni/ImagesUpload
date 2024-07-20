# Django File Uploader: Seamlessly Upload and Manage Files with Django REST Framework 🖼️📹

<p id="top" align="right">
  <a href="https://github.com/PrathmeshSoni">
  <img src="https://badges.pufler.dev/visits/prathmeshsoni/ImagesUpload?label=VISITOR&style=for-the-badge&logoColor=FFFFFF&color=purple&labelColor=640464&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWV5ZSIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGQ9Ik04IDJjMS45ODEgMCAzLjY3MS45OTIgNC45MzMgMi4wNzggMS4yNyAxLjA5MSAyLjE4NyAyLjM0NSAyLjYzNyAzLjAyM2ExLjYyIDEuNjIgMCAwIDEgMCAxLjc5OGMtLjQ1LjY3OC0xLjM2NyAxLjkzMi0yLjYzNyAzLjAyM0MxMS42NyAxMy4wMDggOS45ODEgMTQgOCAxNGMtMS45ODEgMC0zLjY3MS0uOTkyLTQuOTMzLTIuMDc4QzEuNzk3IDEwLjgzLjg4IDkuNTc2LjQzIDguODk4YTEuNjIgMS42MiAwIDAgMSAwLTEuNzk4Yy40NS0uNjc3IDEuMzY3LTEuOTMxIDIuNjM3LTMuMDIyQzQuMzMgMi45OTIgNi4wMTkgMiA4IDJaTTEuNjc5IDcuOTMyYS4xMi4xMiAwIDAgMCAwIC4xMzZjLjQxMS42MjIgMS4yNDEgMS43NSAyLjM2NiAyLjcxN0M1LjE3NiAxMS43NTggNi41MjcgMTIuNSA4IDEyLjVjMS40NzMgMCAyLjgyNS0uNzQyIDMuOTU1LTEuNzE1IDEuMTI0LS45NjcgMS45NTQtMi4wOTYgMi4zNjYtMi43MTdhLjEyLjEyIDAgMCAwIDAtLjEzNmMtLjQxMi0uNjIxLTEuMjQyLTEuNzUtMi4zNjYtMi43MTdDMTAuODI0IDQuMjQyIDkuNDczIDMuNSA4IDMuNWMtMS40NzMgMC0yLjgyNS43NDItMy45NTUgMS43MTUtMS4xMjQuOTY3LTEuOTU0IDIuMDk2LTIuMzY2IDIuNzE3Wk04IDEwYTIgMiAwIDEgMS0uMDAxLTMuOTk5QTIgMiAwIDAgMSA4IDEwWiI+PC9wYXRoPjwvc3ZnPg==">
  </a> 
</p>

## Overview
Introducing Django File Uploader, a robust web application built on Django REST Framework for effortless file uploads such as images, videos, and more. This project streamlines the process of transferring files from one server to another, providing a secure and efficient platform for managing your digital assets.

## Key Features
- **File Upload**: Easily upload various file types including images, videos, documents, etc.
- **Seamless Transfer**: Transfer files from one server to another with ease and reliability.
- **Secure Handling**: Ensure data security and integrity during the upload process.
- **File Management**: Organize and manage uploaded files efficiently within the system.

## Tech Stack
- **Backend**: Python & Django for robust functionality and data handling.
- **RESTful APIs**: Django REST Framework facilitates file upload endpoints.
- **Database**: MySQL for efficient storage and management of file-related data.

## Setup
1. Clone the repository: `git clone https://github.com/prathmeshsoni/ImagesUpload.git && cd ImagesUpload`
2. Create & Activate virtual environment: `python -m venv .venv && .venv\Scripts\activate.bat`
3. Install dependencies: `pip install -r requirements.txt`
4. Launch the Django development server: `python manage.py runserver`

## API Usage
### Upload File
To upload a file, use the following cURL command:

```sh
curl -X POST https://images.prathmeshsoni.works/images/ \
  -H "Authorization: token YOUR_API_TOKEN" \
  -F "file=@/path/to/your/file.png"
```

**Response**:
```json
{
  "id": 1,
  "file": "https://images.prathmeshsoni.works/media/images/file.png"
}
```

### Demo Token
- **API Token**: `90ce30269636eef63fd28078149c3fa93790f5d5`

Replace `YOUR_API_TOKEN` with the above token in the cURL command.


## Empower Your File Upload Workflow
Django File Uploader simplifies the file upload process, enabling users to seamlessly transfer files between servers while ensuring data security and reliability. Experience a user-friendly interface to manage your digital assets effectively.

Explore Django File Uploader now at <a href="https://images.prathmeshsoni.works?ref=here-button" target="_blank">here</a> 🌐📁

## All Set :)

<p style="float:left;" align="left">
  <a href="#top">Back To Top</a>
</p>

<p style="text-align:right;" align="right">
  <a href="https://github.com/PrathmeshSoni/ImagesUpload" target="_blank">Back To Repository</a>
</p>


---
**<a href="https://images.prathmeshsoni.works?ref=footer-github" target="_blank">ImagesUpload</a>** - Provided by **<a href="https://prathmeshsoni.works?ref=footer-github" target="_blank">Prathmesh Soni</a>**

