pipeline {
    agent any

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

        // ✅ Install frontend
        stage('Install Frontend') {
            steps {
                sh 'npm install'
            }
        }

        // ✅ Build frontend
        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        // ✅ Install backend (IMPORTANT)
        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        // ✅ Docker build
        stage('Docker Build') {
            steps {
                sh 'docker build -t lavender-coast-app .'
            }
        }

        // ✅ Login to ECR
        stage('Login to ECR') {
            steps {
                sh '''
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 754248136315.dkr.ecr.eu-north-1.amazonaws.com
'''
            }
        }

        // ✅ Push image
        stage('Push to ECR') {
            steps {
                sh '''
docker tag lavender-coast-app:latest 754248136315.dkr.ecr.eu-north-1.amazonaws.com/mern-app:latest
docker push 754248136315.dkr.ecr.eu-north-1.amazonaws.com/mern-app:latest
'''
            }
        }
    }
}
