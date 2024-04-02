"use client"

import { AppProgressBar } from "next-nprogress-bar";

function ProgressBar() {
  return <AppProgressBar color="white" options={{showSpinner : false}}/>
}

export default ProgressBar