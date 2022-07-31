pipeline {
    agent any

    stages {
        stage('Verify bbranch') {
            steps {
                echo "$GIT_BRANCH"
            }

        }
        stage('Build') {
            steps {
                sh 'sudo docker build -t aston-villa .'
            }
        }
    }
}
