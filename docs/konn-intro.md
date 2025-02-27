---
id: konn-intro
title: Introduction to Konn
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Getting started with Konn

Konn is an open-source project which offer Jsonnet-based configuration management library that provides structured methods to create, transform, and manage Kubernetes manifests, JSON, and YAML configurations.

Prerequisites:
Make sure you are introduced to jsonnet if you want a tutorial which will give you a solid foundation the below is recommended:
https://jsonnet.org/learning/tutorial.html


About Jsonnet:
Jsonnet is a data templating language which comes from google and is used to introduce programing to your yaml/jsonnet files 
You can use it to template and extend your kubernetes manifests.

About Konn:
Konn brings several advantages over plain Jsonnet, especially in the context of large-scale configuration management and feature-driven development



# Getting Started with Konn

## Table of Contents
- [Getting Started with Konn](#getting-started-with-konn-1)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
    - [Installing Konn](#installing-konn)
  - [Basic Usage](#basic-usage)
    - [Creating a Configuration](#creating-a-configuration)
    - [Rendering the Configuration to YAML or JSON from VScode](#rendering-the-configuration-to-yaml-or-json-from-vscode)
  - [Examples](#examples)
    - [Example 1: Creating a Service](#example-1-creating-a-service)
    - [Example 2: Using Extensions](#example-2-using-extensions)
  - [Advanced Topics](#advanced-topics)
    - [Using Profiles](#using-profiles)
    - [Conditional Configurations](#conditional-configurations)
  - [Resources](#resources)

## Introduction
Welcome to Konn! Konn is a powerful tool for managing Kubernetes configurations and manifests. This guide will help you get started with Konn, from installation to creating your first application.

## Installation

### Installing Konn
To install Konn, check [Installtion](konn-install).



## Basic Usage
### Creating a Configuration
Konn allows you to create and manage Kubernetes configurations using a simple and intuitive API. Here's how you can create a basic deployment configuration:
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import '../../vendor/konn/main.libsonnet';

    local deployment = k.config(
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
      {}
    );

    {
      deployment: deployment.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    deployment:
      kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "deployment": {
          "kind": "Deployment",
          "metadata": {
             "name": "nginx"
          }
       }
    }
    ```  
  </TabItem>
</Tabs>


### Rendering the Configuration to YAML or JSON from VScode
To render in YAML or JSON in VScode use `Ctrl` + `Shift` + `P` and search for:
-  `jsonnet: Evaluate file(YAML)` for yaml evaluation
-  `jsonnet: Evaluate file(YAML)` for json evaluation
:::note
Make sure you have the Jsonnet Language Server Plugin. 
Also you should setup your lib paths because jsonnet does not find them automatically
This topic is covered in [Installtion](konn-install).
:::

## Examples
### Example 1: Creating a Service
Here's an example of how to create a Kubernetes Service using Konn:
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
   local k = import '../../vendor/konn/main.libsonnet';

   local service = k.config(
     function(ctx, props) {
       kind: 'Service',
       metadata: {
         name: 'nginx-service',
       },
     },
   );
   {
     service: service.render(),
   }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
   service:
     kind: Service
     metadata:
       name: nginx-service
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
   {
      "service": {
         "kind": "Service",
         "metadata": {
            "name": "nginx-service"
         }
      }
   }
    ```  
  </TabItem>
</Tabs>


### Example 2: Using Extensions
Konn supports extensions to modify or enhance configurations. Here's an example:
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json

    ```  
  </TabItem>
</Tabs>


## Advanced Topics
### Using Profiles
Profiles allow you to define different variations of your application. Here's how to use profiles:

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
 

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json

    ```  
  </TabItem>
</Tabs>


### Conditional Configurations
Konn allows you to conditionally apply configurations based on properties:

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
 

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json

    ```  
  </TabItem>
</Tabs>


## Resources
For more information, check out the following resources:
- [Konn Documentation](https://konn.example.com/docs)
- [GitHub Repository](https://github.com/konn/konn)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

We hope this guide helps you get started with Konn. If you have any questions or need further assistance, feel free to reach out to our community or support team. Happy configuring!