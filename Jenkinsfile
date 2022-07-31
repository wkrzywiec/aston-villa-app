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
                docker.build("asto-villa/test")           
            }
        } 

        stage('Deploy') {                 
            steps {
                echo "$GIT_BRANCH"             
            }
        } 
    }
}
