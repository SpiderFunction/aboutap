"use client"
import * as React from "react"
import { Progress } from "@/components/ui/progress"

type Props = {
  name: string,
  percent: number
}

const Skill = ({ name, percent }: Props) => {

  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percent), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="space-y-2">
        <div className="flex flex-row justify-between">
          <span>{name}</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    </>
  )
}

export default Skill