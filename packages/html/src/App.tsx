import React, { useEffect, useState } from 'react'

import { api } from './api'

const App: React.FC = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.hello.get()

      if (data) {
        setMessage(data)
      }
    }

    fetch()
  })

  return <div className="bg-black text-white text-center">{message}</div>
}

export default App
