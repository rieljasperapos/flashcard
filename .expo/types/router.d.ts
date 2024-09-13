/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(home)` | `/(home)/` | `/(home)/decks` | `/_sitemap` | `/decks`;
      DynamicRoutes: `/(home)/decks/${Router.SingleRoutePart<T>}` | `/decks/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(home)/decks/[id]` | `/decks/[id]`;
    }
  }
}
