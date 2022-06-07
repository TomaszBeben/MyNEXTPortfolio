const testId = (props) => {
  const { data } = props
  const user = data[0]
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user._id}</p>
    </div>
  )
}

export default testId

export const getServerSideProps = async (context) => {
  const id = context.params.email
  const res = await fetch(`http://localhost:3000/api/users/${id}`)
  const data = await res.json()

  return{
    props: data
  }
}