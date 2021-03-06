import React from 'react'
import { inject, observer } from "mobx-react"
import { Configuration } from './Configuration'
import { Authority } from './Authority'
import pattern from '../assets/images/pattern.svg'


@inject("RootStore")
@observer
export class StatusPage extends React.Component {

  render() {
    const { homeStore } = this.props.RootStore
    return (
      <div className="status-page">
        <div className='status-left-container' />
        <div className='status-page-container'>
          <div className='status-configuration-container'>
            <span className='status-configuration-title status-title'>Configuration</span>
              <Configuration
                requiredSignatures={homeStore.requiredSignatures}
                authorities={homeStore.validators.length}
                estGasCost={0}
                maxSingleDeposit={homeStore.maxPerTx}
                maxTotalBalance={homeStore.maxCurrentDeposit} />
          </div>
          <div className='status-authorities-container'>
            <span className='status-authorities-title status-title'>Authorities</span>
            <div className='status-authorities-data'>
              {homeStore.validators.map((validator,i) => (
                <Authority key={validator} address={validator} number={(i+1)} logoIndex={(i) % 3} />
              ))}
            </div>
          </div>
        </div>
        <div className='status-right-container'>
          <img className='status-right-image' src={pattern} alt=""/>
        </div>
      </div>
    )
  }
}
