import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to RnAlertPrompt.web.ts
// and on native platforms to RnAlertPrompt.ts
import RnAlertPromptModule from './RnAlertPromptModule';
import RnAlertPromptView from './RnAlertPromptView';
import { ChangeEventPayload, RnAlertPromptViewProps } from './RnAlertPrompt.types';

// Get the native constant value.
export const PI = RnAlertPromptModule.PI;

export function hello(): string {
  return RnAlertPromptModule.hello();
}

export async function setValueAsync(value: string) {
  return await RnAlertPromptModule.setValueAsync(value);
}

const emitter = new EventEmitter(RnAlertPromptModule ?? NativeModulesProxy.RnAlertPrompt);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { RnAlertPromptView, RnAlertPromptViewProps, ChangeEventPayload };
