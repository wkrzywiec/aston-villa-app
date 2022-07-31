pipeline {
    agent any
    stages {
         stage('Verify Branch') { 
            echo "${GIT_BRANCH}
            }
        }

        stage('Build') { 
            steps { 
                sh 'docker build -t aston-villa .'
                
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
