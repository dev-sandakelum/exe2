"use client"

import Editor from "@/components/newUI/editor/Editor"
import { useState } from "react"

export default function EditorPage() {
  const [data, setData] = useState<any>(null)

  return (
    <div className="min-h-screen w-full bg-(my-style-sec) p-6 pt-14">
      <h1 className="text-2xl font-bold mb-4">📝 Editor.js in Next.js</h1>
      <Editor data={data} onChange={(output) => setData(output)} />
      <pre className="mt-6 bg-gray-900 text-(my-style-sec) p-4 rounded-lg overflow-auto text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
