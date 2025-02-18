---
id: api-feature-extensions
title: extensions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



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
        labels: 'default',
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
        labels: 'label-from-feature' // if labels does not exist here it will take the prop from override
                                    // if override and feature labels do not exist it will take the default prop
    },
    extensions=[
        testExtension.override({
        labels: 'label-from-override', // if labels does not exist here it will take the previous prop of labels from feature
        }),
    ],
    );

    {
    actual: lib.render(testFeature),
    }


    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    actual:
    - kind: Deployment
        metadata:
          labels: label-from-override
          name: nginx-deploy
    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
      "actual": [
        {
          "kind": "Deployment",
          "metadata": {
            "labels": "label-from-override",
            "name": "nginx-deploy"
          }
        }
      ]
    }

    ```  
    </TabItem>
</Tabs>