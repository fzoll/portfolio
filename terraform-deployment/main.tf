// This is a template file for a basic deployment.
// Modify the parameters below with actual values
module "portfolio-qs" {
  // location of the module - can be local or git repo
  source = "./modules/simple-amplify-module"

  # - Amplify App -
  existing_repo_url   = "https://github.com/fzoll/portfolio"
  github_access_token = var.github_access_token
  RESEND_API_KEY      = var.RESEND_API_KEY
}
