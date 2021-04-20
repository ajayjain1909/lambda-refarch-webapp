// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4pvk3iv8qgq9saj0oae4gd1fj0",     // CognitoClientID
  "api_base_url": "https://0s5cvzhcvk.execute-api.us-east-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-to-do-app.auth.us-east-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2x872pinnft03.amplifyapp.com"                                      // AmplifyURL
};

export default config;
