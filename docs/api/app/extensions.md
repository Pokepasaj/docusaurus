---
id: api-app-extensions
title: extensions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

### Parameters
- **`config`** -  
### Return Value

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local extension = import '../../vendor/konn/extension.libsonnet';

    local ext = extension.new(
      function(ctx, target, props) target {
        metadata+: {
          labels: props.labels,
        },
      },
      { labels: 'default' }  // default prop
    );

    local myApp = app.new(
      features=[
        { kind: 'Deployment', metadata: { name: 'nginx' } },
      ],
      extensions=[ext],
      props={ labels: 'global-label' }  // commenting this extension will use default prop
    );

    {
      output: myApp.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          labels: global-label
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": "global-label",
                "name": "nginx"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>
