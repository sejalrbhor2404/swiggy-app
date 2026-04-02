provider "aws" {
  region = "us-east-1"
}

# Create ECR Repository
resource "aws_ecr_repository" "swiggy_repo" {
  name = "swiggy-app"
}
