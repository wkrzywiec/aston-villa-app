pipeline {

    agent any
    stages {
        stage('Verify') {                 
            steps {
                echo "$GIT_BRANCH"             
            }
        }

        stage('Build') {                 
            steps {
                app = docker.build("asto-villa/test")           
            }
        } 

        stage('Deploy') {                 
            steps {
                echo "$GIT_BRANCH"             
            }
        } 
    }
}
