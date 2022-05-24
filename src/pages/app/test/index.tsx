import { useState, useEffect } from "react";

const test = ({ test }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitReq = async() => {
    const req = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({name, email}),
    })
    const data = await req.json()
    console.log(data);
  }

  return (
    <>
      <input
        type="name"
        value={name}
        onChange={e => setName(e.target.value)} />
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <button onClick={submitReq} >Submit</button>
      <div>index</div>
      {
        test.map(e => {
          return (
            <>
              <h1>{e.name}</h1>
              <h1>{e.email}</h1>
            </>
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