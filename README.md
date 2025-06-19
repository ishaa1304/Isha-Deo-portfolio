# ☁️ Cloud Resume Challenge – Isha Deo

This is my completed **Cloud Resume Challenge** project, inspired by Forrest Brazeal's initiative. It showcases a resume website built and deployed entirely using **cloud-native tools**, **DevOps practices**, and **serverless architecture** — with a focus on AWS services and CI/CD pipelines.

---

## 🌐 Live Website

🖥️ [Resume Website (CloudFront URL)](https://dtngue79q3p8c.cloudfront.net)

---

## 📁 Project Overview

| Component          | Technology Used                              |
|--------------------|-----------------------------------------------|
| **Frontend**        | HTML, CSS, JavaScript (Vite + React)         |
| **Hosting**         | AWS S3 (static site) + CloudFront CDN        |
| **Domain**          | *(No custom domain – using CloudFront URL)*  |
| **Backend**         | AWS Lambda (Python) + DynamoDB               |
| **API Gateway**     | AWS HTTP API Gateway                         |
| **Visitor Counter** | Updates & displays visit count               |
| **CI/CD**           | GitHub Actions (S3 deploy + CloudFront invalidation) |
| **IAC**             | Manual setup (Terraform attempted but rolled back)   |

---

## ✅ Features Implemented

### 🌍 Frontend (Static Resume Website)
- Built with **React** + **Vite**
- Hosted on an **S3 bucket**
- Delivered globally with **CloudFront**
- HTTPS enabled using AWS Certificate Manager (ACM)

### 🧮 Visitor Counter (Serverless Backend)
- Visitor count stored in **AWS DynamoDB**
- Updated and retrieved using an **AWS Lambda** function (Python)
- Lambda invoked securely through **API Gateway**

### 🔄 CI/CD Automation
- **GitHub Actions** workflow:
  - Builds frontend and deploys to S3 on every push
  - Invalidates CloudFront cache to reflect latest changes

---

## 🗂️ Project Structure
portfolio/
├── dist/ # Compiled frontend files
├── src/ # React source code
├── lambda/visitorCount.py # Lambda function (Python)
├── .github/workflows/ # GitHub Actions CI/CD
└── README.md 

---

## ⚙️ GitHub Actions Workflows

1. **S3 Deployment**
   - Runs on every push to `main`
   - Uses `jakejarvis/s3-sync-action@master` to deploy `dist/` to S3

2. **CloudFront Invalidation**
   - Uses `chetan/invalidate-cloudfront-action@v2`
   - Clears CDN cache to reflect latest frontend changes

---

## 🧰 AWS Services Used

- **S3** – Static website hosting
- **CloudFront** – CDN for global delivery
- **DynamoDB** – Stores visitor count
- **Lambda (Python)** – Handles increment logic
- **API Gateway** – HTTP API endpoint for frontend/backend communication
- **Certificate Manager** – TLS certificate for HTTPS (optional)
- **IAM** – Used for access key creation for GitHub Secrets

---

## 🔐 GitHub Secrets Used

| Secret Name             | Description                     |
|-------------------------|---------------------------------|
| `AWS_ACCESS_KEY_ID`     | IAM access key                  |
| `AWS_SECRET_ACCESS_KEY` | IAM secret key                  |

These were used in GitHub Actions to access AWS and automate deployment.

---

## 📚 Lessons Learned

- Gained hands-on experience with **AWS serverless architecture**
- Understood how to securely host and deploy static apps on **S3 + CloudFront**
- Built CI/CD pipelines with **GitHub Actions**
- Connected frontend and backend using **API Gateway** and **Lambda**

---

## 🚀 Future Improvements

- Add **custom domain** using Route 53 + ACM
- Add **monitoring and alerting** via AWS CloudWatch
- Convert entire setup to **Infrastructure as Code (Terraform/CDK)**
- Improve frontend with animations, dark mode, and accessibility

---

## 🙌 Credits

- Inspired by [The Cloud Resume Challenge](https://cloudresumechallenge.dev/) by **Forrest Brazeal**

---

## 📬 Contact

If you'd like to connect or discuss cloud/devops, feel free to reach out on [LinkedIn](#) *(https://www.linkedin.com/in/isha-deo/)* 


