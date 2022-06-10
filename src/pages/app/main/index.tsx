import { useState, useEffect } from "react";
import Link from 'next/link'
import { NextPage } from "next"

const user: NextPage = ({props}) => {
  return (
    <>
      {
        props.map(e => {
          return (
            <div key={e._id} style={{ border: '1px solid black' }}>
              <Link href={`main/${e._id}`}>
                <div style={{ border: '1px solid black' }}>
                  <p>name: {e.name}</p>
                  <p>email: {e.email}</p>
                  <p>id: {e._id}</p>
                </div>
              </Link>
            </div>
          )
        })
      }
    </>

  )
}

export default user

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/users')
//   const data = await res.json()

//   return {
//     props: {
//       props: data.data
//     }
//   }
// }