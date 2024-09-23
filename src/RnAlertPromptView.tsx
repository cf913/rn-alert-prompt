import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RnAlertPromptViewProps } from './RnAlertPrompt.types';

const NativeView: React.ComponentType<RnAlertPromptViewProps> =
  requireNativeViewManager('RnAlertPrompt');

export default function RnAlertPromptView(props: RnAlertPromptViewProps) {
  return <NativeView {...props} />;
}
