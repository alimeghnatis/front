const getNodeUpdater = (
  rootFieldName, options = {},
) => (store) => {
  const {
    linkedRecordName = 'instance',
    newLinkedRecordName = 'node',
  } = options
  const root = store.getRoot()
  const payload = store.getRootField(rootFieldName)
  const newInstance = payload.getLinkedRecord(linkedRecordName)

  if (newInstance) {
    const newId = newInstance.getValue('id')

    // Set the linked record at the root for 'node(id: $id)'
    root.setLinkedRecord(
      newInstance, newLinkedRecordName, { id: newId },
    )
  } else {
    console.error('Mutation did not return an instance.')
  }
}
export default getNodeUpdater
