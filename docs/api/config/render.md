---
id: api-config-render
title: render
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### To actually get the content you need to call the render function

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local a = {
    type: 'config',
    };

    local b = {
    render(ctx, props):: {
        type: 'config',

    },
    };

    local c = k.config(function(ctx,props){
        type: 'config2',
        props:props
    });


    {
    a: a,
    b: b,
    c: c.render(props= {  
        foo: 'bar', // remove this line to check what the YAML Evaluation returns
    })

    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    a:
    type: config
    b: {}
    c:
    props:
        foo: bar
    type: config2
    ```
    </TabItem>
</Tabs>

:::note
if you dont supply a ctx it will supply a ctx and if you don`t supply props it will supply props that will be empty
:::