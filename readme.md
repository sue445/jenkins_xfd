# Simple XFD(eXtreme Feedback Device) for Jenkins
## Overview
* Use only Jenkins default API
 * Not use [Websocket Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Websocket+Plugin). Because, can not use Websocket Plugin at [CloudBees](http://www.cloudbees.com/) FREE Plan

## How to use
1. download files (`git clone git://github.com/sue445/jenkins_xfd.git` or 'Download as a zip file')
2. `cp config.js.sample config.js`
3. edit `config.js` with your setting
4. upload files

## later than 1.502
set `hudson.model.Api.INSECURE=true` at comand line args

### ex. tomcat7
`$TOMCAT_DIR/bin/setenv.sh`

```bash
CATALINA_OPTS='-Dhudson.model.Api.INSECURE=true'
export CATALINA_OPTS
```

## Sample
http://sue445.github.com/jenkins_xfd/

## Other great XFDs
* [mzp/unageel](https://github.com/mzp/unageel/blob/master/xfd.html)
* [tuo/jenkins-monitor](https://github.com/tuo/jenkins-monitor)
* Chrome Extension
 * [Hudson Extension](https://chrome.google.com/webstore/detail/hudson-extension/hfncndbfmjmafoodaigpoicpbdfhhgdo)
 * [Jenkins Notifier for Chrome™](https://chrome.google.com/webstore/detail/jenkins-notifier-for-chro/mnjbjjllbclkpnebaddhkoonjelmiekm)
