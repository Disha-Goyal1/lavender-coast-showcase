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
                sh 'docker tag lavender-coast-app:latest <ECR_URI>'
                sh 'docker push <ECR_URI>'
            }
        }
    }
}
