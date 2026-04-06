import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { CompletedBadge } from '../components/CompletedBadge'
import { LessonNote } from '../components/LessonNote'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { NextLesson } from '../components/NextLesson'

interface CommandCardProps {
  command: string
  meaning: string
  explanation: string
  example: string
  output: string
}

function CommandCard({ command, meaning, explanation, example, output }: CommandCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
      <div className="flex items-start gap-3">
        <code className="bg-gray-900 text-green-400 px-3 py-1 rounded-lg font-mono text-lg shrink-0">{command}</code>
        <span className="text-gray-500 text-lg">&mdash; {meaning}</span>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed">{explanation}</p>
      <div className="space-y-2">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">You type:</p>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-3 overflow-x-auto font-mono text-sm">
          <code>{example}</code>
        </pre>
        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">You see:</p>
        <pre className="bg-gray-100 text-gray-700 rounded-xl p-3 overflow-x-auto font-mono text-sm">
          <code>{output}</code>
        </pre>
      </div>
    </div>
  )
}

export function ShellBasics() {
  useMarkVisited('shell-basics')
  useLessonVisit('shell-basics')
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F5A5;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Basic Shell Commands
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            A terminal is a text window where you type commands to control your computer.
            It looks intimidating at first, but there are only a handful of commands you
            need to know to get started.
          </p>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full">
            <span>About 8 min read</span>
          </div>
          <CompletedBadge lessonId="shell-basics" />
        </div>

        {/* Intro */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F4A1;</span>
            <h2 className="text-2xl font-semibold text-purple-800">How to follow along</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Open your Ubuntu terminal (Windows key &rarr; Ubuntu) and try each command
            as you read. The best way to learn terminal commands is to actually type them.
            Don&apos;t worry about making mistakes — the terminal won&apos;t break.
          </p>
        </div>

        <CommandCard
          command="pwd"
          meaning="print working directory"
          explanation="This tells you where you are right now. In a terminal, you are always &quot;inside&quot; a folder, just like when you open a folder on your desktop. pwd shows you which folder that is, as a path (a list of folders separated by slashes)."
          example="pwd"
          output="/home/ronny"
        />

        <CommandCard
          command="ls"
          meaning="list"
          explanation="Shows you everything that is inside the current folder — files and subfolders. It's like opening a folder in Windows Explorer and seeing its contents, but in text form."
          example="ls"
          output={"Documents  Downloads  Pictures  notes.txt"}
        />

        <CommandCard
          command="cd"
          meaning="change directory"
          explanation="Moves you into a different folder. Think of it like double-clicking a folder in Windows Explorer — after cd you are inside that folder. Use cd .. (two dots) to go back up one level to the parent folder."
          example={"cd Documents\npwd"}
          output="/home/ronny/Documents"
        />

        <CommandCard
          command="mkdir"
          meaning="make directory"
          explanation="Creates a new empty folder. You give it a name and it appears in the current folder. It's like right-clicking in Windows Explorer and choosing &quot;New Folder&quot;."
          example={"mkdir my-project\nls"}
          output="Documents  Downloads  my-project  Pictures  notes.txt"
        />

        <CommandCard
          command="cp"
          meaning="copy"
          explanation="Copies a file from one place to another. You give it two things: the file to copy, and where to put the copy (and what to name it)."
          example="cp notes.txt notes-backup.txt"
          output="(nothing — silence means it worked)"
        />

        <CommandCard
          command="mv"
          meaning="move (or rename)"
          explanation="Moves a file to a different location. If you move it to the same folder with a new name, it just renames it. mv is how you rename files in the terminal."
          example={"mv notes.txt journal.txt\nls"}
          output="Documents  Downloads  journal.txt  notes-backup.txt  Pictures"
        />

        <CommandCard
          command="rm"
          meaning="remove"
          explanation="Deletes a file permanently. Unlike Windows where deleted files go to the Recycle Bin, rm removes them straight away — so be careful!"
          example={"rm notes-backup.txt\nls"}
          output="Documents  Downloads  journal.txt  Pictures"
        />

        <CommandCard
          command="cat"
          meaning="concatenate (read a file)"
          explanation="Prints the contents of a file right in the terminal. Useful for quickly reading a short text file without opening a text editor."
          example="cat journal.txt"
          output={"Today I learned about shell commands.\nIt's not as scary as I thought!"}
        />

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CB;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Quick reference</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 text-gray-500 font-medium text-sm uppercase tracking-wide">Command</th>
                  <th className="py-2 text-gray-500 font-medium text-sm uppercase tracking-wide">What it does</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-base">
                {[
                  ['pwd', 'Show current folder path'],
                  ['ls', 'List files in current folder'],
                  ['cd folder', 'Move into a folder'],
                  ['cd ..', 'Go up one folder level'],
                  ['mkdir name', 'Create a new folder'],
                  ['cp file copy', 'Copy a file'],
                  ['mv file dest', 'Move or rename a file'],
                  ['rm file', 'Delete a file'],
                  ['cat file', 'Read and print a file'],
                ].map(([cmd, desc]) => (
                  <tr key={cmd} className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm">{cmd}</code>
                    </td>
                    <td className="py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <LessonNote lessonId="shell-basics" />
        <LessonFeedback lessonId="shell-basics" />
        <LessonRating lessonId="shell-basics" />
        <ReviewLaterButton lessonId="shell-basics" />
        <NextLesson currentId="shell-basics" />
      </div>
    </div>
  )
}
