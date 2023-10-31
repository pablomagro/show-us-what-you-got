#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestFiveStack } from '../lib/infrastructure-stack';

console.log( process.env.CDK_DEFAULT_ACCOUNT, process.env.CDK_DEFAULT_REGION , process.env.DOMAIN_NAME);

const app = new cdk.App();
new TestFiveStack(app, 'TestFiveStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION ,
  }
});