import React from 'react';
import logo from '../../assets/logo/code-cluster-logo.png';

export default function MyLogo({className, style}) {
  return (
    <img src={logo} alt="Code Cluster Logo" className={className} style={style}/>
  );
}