import { useState } from 'react'

interface ShareButtonProps {
  lessonTitle: string
}

export function ShareButton({ lessonTitle }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  function handleShare() {
    const url = window.location.href
    const text = `Check out this lesson: "${lessonTitle}"`

    if (navigator.share) {
      navigator.share({ title: lessonTitle, text, url }).catch(() => {
        // User cancelled or share failed — fall back silently
        copyToClipboard(url)
      })
    } else {
      copyToClipboard(url)
    }
  }

  function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {
      // Final fallback: select a temporary input
      const input = document.createElement('input')
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleShare}
      title="Send this lesson to a friend"
      aria-label={copied ? 'Link copied to clipboard' : 'Share this lesson'}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {copied ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-600" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
          <span className="text-green-700">Link copied!</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
          </svg>
          <span>Share this lesson</span>
        </>
      )}
    </button>
  )
}
