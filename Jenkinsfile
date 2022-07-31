pipeline {
    agent any
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                  app = docker.build("web-app")
                }
            }
        }
        stage('Test'){
            steps {
                 echo 'testing'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
