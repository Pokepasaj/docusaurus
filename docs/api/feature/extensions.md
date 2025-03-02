---
id: api-feature-extensions
title: extensions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `extensions` function processes and applies extensions to the feature configurations, allowing for conditional extensions based on the properties.

## Parameters
- **`ctx`** - (object) The context in which the extensions are applied.
- **`props`** - (object) The properties used to resolve the extensions.

## Return Value
An array of applied extensions, filtered and transformed based on the provided properties.
## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local extension = import '../../vendor/konn/extension.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';
    local lib = import '../../vendor/konn/helpers.libsonnet';

    local testExtension = extension.new(
      function(ctx, config, props) config {
        metadata+: {
          labels: props.labels,
        },
      },
      {
        labels: 'default',  // default label
      },
    );
    local testFeature = feature.new(
      [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx-deploy',
          },
        },
      ],
      {
        labels: 'label-from-feature',  // if labels does not exist here it will take the prop from override below
        // if neither of these exist it will take the default label
      },
      extensions=[
        testExtension.override({
          labels: 'label-from-override',  // if labels does not exist here it will take the previous one
        }),
      ],
    );

    lib.render(testFeature)
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - kind: Deployment
      metadata:
        labels: label-from-override
        name: nginx-deploy
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Deployment",
          "metadata": {
             "labels": "label-from-override",
             "name": "nginx-deploy"
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local extension = import '../../vendor/konn/extension.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';
    local lib = import '../../vendor/konn/helpers.libsonnet';

    local addReplicasExtension = extension.new(
      function(ctx, config, props) config {
        spec+: {
          replicas: props.replicas,
        },
      },
      {
        replicas: 2,
      },
    );

    local featureWithReplicas = feature.new(
      [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx-deployment',
          },
          spec: {
            replicas: 1,  // Default replicas
          },
        },
      ],
      {
        replicas: 3,  // Will take this value if not overridden
      },
      extensions=[
        addReplicasExtension.override({
          replicas: 5,  // Override replicas to 5
        }),
      ],
    );

    lib.render(featureWithReplicas)
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - kind: Deployment
      metadata:
        name: nginx-deployment
      spec:
        replicas: 5
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Deployment",
          "metadata": {
             "name": "nginx-deployment"
          },
          "spec": {
             "replicas": 5
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>



### Cross-linking to Other API Docs
For more details on extensions and helpers, please refer to the [extensions documentation](https://pokepasaj.github.io/docusaurus/api/extensions/api-extensions-new), [helpers documentation](/api/helpers/api-helpers-render).
