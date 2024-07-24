import PropTypes from 'prop-types'

export function CreatePost({ createPostAction }) {
  return (
    <form action={createPostAction}>
      <div>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' id='title' required />
      </div>
      <br />
      <textarea name='contents' id='contents' />
      <br />
      <br />
      <input type='submit' value='Create' />
    </form>
  )
}

CreatePost.propTypes = {
  createPostAction: PropTypes.func.isRequired,
}
