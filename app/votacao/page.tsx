"use client"

import { useSearchParams } from "next/navigation"
import CreateContest from "./CreateContest"
import EditContest from "./EditContest"

export default function Votacao() {

    const searchParams = useSearchParams()
    const contest = searchParams.get('contest')

    return (
        contest ? <EditContest /> : <CreateContest />
    )
}