pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh '''
                    npm install
                '''
            }
            post {
                success {
                    echo "Build successfully"
                }
                failure {
                    echo "Failed to Build"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
            post {
                success {
                    echo "test passed"
                }
                failure {
                    echo "Failed to test"
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
