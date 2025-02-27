---
id: api-context-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `extend`

## Table of Contents
- [`extend`](#extend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
    - [Usage Example](#usage-example)

## Overview
Extends the current context with new properties and manifest, while keeping the existing metadata.

## Parameters
- **`props`** - (object) The properties to include in the extended context.
- **`manifest`** - (array) The manifest to include in the extended context.
- **`metadata`** - (object) The metadata to merge with the existing metadata in the context.

## Return Value
Returns a new context object with the extended properties, manifest, and merged metadata.

### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local ctx = import '../../vendor/konn/context.libsonnet';
    
    local initialCtx = ctx.new(
      manifest=[
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
      ],
      metadata={
        profile: 'dev',
      }
    );

    // Extend the context with additional props and manifest
    local extendedCtx = initialCtx.extend(
      manifest=[
        {
          kind: 'Service',
          metadata: {
            name: 'nginx-service',
          },
        },
      ],
      metadata={
        environment: 'staging',
      }
    );

    {
      initialManifest: initialCtx.args.manifest,
      extendedManifest: extendedCtx.args.manifest,
      extendedMetadata: extendedCtx.args.metadata,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    extendedManifest:
      - kind: Service
        metadata:
          name: nginx-service
    extendedMetadata:
      environment: staging
      profile: dev
    initialManifest:
      - kind: Deployment
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "extendedManifest": [
          {
            "kind": "Service",
            "metadata": {
                "name": "nginx-service"
            }
          }
      ],
      "extendedMetadata": {
          "environment": "staging",
          "profile": "dev"
      },
      "initialManifest": [
          {
            "kind": "Deployment",
            "metadata": {
                "name": "nginx"
            }
          }
      ]
    }
    ```  
    </TabItem>
</Tabs>