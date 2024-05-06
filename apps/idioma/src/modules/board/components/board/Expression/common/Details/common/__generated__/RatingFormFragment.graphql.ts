/**
 * @generated SignedSource<<cfd2710b7193c2a21c1343c8d866a0b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RatingFormFragment$data = {
  readonly id: string;
  readonly rating: number | null | undefined;
  readonly ratingComment: string | null | undefined;
  readonly " $fragmentType": "RatingFormFragment";
};
export type RatingFormFragment$key = {
  readonly " $data"?: RatingFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RatingFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RatingFormFragment",
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
      "name": "rating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ratingComment",
      "storageKey": null
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "166a38d86c8defd3bd9959470df1a7fc";

export default node;
