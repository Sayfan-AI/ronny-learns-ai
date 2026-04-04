import { useState, useEffect, useRef } from 'react'

const NOTES_KEY = 'ronny-lesson-notes'

function loadNote(lessonId: string): string {
  try {
    const raw = localStorage.getItem(NOTES_KEY)
    const notes: Record<string, string> = raw ? JSON.parse(raw) : {}
    return notes[lessonId] ?? ''
  } catch {
    return ''
  }
}

function saveNote(lessonId: string, text: string) {
  try {
    const raw = localStorage.getItem(NOTES_KEY)
    const notes: Record<string, string> = raw ? JSON.parse(raw) : {}
    if (text.trim()) {
      notes[lessonId] = text
    } else {
      delete notes[lessonId]
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
  } catch {
    // ignore
  }
}

interface LessonNoteProps {
  lessonId: string
}

export function LessonNote({ lessonId }: LessonNoteProps) {
  const existingNote = loadNote(lessonId)
  const [open, setOpen] = useState(existingNote.length > 0)
  const [text, setText] = useState(existingNote)
  const [saved, setSaved] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (open && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [open])

  function handleSave() {
    saveNote(lessonId, text)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function handleOpen() {
    setOpen(true)
  }

  if (!open) {
    return (
      <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-yellow-800 text-sm">My note for this lesson</p>
          <p className="text-yellow-600 text-xs mt-0.5">Jot down something you want to remember</p>
        </div>
        <button
          onClick={handleOpen}
          className="text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-xl transition-colors"
          aria-label="Add a note for this lesson"
        >
          Add a note
        </button>
      </div>
    )
  }

  return (
    <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5 space-y-3">
      <div>
        <p className="font-semibold text-yellow-800 text-sm">My note for this lesson</p>
        <p className="text-yellow-600 text-xs mt-0.5">Your notes are saved on this device only</p>
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write anything you want to remember about this lesson..."
        rows={4}
        className="w-full rounded-xl border border-yellow-200 bg-white p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
        aria-label="Lesson note text"
      />
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          className="text-sm bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          {existingNote ? 'Update note' : 'Save note'}
        </button>
        {saved && (
          <span className="text-green-600 text-sm font-medium flex items-center gap-1">
            <span>&#x2713;</span> Saved
          </span>
        )}
        <button
          onClick={() => setOpen(false)}
          className="text-sm text-gray-400 hover:text-gray-600 ml-auto"
          aria-label="Close note editor"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export function loadAllNotes(): Record<string, string> {
  try {
    const raw = localStorage.getItem(NOTES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}
