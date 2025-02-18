---
id: api-feature-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you have made a reasonable config and you just want to use it as a template, you can extend in the same way as you would anything else.



<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
        local config = import '../../vendor/konn/config.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new(
    [{
        kind: 'config',
        metadata: {
        name: 'one',
        },
    },
    ], {
        name: 'two',
        adding_here: 'makes NO difference'
    }
    ).extend(
    [
        config.new(function(ctx, props) {
        kind: 'config',
        metadata: {
            name: props.name,
        },
        }
        {
            name: 'random',
            adding_here: 'makes a difference'
        }),
    ]
    );

    {
    output: testFeature.render(),
    }

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
    - kind: config
        metadata:
        name: one
    - adding_here: makes a difference
        kind: config
        metadata:
        name: two
        name: random

    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
    "output": [
        {
            "kind": "config",
            "metadata": {
                "name": "one"
            }
        },
        {
            "adding_here": "makes a difference",
            "kind": "config",
            "metadata": {
                "name": "two"
            },
            "name": "random"
        }
    ]
    }

    ```  
    </TabItem>
</Tabs>