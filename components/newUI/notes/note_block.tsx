import React from 'react'

export default function Note_block({content}: {content: string}) {
  return (
    <div className="w-full h-fit p-6 rounded-lg bg-card border border-border shadow-sm">
      <div 
        className="prose prose-sm max-w-none
                   prose-headings:text-primary prose-headings:font-semibold
                   prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                   prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
                   prose-strong:text-primary prose-strong:font-semibold
                   prose-ul:list-disc prose-ul:ml-5 prose-ul:mb-4
                   prose-ol:list-decimal prose-ol:ml-5 prose-ol:mb-4
                   prose-li:mb-2
                   prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                   prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                   prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
                   prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{__html: content}}
      />
    </div>
  )
}