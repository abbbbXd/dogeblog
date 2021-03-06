module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  "apps" : [{
		"name" : "dogeblog", //项目的名字
		"script" : "app.js",  //项目主入口（Node.js）
		"env": {
			"COMMON_VARIABLE": "true"
		},
		"env_production" : {
			"NODE_ENV": "production"
		}
	}],
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '173.82.119.121',
      ref  : 'origin/master',
      repo : 'git@github.com:abbbbXd/dogeblog.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'root',
      host : '173.82.119.121',
      ref  : 'origin/master',
      repo : 'git@github.com:abbbbXd/dogeblog.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
