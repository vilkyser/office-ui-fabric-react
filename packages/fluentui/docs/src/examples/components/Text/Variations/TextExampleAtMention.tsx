import * as React from 'react';
import { Text } from '@fluentui/react';

const TextExampleAtMention = () => (
  <div>
    <Text atMention>@someone</Text>
    <br />
    <Text atMention="me">@me</Text>
  </div>
);

export default TextExampleAtMention;
