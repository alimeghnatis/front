import * as React from 'react'

export interface ContextType {
  currentBoardId?             :string;
  currentExpressionId?        :string;
  currentExpressionActionSlug?:string;
  basePath?                   :string;
  baseBoardPath?              :string;
  baseBoardUrl?               :string;
  expressionDetailsPath       :string;
  containerRef                :React.MutableRefObject<null>;
  getExpressionDetailsUrl     :(id: string, slug: string) => string;
  id                          :string;
  uuid                        :string;
  FRAGMENT                    :any;
  data                        :any;
}

export default React.createContext<Partial<ContextType>>({})
