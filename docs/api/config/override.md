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
    local k = import 'konn/main.libsonnet';

    local a = {
    type: 'config',
    };

    local b = {
    render(ctx, props):: {
        type: 'config',
    },
    };

    local c = k.config(function(ctx, props) {
    type: 'config',
    kind: 'Service',
    props: props,
    metadata: {
        name: 'bananas',
    },
    }, {
    bar: 'foo',
    });

    local e = c.override({
    bar: 'baz',
    });

    {
    a: a, 
    b: b,
    c: c.render(props={
        foo: 'bar',
    }),
    e: e.render(props= {
        bar: 'foo',  // we try to change bar to foo here but it will not change due to override
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
    kind: Service
    metadata:
        name: bananas
    props:
        bar: foo
        foo: bar
    type: config
    e:
    kind: Service
    metadata:
        name: bananas
    props:
        bar: baz
    type: config

    ```
    </TabItem>
</Tabs>