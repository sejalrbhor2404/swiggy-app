pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo "Cloning repo..."
                git branch: 'main', url: 'https://github.com/sejalrbhor2404/swiggy-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t swiggy-app .'
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                script {
                    sh 'docker stop swiggy-app || true'
                    sh 'docker rm swiggy-app || true'
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 --name swiggy-app swiggy-app'
                }
            }
        }
    }
}1~pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo "Cloning repo..."
                git branch: 'main', url: 'https://github.com/sejalrbhor2404/swiggy-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t swiggy-app .'
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                script {
                    sh 'docker stop swiggy-app || true'
                    sh 'docker rm swiggy-app || true'
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 --name swiggy-app swiggy-app'
                }
            }
        }
    }
}
