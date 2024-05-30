/**
 * @generated SignedSource<<f0e561a8e85197ecb8eab9ae0cc36e0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardUpdateFormFragment$data = {
  readonly displayGeneral: boolean;
  readonly displayGrammar: boolean;
  readonly displayTranslations: boolean;
  readonly displayWords: boolean;
  readonly enabledLanguages: any;
  readonly explanationsLanguage: string;
  readonly explanationsLength: string;
  readonly id: string;
  readonly isDefault: boolean;
  readonly isPublic: boolean;
  readonly name: string;
  readonly thread: {
    readonly " $fragmentSpreads": FragmentRefs<"ResetChatButtonFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"DeleteBoardButtonFragment">;
  readonly " $fragmentType": "BoardUpdateFormFragment";
};
export type BoardUpdateFormFragment$key = {
  readonly " $data"?: BoardUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardUpdateFormFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPublic",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDefault",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "explanationsLanguage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "explanationsLength",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayTranslations",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayGeneral",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayGrammar",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayWords",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabledLanguages",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DeleteBoardButtonFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ThreadNode",
      "kind": "LinkedField",
      "name": "thread",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ResetChatButtonFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "e71a2ed2037cbd609d0cec4a3f89a66f";

export default node;
