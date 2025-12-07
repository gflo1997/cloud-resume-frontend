# Cloud Resume Challenge – Frontend  
This repository contains the frontend portion of my Cloud Resume Challenge.  
It is a static website hosted on **Azure Static Web Apps** that presents my resume and displays a live visitor count connected to a real Azure backend.

## Overview
The goal of this project is to demonstrate practical cloud engineering skills by building a fully functional, cloud-hosted resume supported by a serverless API.  
The frontend is intentionally simple, clean, and fast. It is built with plain HTML, CSS, and JavaScript to keep the focus on cloud services and architecture.

## Key Features
- **Hosted on Azure Static Web Apps** for global low-latency delivery.  
- **Live visitor counter** powered by my backend Azure Function.  
- **Client side fetch request** that retrieves and displays the current visitor count.  
- **Automatic CI CD** from GitHub to Azure using GitHub Actions.

## How the Visitor Counter Works
The frontend makes a request to my backend API endpoint:
This call triggers:
- An Azure Function written in Python.
- The function reads and increments a counter stored in Azure Table Storage.
- The updated value is returned as JSON.
- The page displays the total number of visits.

## Architecture
- Azure Static Web Apps hosts this site.
- Azure Functions and Azure Table Storage provide the backend.

## High level flow:
- User loads the site.
- JavaScript executes a fetch to the Azure Function API.
- The Function updates the counter in Table Storage.
- The updated count is returned and displayed in the UI.

## Deployment
- Deployment is handled automatically through GitHub Actions.
- Every push to main triggers a new build and deploy of the Static Web App.

## Repository Structure
**index.html**
**styles.css**
**script.js**
**.github/workflows/azure-static-web-apps.yml**

## Related Repository
Backend (Azure Function): https://github.com/gflo1997/cloud-resume-backend

## Live Website
Live site URL (Azure Static Web Apps): https://mango-rock-0b7c7e40f.3.azurestaticapps.net/
