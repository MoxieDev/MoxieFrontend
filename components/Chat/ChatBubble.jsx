import React from 'react'

function ChatBubble({text, user}) {
  return (
    <li class="flex flex-col justify-start text-white">
      <div class="relative max-w-xl px-4 py-2 rounded-lg shadow bg-slate-700 w-fit">
        <span class="block">{text}</span>
      </div>
      <div className="text-sm text-gray-600">{user}</div>
    </li>
  );
}

export default ChatBubble