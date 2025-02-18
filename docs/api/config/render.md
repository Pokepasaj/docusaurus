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

    local render_test = k.config(function(ctx,props){
        type: 'config2',
        props:props
    });
    {
    render_test: render_test.render(props= {  
        foo: 'bar',
    })
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render_test:
    props:
        foo: bar
    type: config2
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "render_test": {
        "props": {
          "foo": "bar"
        },
        "type": "config2"
      }
    }
    ```
  </TabItem>
</Tabs>



:::note
if you dont supply a ctx it will supply a ctx and if you dont supply props it will supply props that will be empty  `props: {}`
:::

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local render_test = k.config(function(ctx,props){
        type: 'config2',
        props:props
    });
    {
    render_test: render_test.render(props= {  
    //  foo: 'bar',  Now that I have commented the props see how it evaluates 
    })
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render_test:
      props: {}
      type: config2

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "render_test": {
        "props": { },
        "type": "config2"
      }
    }

    ```
  </TabItem>
</Tabs>
