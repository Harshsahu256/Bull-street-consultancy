import React from 'react'
import About1 from '../components/About1'
import { Breadcum } from '../components/Breadcum'
import ConnectWithus from '../components/ConnectWithus'
import MarqueePara from '../components/MarqueePara'
import Mission from '../components/Mission'
import CompanyProfile from '../components/companyProfile'
import Advantage from '../components/Advantage'

const About = () => {
  return (
  <>
<Breadcum title={"About"}/>
  <About1/>
  <Mission/>
  <CompanyProfile/>
  <Advantage/>
  <ConnectWithus image="/imgAssets/b (1).png"/>
  </>
  )
}

export default About