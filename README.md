# Upload Wizard: Seamlessly Upload and Manage Files with Django REST Framework 🖼️📹


<p id="top" align="right">
  <a href="https://github.com/PrathmeshSoni">
    <img src="https://badges.pufler.dev/visits/prathmeshsoni/ImagesUpload?label=VISITOR&style=for-the-badge&logoColor=FFFFFF&color=purple&labelColor=640464&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWV5ZSIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGQ9Ik04IDJjMS45ODEgMCAzLjY3MS45OTIgNC45MzMgMi4wNzggMS4yNyAxLjA5MSAyLjE4NyAyLjM0NSAyLjYzNyAzLjAyM2ExLjYyIDEuNjIgMCAwIDEgMCAxLjc5OGMtLjQ1LjY3OC0xLjM2NyAxLjkzMi0yLjYzNyAzLjAyM0MxMS42NyAxMy4wMDggOS45ODEgMTQgOCAxNGMtMS45ODEgMC0zLjY3MS0uOTkyLTQuOTMzLTIuMDc4QzEuNzk3IDEwLjgzLjg4IDkuNTc2LjQzIDguODk4YTEuNjIgMS42MiAwIDAgMSAwLTEuNzk4Yy40NS0uNjc3IDEuMzY3LTEuOTMxIDIuNjM3LTMuMDIyQzQuMzMgMi45OTIgNi4wMTkgMiA4IDJaTTEuNjc5IDcuOTMyYS4xMi4xMiAwIDAgMCAwIC4xMzZjLjQxMS42MjIgMS4yNDEgMS43NSAyLjM2NiAyLjcxN0M1LjE3NiAxMS43NTggNi41MjcgMTIuNSA4IDEyLjVjMS40NzMgMCAyLjgyNS0uNzQyIDMuOTU1LTEuNzE1IDEuMTI0LS45NjcgMS45NTQtMi4wOTYgMi4zNjYtMi43MTdhLjEyLjEyIDAgMCAwIDAtLjEzNmMtLjQxMi0uNjIxLTEuMjQyLTEuNzUtMi4zNjYtMi43MTdDMTAuODI0IDQuMjQyIDkuNDczIDMuNSA4IDMuNWMtMS40NzMgMC0yLjgyNS43NDItMy45NTUgMS43MTUtMS4xMjQuOTY3LTEuOTU0IDIuMDk2LTIuMzY2IDIuNzE3Wk04IDEwYTIgMiAwIDEgMS0uMDAxLTMuOTk5QTIgMiAwIDAgMSA4IDEwWiI+PC9wYXRoPjwvc3ZnPg==">
  </a> 
</p>


## Overview
Introducing Upload Wizard, a robust web application built on Django REST Framework for effortless file uploads such as images, videos, and more. This project streamlines the process of transferring files from one server to another, providing a secure and efficient platform for managing your digital assets.


## Key Features
  - **File Upload**: Easily upload various file types including images, videos, documents, etc.
  - **Seamless Transfer**: Transfer files from one server to another with ease and reliability.
  - **Secure Handling**: Ensure data security and integrity during the upload process.
  - **File Management**: Organize and manage uploaded files efficiently within the system.
  - **Chrome Extension**: A custom-built extension for this project, allowing users to upload files directly from their browser.


## Tech Stack
- **Backend**: Python & Django
- **RESTful APIs**: Django REST Framework
- **Database**: MySQL


## Setup
- **Clone Repository**: `git clone https://github.com/prathmeshsoni/ImagesUpload.git && cd ImagesUpload`
- **Create & Activate Virtual Environment**: `python -m venv .venv && .venv\Scripts\activate.bat`
- **Install Dependencies**: `pip install -r requirements.txt`
- **Launch Server**: `python manage.py runserver`


## API Usage
- **Upload File**:
  - **cURL Command**:
    ```bash
    curl -X POST https://images.prathmeshsoni.works/images/ \
    -H "Authorization: token YOUR_API_TOKEN" \
    -F "file=@/path/to/your/file.png"
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "file": "https://images.prathmeshsoni.works/media/images/file.png"
    }
    ```
- **Demo Token**: `90ce30269636eef63fd28078149c3fa93790f5d5`


## Empower Your File Upload Workflow
- **Upload Wizard**: Simplifies the file upload process, enabling seamless file transfers while ensuring data security and reliability.
- **Explore Now**: [here](https://images.prathmeshsoni.works?ref=here-button) 🌐📁


<p align="left">
  <a href="#top">Back To Top</a>
</p>


<p align="right">
  <a href="https://github.com/PrathmeshSoni/ImagesUpload" target="_blank">Back To Repository</a>
</p>


---

**[ImagesUpload](https://images.prathmeshsoni.works?ref=footer-github)** - Provided by **[Prathmesh Soni](https://prathmeshsoni.works?ref=footer-github)**