#!/usr/bin/env node
const logger = require('pino')();

const { Octokit } = require('@octokit/core');
const { createAppAuth } = require('@octokit/auth-app');

const appCredentials = require('./lib/app-credentials');

async function main() {
  try {
    // Instantiate new Octokit client
    const octokit = new Octokit({
      baseUrl: `https://${process.env.GHE_HOST}/api/v3`,
      authStrategy: createAppAuth,
      auth: {
        ...appCredentials
      }
    });

    // Create issue in demo-days/Spoon-Knife
    // https://docs.github.com/en/rest/reference/issues#create-an-issue
    const issue = await octokit.request('POST /repos/:owner/:repo/issues', {
      owner: 'demo-days',
      repo: 'Spoon-Knife',
      title: 'Hello world',
      body: ':wave: :earth_americas:'
    });
    logger.info(issue);
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
}

main();
