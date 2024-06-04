export interface GetBoardCountsUpdaterOptions {
  expressionCountChange:number;
  groupCountChange     :number;
}

export default (
  boardId: string,
  options: Partial<GetBoardCountsUpdaterOptions> = {},
) => (store): void => {
  const {
    groupCountChange = 1, expressionCountChange = 1,
  } = options
  const boardRecord = store.get(boardId)
  if (groupCountChange) {
    const groupConnection = boardRecord.getLinkedRecord('groups')
    const groupCount = groupConnection.getValue('count')
    groupConnection.setValue(
      groupCount + groupCountChange, 'count',
    )
  }
  if (expressionCountChange) {
    const expressionsConnection = boardRecord.getLinkedRecord('expressions')
    const edgesCount = expressionsConnection.getValue('count')
    expressionsConnection.setValue(
      edgesCount + expressionCountChange, 'count',
    )
  }
}
