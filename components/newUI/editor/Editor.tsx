"use client"

import React, { useEffect, useRef } from "react"

interface EditorProps {
  data?: any
  onChange?: (data: any) => void
  holder?: string
}

const Editor: React.FC<EditorProps> = ({ data, onChange, holder = "editorjs" }) => {
  const editorRef = useRef<any>(null)
  const isInitialized = useRef(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return
    if (isInitialized.current) return

    const init = async () => {
      // ✅ Dynamically import all Editor.js tools to avoid SSR errors
      const EditorJS = (await import("@editorjs/editorjs")).default
      const Header = (await import("@editorjs/header")).default
      const List = (await import("@editorjs/list")).default
      const Quote = (await import("@editorjs/quote")).default
      const Code = (await import("@editorjs/code")).default
      const ImageTool = (await import("@editorjs/image")).default
      const Table = (await import("@editorjs/table")).default
      const Warning = (await import("@editorjs/warning")).default
      const Delimiter = (await import("@editorjs/delimiter")).default

      const editor = new EditorJS({
        holder,
        autofocus: true,
        data,
        tools: {
          header: Header,
          list: List,
          quote: Quote,
          code: Code,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "/api/upload", // optional backend endpoint
                byUrl: "/api/fetchUrl", // optional backend endpoint
              },
            },
          },
          table: Table,
          warning: Warning,
          delimiter: Delimiter,
        },
        async onChange() {
          const content = await editor.saver.save()
          onChange?.(content)
        },
      })

      editorRef.current = editor
      isInitialized.current = true
    }

    init()

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === "function") {
        editorRef.current.destroy()
        editorRef.current = null
      }
      isInitialized.current = false
    }
  }, [])

  return <div id={holder} className="prose max-w-none" />
}

export default Editor
