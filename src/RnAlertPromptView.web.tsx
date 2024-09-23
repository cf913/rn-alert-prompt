import * as React from 'react';

import { RnAlertPromptViewProps } from './RnAlertPrompt.types';

export default function RnAlertPromptView(props: RnAlertPromptViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
