import React, { useState } from 'react';

const classes = {
  container: 'w-full max-w-md',
  label: 'text-sm block font-bold  pb-2',
  input:
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300',
  button:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
  form: 'px-8 py-8 pt-8',
  div: 'px-4 pb-4',
  error: 'font-bold text-red-500',
};

export const PostForm = ({ onSave, post, loading, error }) => {
  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);

  const onSubmit = (e) => {
    e.preventDefault();
    onSave({ title, body });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.div}>
          <label className={classes.label}>Title</label>
          <input
            required
            name="title"
            placeholder="Enter your post title"
            className={classes.input}
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={title}
          />
        </div>
        <div className={classes.div}>
          <label className={classes.label}>Body</label>
          <textarea
            required
            name="body"
            className={classes.input}
            placeholder="Enter your post content"
            onChange={(e) => setBody(e.target.value)}
            defaultValue={body}
          />
        </div>
        <div>
          <button
            className={classes.button}
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </div>
        {error && <p className={classes.error}>{error.message}</p>}
      </form>
    </div>
  );
};
