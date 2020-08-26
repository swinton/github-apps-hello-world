require('dotenv').config();

module.exports = {
  id: parseInt(process.env.GITHUB_APP_ID, 10),
  installationId: parseInt(process.env.GITHUB_APP_INSTALLATION_ID, 10),
  type: 'installation',
  privateKey: Buffer.from(process.env.GITHUB_APP_PRIVATE_KEY, 'base64').toString()
};
