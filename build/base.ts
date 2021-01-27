import child_process = require('child_process')
child_process.exec('webpack-dev-server --development')
child_process.exec('npm run build:nav.watch')