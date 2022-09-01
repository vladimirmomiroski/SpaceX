import React, { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Home() {

  const { missions } = useContext(Context)
  console.log(missions)
  return (
    <div>Home</div>
  )
}
