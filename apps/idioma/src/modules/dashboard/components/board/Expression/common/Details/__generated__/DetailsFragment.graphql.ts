/**
 * @generated SignedSource<<5bd2b352c39f78ce051482bad51f4247>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailsFragment$data = {
  readonly audioUrl: string | null | undefined;
  readonly changes: string | null | undefined;
  readonly content: string;
  readonly correctedContent: string | null | undefined;
  readonly created: any;
  readonly generalExplanation: string | null | undefined;
  readonly grammarExplanation: string | null | undefined;
  readonly id: string;
  readonly iso6391: string | null | undefined;
  readonly iso6392: string | null | undefined;
  readonly iso6393: string;
  readonly translation: string | null | undefined;
  readonly wordsExplanation: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"RatingFormFragment">;
  readonly " $fragmentType": "DetailsFragment";
};
export type DetailsFragment$key = {
  readonly " $data"?: DetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailsFragment",
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
      "name": "iso6391",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6392",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6393",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "translation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "correctedContent",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "grammarExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "generalExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "wordsExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "audioUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "changes",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RatingFormFragment"
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "276ef4e990d2458df18f1c95ca51cd0a";

export default node;
