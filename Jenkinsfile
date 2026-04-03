node {
    stage('Clone Repo') {
        git branch: 'main', url: 'https://github.com/sejalrbhor2404/swiggy-app.git'
    }

    stage('Build Docker Image') {
        sh 'docker build -t swiggy-app .'
    }

    stage('Stop Old Container') {
        sh 'docker stop swiggy-app || true'
        sh 'docker rm swiggy-app || true'
    }

    stage('Run Container') {
        sh 'docker run -d -p 3000:3000 --name swiggy-app swiggy-app'
    }
}
