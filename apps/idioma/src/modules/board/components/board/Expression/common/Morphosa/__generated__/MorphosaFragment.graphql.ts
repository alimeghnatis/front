/**
 * @generated SignedSource<<b07253c0e9a0de8fe7f640f8a0fcbb3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Aspect = "IMPERFECTIVE" | "PERFECTIVE" | "PROGRESSIVE" | "%future added value";
export type Clusivity = "EXCLUSIVE" | "INCLUSIVE" | "%future added value";
export type Mood = "CONDITIONAL" | "GERUND" | "IMPERATIVE" | "INDICATIVE" | "INFINITIVE" | "OPTATIVE" | "PARTICIPLE" | "SUBJUNCTIVE" | "%future added value";
export type Number = "PLURAL" | "SINGULAR" | "%future added value";
export type Politeness = "FORMAL" | "HONORIFIC" | "INFORMAL" | "%future added value";
export type Register = "COLLOQUIAL" | "FORMAL" | "SLANG" | "STANDARD" | "TECHNICAL" | "%future added value";
export type Voice = "ACTIVE" | "MIDDLE" | "PASSIVE" | "REFLEXIVE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MorphosaFragment$data = {
  readonly analysis: {
    readonly created: any;
    readonly payloadV1: ReadonlyArray<{
      readonly lemma: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly morphology: {
        readonly aspect: Aspect | null | undefined;
        readonly case: string | null | undefined;
        readonly clusivity: Clusivity | null | undefined;
        readonly gender: string | null | undefined;
        readonly mood: Mood | null | undefined;
        readonly number: Number | null | undefined;
        readonly person: number | null | undefined;
        readonly politeness: Politeness | null | undefined;
        readonly register: Register | null | undefined;
        readonly tense: string | null | undefined;
        readonly voice: Voice | null | undefined;
      } | null | undefined;
      readonly pos: string | null | undefined;
      readonly syntax: {
        readonly function: string | null | undefined;
        readonly head: number | null | undefined;
      } | null | undefined;
      readonly word: string | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"WordAnalysisFragment">;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly textDirection: string | null | undefined;
  readonly " $fragmentType": "MorphosaFragment";
};
export type MorphosaFragment$key = {
  readonly " $data"?: MorphosaFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MorphosaFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MorphosaFragment",
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
      "name": "textDirection",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ExpressionAnalysisNode",
      "kind": "LinkedField",
      "name": "analysis",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Word",
          "kind": "LinkedField",
          "name": "payloadV1",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "word",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lemma",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "pos",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Morphology",
              "kind": "LinkedField",
              "name": "morphology",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "tense",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "mood",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "voice",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "aspect",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "person",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "number",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "gender",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "case",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "politeness",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "clusivity",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "register",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Syntax",
              "kind": "LinkedField",
              "name": "syntax",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "function",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "head",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "WordAnalysisFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "created",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "2a1ff1e8be5def5e9bffd1e60af7f905";

export default node;
