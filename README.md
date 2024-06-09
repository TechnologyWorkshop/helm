# Helm

## Overview

This workshop will guide you through the process of setting up Helm, a package manager for Kubernetes, on your Windows machine using Chocolatey, and creating your first Helm chart.

## Step 1: Install Chocolatey

1. Open PowerShell as an Administrator.
2. Run the following command to install Chocolatey, a package manager for Windows:

    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```

## Step 2: Install Helm via Chocolatey

1. Once Chocolatey is installed, open PowerShell.
2. Run the following command to install Helm, a tool for managing Kubernetes applications:

    ```powershell
    choco install kubernetes-helm -y
    ```

## Step 3: Create a Helm Chart

1. After Helm is installed, open PowerShell.
2. Run the following command to create a new Helm chart named `nginx-chart`:

    ```powershell
    helm create nginx-chart
    ```

This command will create a new directory called `nginx-chart` in your repository, containing all the necessary files and folders for a Helm chart.

## Explanation of the Created Directory

The `nginx-chart` directory contains several important files and folders:

- `Chart.yaml`: Contains metadata about the chart.
- `values.yaml`: Default configuration values for the chart.
- `templates/`: Directory where the Kubernetes manifests templates are stored.
- `charts/`: Directory for dependencies.
- `templates/_helpers.tpl`: Helper template for the chart.
- `templates/deployment.yaml`: Kubernetes deployment template.
- `templates/service.yaml`: Kubernetes service template.
- `templates/notes.txt`: Optional file with notes about the chart.
