import { useState, useEffect } from "react";

const test = ({ test }) => {
  console.log(test);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitReq = async() => {
    const req = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({name, email}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await req.json()
    console.log(data);
  }

  return (
    <>
      <input
        type="name"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)} />
      <input
        type="text"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <button onClick={submitReq} >Submit</button>
      {
        test.map(e => {
          return (
            <div key={e._id}>
                <p>name: {e.name}</p>
                <p>email: {e.email}</p>
            </div>
          )
        })
      }
    </>

  )
}

export default test

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const data = await res.json()

  return {
    props: {
      test: data
    }
  }
}