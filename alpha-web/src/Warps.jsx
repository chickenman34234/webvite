import React from 'react'
import Warp from './Warp'

export default function Warps( {warp, value, isActive,}) {
    const isWarp = isActive
    if(isWarp) {
  return (
    warp.map(warps => {
        return <Warp key={warps.id} warp={warps.name} menu={warps.id} coords={warps.coords} />
    })
  )} else return <></>
}
