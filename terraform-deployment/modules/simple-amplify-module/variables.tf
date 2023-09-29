

# - Amplify -
variable "app_name" {
  type        = string
  default     = "portfolio-App"
  description = "The name of the Amplify Application"
}
variable "enable_auto_branch_creation" {
  type        = bool
  default     = true
  description = "Enables automated branch creation for the Amplify app"
}
variable "enable_auto_branch_deletion" {
  type        = bool
  default     = true
  description = "Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository"
}
variable "auto_branch_creation_patterns" {
  type        = list(any)
  default     = ["main", ]
  description = "Automated branch creation glob patterns for the Amplify app. Ex. feat*/*"
}
variable "enable_auto_build" {
  type        = bool
  default     = true
  description = "Enables auto-building of autocreated branches for the Amplify App."
}
variable "enable_amplify_app_pr_preview" {
  type        = bool
  default     = false
  description = "Enables pull request previews for the autocreated branch"
}
variable "enable_performance_mode" {
  type        = bool
  default     = false
  description = "Enables performance mode for the branch. This keeps cache at Edge Locations for up to 10min after changes"
}
variable "framework" {
  type        = string
  default     = "React"
  description = "Framework for the autocreated branch"
}
variable "existing_repo_url" {
  type        = string
  default     = null
  description = "URL for the existing repo"
}
variable "github_access_token" {
  type        = string
  default     = null
  description = "Optional GitHub access token. Only required if using GitHub repo."
}
variable "amplify_app_framework" {
  type    = string
  default = "React"
}
variable "amplify_app_domain_name" {
  type        = string
  default     = "portfolio.emmalillazoli.net"
  description = "The name of your domain. Ex. naruto.ninja"
}
variable "RESEND_API_KEY" {
  type        = string
  default     = null
  description = "Resend API key"
}
