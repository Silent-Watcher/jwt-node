const dotenv = require('dotenv');
const path = require('path');
const { env } = require('node:process');

/**
 * ! define mandatory environment variables inside the envVars array
 */
const envVars = ['PORT'];

dotenv.config();
const ENV_BASE_PATH = path.join(__dirname, '..', `.env.${env.APP_ENV}`);
dotenv.config({
	path: ENV_BASE_PATH,
});

function isEnvVarExits(envVars) {
	return new Promise((res, rej) => {
		let notDefinedEnvVars = envVars.filter((envVar) => !env[envVar]);
		if (notDefinedEnvVars.length > 0)
			throw {
				code: 500,
				error: {
					message: `following env vars are not defined:\n ${notDefinedEnvVars.join(
						', ',
					)}`,
				},
			};
		return res();
	});
}

async function runEnv(envVars) {
	try {
		let result = await isEnvVarExits(envVars);
	} catch (error) {
		process.exit(1);
	}
}

runEnv(envVars);
