import { useState, useEffect } from "react";
import Link from 'next/link'

const test = ({ test }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitReq = async (e) => {
    e.preventDefault()

    const req = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
            <Link href={`test/${e._id}`} key={e._id} >
              <div style={{ border: '1px solid black' }}>
                <p>name: {e.name}</p>
                <p>email: {e.email}</p>
                <p>id: {e._id}</p>
              </div>
            </Link>
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
  // console.log(data);

  return {
    props: {
      test: data.data
    }
  }
}