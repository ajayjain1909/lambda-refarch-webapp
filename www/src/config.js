// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2mbnqhnam4nlub09inq7dkfhl9",     // CognitoClientID
  "api_base_url": "https://ha6pfalr5b.execute-api.us-east-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-to-do-app.auth.us-east-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d25kkrfmpviwhb.amplifyapp.com"                                      // AmplifyURL
};

export default config;
