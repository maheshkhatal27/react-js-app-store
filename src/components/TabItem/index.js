import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickDisplay = () => {
    updateTab(tabId)
  }

  const activateTabButton = isActiveTab ? 'active-tab' : ''

  return (
    <li className="list-tab">
      <button
        type="button"
        className={`tab-name ${activateTabButton}`}
        onClick={onClickDisplay}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
