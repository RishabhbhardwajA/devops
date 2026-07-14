@Library("library") _

pipeline {
    agent {
        label "vinod"
    }

    stages {

        stage("hello") {
            steps {
                hello()
            }
        }

        stage("code") {
            steps {
                script {
                    clone("https://github.com/RishabhbhardwajA/devops.git", "main")
                }
            }
        }

        stage("build") {
            steps {
                script {
                    build("simple-web-app:latest")
                }
            }
        }

        stage("Push to DockerHub") {
            steps {
                script{
                    creds("simple-web-app","latest","agent-hai")
                }
                
            }
        }

        stage("Deploy") {
            steps {
                final_step()
            }
        }

    }
}
