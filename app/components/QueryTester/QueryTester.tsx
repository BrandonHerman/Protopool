'use client'

import { queryOddsApi } from "@/app/lib/dataQuery";

const QueryTester = () => {
    return (<button className="p-5 rounded-xl shadow-xl border-2 border-solid border-black" onClick={queryOddsApi}>Pull odds</button>)
}

export default QueryTester;