# ivs
This repository contains a dockerized application based on the requirements from IVS.

## Running locally
### Pre-requisite
1. You must have docker installed in your local machine (https://www.docker.com/get-started).
2. Install docker-compose cli.

### Steps
1. Run the command to start.
  ```sh
    docker-compose up --build -d
  ```
2. acccess localhost to view the live application
3. Run the command to teardown.
  ```sh
    docker-compose down
  ```

## Deployment

### Pre-requisite
1. You must have a valid AWS Account.

### Steps
1. Open you AWS Account
2. Go to EC2 Dashboard
3. Launch Instance and enable http and https in the security group. Leave everything to default.
4. Connect to instance via SSH/PuttY
5. Install docker into the EC2 instance
  ```sh
    sudo yum update -y #updates linux package manager
    
    sudo amazon-linux-extras install docker #installs docker utils from aws repo
    
    sudo yum install docker #installs docker itself
    
    sudo service docker start #start docker service note: this should be run every reboot of instance.
    
    sudo usermod -a -G docker ec2-user #adds current user to docker group
    
    docker info 
  ```
6. Install git 
  ```sh
    sudo yum install git
  ```
7. Checkout this repository from github
  ```sh
    cd ~ & git clone git@github.com:ianmarquez/ivs.git
  ```
8. Install docker-compose cli.
  ```sh
    #install docker-compose from repository
    sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-`uname -s`-`uname -m` | sudo tee /usr/local/bin/docker-compose > /dev/null

    #Change permisions
    sudo chmod +x /usr/local/bin/docker-compose

    #Create sym links
    ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

    docker-compose --version
  ```
9. run the command 

  ```sh
    cd ~ & docker-compose up --build -d
  ```
10. Validate by accessing http url from ec2 instance.