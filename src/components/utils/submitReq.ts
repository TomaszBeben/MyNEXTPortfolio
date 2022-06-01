export const submitReq = async (name: string | undefined, email: string | undefined) => {
    await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }