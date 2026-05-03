pipeline {
    agent any

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

        stage('Push to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 754248136315.dkr.ecr.eu-north-1.amazonaws.com

                docker tag lavender-coast-app:latest 754248136315.dkr.ecr.eu-north-1.amazonaws.com/lavender-coast-app:latest

                docker push 754248136315.dkr.ecr.eu-north-1.amazonaws.com/lavender-coast-app:latest
                '''
            }
        }
    }
}
