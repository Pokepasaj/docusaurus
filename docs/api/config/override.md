---
id: api-config-override
title: override
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Override is way of completely overriding props no matter what if you override it it will not change.
if it`s overridden it locks it at that point meaning that anything that passed from a higher point will never change it.


:::tip Use Case
If you want to stop pollution from your props because you want to take only props from a particular place and passed them down in your function
otherwise if a config renders it will get all of the props but if we want to get particular props we use override
:::

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local testConfig = config.new(function(ctx, props) {
    kind: 'Deployment',
    metadata: {
        name: props.name,
    },
    }, {
    name: 'my-deployment',
    }).override(
    function(props)
        {
        name: 'override-' + props.name,
        }
    );
    {
    output: testConfig.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      kind: Deployment
      metadata:
        name: override-my-deployment
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "output": {
        "kind": "Deployment",
        "metadata": {
            "name": "override-my-deployment"
        }
      }
    }
    ```
  </TabItem>
</Tabs>
