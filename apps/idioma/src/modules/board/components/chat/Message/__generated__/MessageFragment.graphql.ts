/**
 * @generated SignedSource<<8c640c1ab64854a7811ab94d60afe83a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MessageFragment$data = {
  readonly content: {
    readonly __typename: "AssistantLanguageMessageType";
    readonly content: string | null | undefined;
    readonly suggestions: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"SuggestionGroupFragment">;
  } | {
    readonly __typename: "UserLanguageMessageType";
    readonly content: string | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null | undefined;
  readonly createdAt: any | null | undefined;
  readonly id: string;
  readonly isLoading: boolean | null | undefined;
  readonly role: string | null | undefined;
  readonly runId: string | null | undefined;
  readonly threadId: string | null | undefined;
  readonly " $fragmentType": "MessageFragment";
};
export type MessageFragment$key = {
  readonly " $data"?: MessageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MessageFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MessageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "runId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "threadId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "content",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/)
          ],
          "type": "UserLanguageMessageType",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "suggestions",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SuggestionGroupFragment"
            }
          ],
          "type": "AssistantLanguageMessageType",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isLoading",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "LanguageMessageType",
  "abstractKey": null
};
})();

(node as any).hash = "a365adcb7a70de261ad0fbd61aa41c50";

export default node;
