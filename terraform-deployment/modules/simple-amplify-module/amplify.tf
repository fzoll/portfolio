# Relevant values:
# - AWS Region
# - Cognito User Pool ID
# - Cognito Web Client ID
# - Cognito Identity Pool ID
# - AppSync GraphQL Region
# - AppSync GraphQL Endpoint ID
# - AppSync GraphQL Authentication Type ('AMAZON_COGNITO_USER_POOLS')
# - Relevant S3 Buckets

resource "aws_amplify_app" "app" {
  name       = var.app_name
  repository = var.existing_repo_url
  platform   = "WEB_COMPUTE"
  # enable_branch_auto_build = true


  enable_auto_branch_creation   = var.enable_auto_branch_creation
  enable_branch_auto_deletion   = var.enable_auto_branch_deletion
  auto_branch_creation_patterns = var.auto_branch_creation_patterns // default is just main
  # OPTIONAL - Necessary if not using oauth_token or access_token (used for GitLab and GitHub repos)
  iam_service_role_arn = null
  access_token         = var.github_access_token // optional, only needed if using github repo

  build_spec = file("${path.root}/../amplify.yml")
  # Redirects for Single Page Web Apps (SPA)
  # https://docs.aws.amazon.com/amplify/latest/userguide/redirects.html#redirects-for-single-page-web-apps-spa
  custom_rule {
    source = "/<*>"
    status = "404-200"
    target = "/index.html"
  }

  environment_variables = {
    REGION = "${data.aws_region.current.id}"
    RESEND_API_KEY = var.RESEND_API_KEY
  }
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.app.id
  branch_name = "main"

  enable_auto_build = true

  framework = "Next.js - SSR"
  stage     = "PRODUCTION"

  environment_variables = {
    APP_ENVIRONMENT = "main"
  }
}

resource "aws_amplify_domain_association" "example" {
  app_id      = aws_amplify_app.app.id
  domain_name = var.amplify_app_domain_name

  # https://example.com
  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }

  # https://www.example.com
  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "www"
  }
  #   # https://dev.example.com
  #   sub_domain {
  #     branch_name = aws_amplify_branch.amplify_branch_dev[0].branch_name
  #     prefix      = "dev"
  #   }
  #   # https://www.dev.example.com
  #   sub_domain {
  #     branch_name = aws_amplify_branch.amplify_branch_dev[0].branch_name
  #     prefix      = "www.dev"
  #   }
}
