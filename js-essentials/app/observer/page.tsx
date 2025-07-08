'use client'
import { useEffect, useState, useRef } from "react"

export default function Page() {
    const [snippet, setSnippet] = useState("")
    const [cw, setCw] = useState(0)
    const snipEl = useRef(null)
    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            console.log('all entryies', entries)
            for (let entry of entries) {
                console.log(entry)
            }
        })
        if (snipEl.current) {
            console.log('add observer')
            observer.observe(snipEl.current)
        }
        return () => {
            observer.disconnect()
        }
    }, [])
    return <div className="m-8" bg-white>
        <textarea name="message" id="message" onChange={(e) => {
            setSnippet(e.target.value)
        }}></textarea>
        <div> 
            <code ref={snipEl} className="whitespace-pre-wrap break-words">
                {snippet}
            </code>
            <div className="border-b-2 border-b-amber-600 h-1" style={{width: cw}}>ssss</div>
        </div>
    </div>
}