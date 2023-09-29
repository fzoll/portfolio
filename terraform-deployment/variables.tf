# Replace default value with your desired AWS Region
variable "aws_region" {
  type    = string
  default = "eu-west-1"
}

# Tags
variable "tags" {
  type        = map(any)
  description = "Tags to apply to resources"
  default = {
    IAC_PROVIDER = "Terraform"
  }
}

variable "github_access_token" {
  type = string
}

variable "RESEND_API_KEY" {
  type = string
}
