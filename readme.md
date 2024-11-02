# E-Store Docker Kubernetes Project

## Table of Contents
1. [Purpose of the E-Store](#purpose-of-the-e-store)
2. [Using Docker](#using-docker)
    - [Building the Docker Image](#building-the-docker-image)
    - [Running the Docker Container](#running-the-docker-container)
    - [Testing the API with Postman](#testing-the-api-with-postman)
3. [Using Minikube](#using-minikube)
    - [Setting Up Minikube](#setting-up-minikube)
    - [Deploying the E-Store Solution](#deploying-the-e-store-solution)
    - [Accessing the E-Store Service](#accessing-the-e-store-service)

---

## Purpose of the E-Store

The **E-Store** is a simple yet effective application designed for managing and serving a catalog of products. It provides an API that allows users to interact with various types of products such as fruits, vegetables, liquids, and more. The main objectives of the E-Store include:

- **Ease of Access**: Users can retrieve product lists filtered by type, making it simple to browse different categories.
- **Product Details**: The application provides detailed information about specific products, allowing customers to make informed decisions.
- **Scalability**: By utilizing Docker and Kubernetes, the E-Store is designed to be scalable and easily deployable in various environments, accommodating growth and increased demand.

The E-Store serves as a foundation for developers looking to understand API development, containerization with Docker, and orchestration with Kubernetes.

---

## Using Docker

Docker allows developers to package applications and their dependencies into a standardized unit called a container. This ensures that the application runs reliably across different computing environments.

### Building the Docker Image

1. **Navigate to the Project Directory**:

   Open a terminal and navigate to the root directory of the E-Store project.

   ```bash
   cd path/to/e-store
   ```

2. **Build the Docker Image**:

   Run the following command to build the Docker image. Make sure you have a `Dockerfile` in your project directory.

   ```bash
   docker build -t e-store .
   ```

   This command builds the Docker image with the tag `e-store`.

### Running the Docker Container

After successfully building the image, you can run a Docker container from it:

```bash
docker run -d -p 5000:5000 e-store
```

- The `-d` flag runs the container in detached mode.
- The `-p 5000:5000` flag maps port 5000 of the host to port 5000 of the container.

### Testing the API with Postman

1. **Open Postman**.
2. **Get Product List**:
   - **Method**: GET
   - **URL**: `http://localhost:5000/api/products?type=fruits`
   
3. **Get Specific Product**:
   - **Method**: GET
   - **URL**: `http://localhost:5000/api/product/fruits/{id}`
   - Replace `{id}` with the actual product ID.

4. **Limit Products**:
   - **Method**: GET
   - **URL**: `http://localhost:5000/api/products?type=fruits&limit=5`
   - This returns the first 5 products of the specified type.

---

## Using Minikube

Minikube is a tool that enables you to run Kubernetes locally. It creates a single-node Kubernetes cluster on your machine, making it perfect for development and testing.

### Setting Up Minikube

1. **Install Minikube**:

   If you haven't already, install Minikube by following the installation guide on the [Minikube GitHub page](https://github.com/kubernetes/minikube/releases).

2. **Start Minikube**:

   Open a terminal and run:

   ```bash
   minikube start
   ```

   This command initializes a local Kubernetes cluster.

### Deploying the E-Store Solution

1. **Navigate to the Kubernetes Configuration Directory**:

   Make sure you are in the directory where your Kubernetes configuration files (`deployment.yaml` and `service.yaml`) are located.

2. **Apply the Deployment**:

   Deploy the E-Store application by applying the deployment configuration:

   ```bash
   kubectl apply -f deployment.yaml
   ```

3. **Apply the Service**:

   Next, create the service for your E-Store application:

   ```bash
   kubectl apply -f service.yaml
   ```

### Accessing the E-Store Service

1. **Get the URL of the Service**:

   After the deployment and service are created, you can access the service by running:

   ```bash
   minikube service e-store-service --url
   ```

   This command provides a URL that you can use to access your E-Store application.

2. **Test the API with Postman**:

   Similar to how you tested it with Docker, use Postman to interact with the API at the provided URL. 

   - For example, to get the list of fruits, use:
     - **Method**: GET
     - **URL**: `http://<minikube-url>/api/products?type=fruits`
   
   - For specific product details, use:
     - **Method**: GET
     - **URL**: `http://<minikube-url>/api/product/fruits/{id}`

---

## Conclusion

The E-Store project is a practical example of building a scalable application using modern technologies like Docker and Kubernetes. By following this guide, you should now be able to run the E-Store locally using Docker, and deploy it on a Kubernetes cluster using Minikube.

Feel free to contribute to the project or raise issues on the GitHub repository if you encounter any problems or have suggestions for improvements. Happy coding!


