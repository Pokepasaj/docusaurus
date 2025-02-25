---
id: api-extensions-selector
title: selector
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview



### Parameters

### Return Value
The function returns an object with:
- **`body`** – 

## Usage Examples

<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local extension = import '../../vendor/konn/extension.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [{
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    }, {
      kind: 'Deployment',
      metadata: {
        name: 'flask',
      },
    }, {
      kind: 'Deployment',
      metadata: {
        name: 'kong',
      },
    }]);

    local testExtension = extension.new(
      render=function(ctx, config, props) config {
        metadata+: {
          label: 'extended',
        },
      },
      selector=function(ctx, config, props) config.is('Deployment', 'kong'),
      extends=testManifest
    );

    {
      output: testExtension.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx
      - kind: Deployment
        metadata:
          name: flask
      - kind: Deployment
        metadata:
          label: extended
          name: kong
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "label": "extended",
                "name": "kong"
             }
          }
       ]
    }
    ```
    </TabItem>
</Tabs>


<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local extension = import '../../vendor/konn/extension.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [{
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    }, {
      kind: 'Service',
      metadata: {
        name: 'nginx-service',
      },
    }, {
      kind: 'Deployment',
      metadata: {
        name: 'flask',
      },
    }, {
      kind: 'Service',
      metadata: {
        name: 'flask-service',
      },
    }]);

    local serviceAnnotationExt = extension.new(
      render=function(ctx, config, props) config {
        metadata+: {
          annotations+: {
            'custom-annotation': 'added-via-extension',
          },
        },
      },
      selector=function(ctx, config, props) config.is('Service'),
      extends=testManifest
    );

    {
      output: serviceAnnotationExt.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx
      - kind: Service
        metadata:
          annotations:
            custom-annotation: added-via-extension
          name: nginx-service
      - kind: Deployment
        metadata:
          name: flask
      - kind: Service
        metadata:
          annotations:
            custom-annotation: added-via-extension
          name: flask-service
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "kind": "Service",
             "metadata": {
                "annotations": {
                   "custom-annotation": "added-via-extension"
                },
                "name": "nginx-service"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          },
          {
             "kind": "Service",
             "metadata": {
                "annotations": {
                   "custom-annotation": "added-via-extension"
                },
                "name": "flask-service"
             }
          }
       ]
    }
    ```
    </TabItem>
</Tabs>