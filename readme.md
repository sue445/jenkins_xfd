# Simple XFD for Jenkins
## Overview
* Use only Jenkins default API
 * Not use [Websocket Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Websocket+Plugin)

## How to use
1. download files (`git clone git://github.com/sue445/jenkins_xfd.git` or 'Download as a zip file')

2. edit `config.js`

``` javascript
var config = {
    job_urls : [
        "http://YOUR-JENKINS-ROOT/job/JOB-NAME/",
    ],
    reload_seconds : 30
};
```

3. upload files