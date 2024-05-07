/**
 * @generated SignedSource<<716029b315862501c4ac2512717917e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useViewerPreferencesFragment$data = {
  readonly preferences: {
    readonly actionOnExpressionClick: string;
  } | null | undefined;
  readonly " $fragmentType": "useViewerPreferencesFragment";
};
export type useViewerPreferencesFragment$key = {
  readonly " $data"?: useViewerPreferencesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useViewerPreferencesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useViewerPreferencesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserPreferencesNode",
      "kind": "LinkedField",
      "name": "preferences",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "actionOnExpressionClick",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "bb49eaa26d13adebff5076756a8abb90";

export default node;
