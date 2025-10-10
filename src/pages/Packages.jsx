import React from 'react'
import { Breadcum } from '../components/Breadcum'
import Packagesdetail from '../components/Packagesdetail'
import ConnectWithus from '../components/ConnectWithus'
import MarqueePara from '../components/MarqueePara'

const Packages = () => {
  return (<>
    <Breadcum title={"Package"} />
    <Packagesdetail/>
    <ConnectWithus image="/imgAssets/b (6).png"/>
    </>
  )
}

export default Packages