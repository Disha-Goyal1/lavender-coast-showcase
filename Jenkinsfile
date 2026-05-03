pipeline {
agent any

```
environment {
    AWS_REGION = 'eu-north-1'
    ECR_URI = '754248136315.dkr.ecr.eu-north-1.amazonaws.com/mern-app'
}

stages {

    stage('Clone') {
        steps {
            git branch: 'main', url: 'https://github.com/Disha-Goyal1/lavender-coast-showcase.git'
        }
    }

    stage('Build') {
        steps {
            sh 'npm install'
            sh 'npm run build'
        }
    }

    stage('Docker Build') {
        steps {
            sh 'docker build -t lavender-coast-app .'
        }
    }

    stage('Login to ECR') {
        steps {
            sh '''
            aws ecr get-login-password --region $AWS_REGION | \
            docker login --username AWS --password-stdin 754248136315.dkr.ecr.eu-north-1.amazonaws.com
            '''
        }
    }

    stage('Push to ECR') {
        steps {
            sh '''
            docker tag lavender-coast-app:latest $ECR_URI:latest
            docker push $ECR_URI:latest
            '''
        }
    }
}
```

}
