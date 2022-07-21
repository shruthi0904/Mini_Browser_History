import './index.css'

const HistoryItem = props => {
  const {historyDetails, dltHistory} = props
  const {id, timeAccessed, logoUrl, domainUrl, title} = historyDetails

  const onClickDltIcon = () => {
    dltHistory(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="list-info">
        <div className="mobile-mode">
          <img className="app-logo" src={logoUrl} alt="domain logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>

        <button
          type="button"
          testid="delete"
          className="dlt-btn"
          onClick={onClickDltIcon}
        >
          <img
            className="dlt-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
